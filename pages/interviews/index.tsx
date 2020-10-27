import { useRouter } from "next/dist/client/router"
import React, { useEffect, useState } from "react"
import VideoPage from "../../src/components/VideoPage"
import { Interview, Review } from "../../src/types/graphql"
import { listMovieInterviewsFull, listTvInterviewsFull } from "../../src/utils/apiUtils"

const Interviews: React.FunctionComponent = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [videos, setVideos] = useState<Array<Review | Interview>>([])

  const router = useRouter()

  const fetchInterviews = async () => {    
    const tv = listTvInterviewsFull()
    const movie = listMovieInterviewsFull()
    const m = await Promise.all([tv, movie]).then(([t, m]) => {
      let v: Array<Interview | Review> = []
      v = v.concat(t)
      v = v.concat(m)
      return v
    })
    setVideos(m)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchInterviews()
  }, [router.query])

  // TODO: special table for interviews!!
  return(
    <VideoPage isLoading={isLoading} title="Interviews" videos={videos} />
  )
}

export default Interviews
