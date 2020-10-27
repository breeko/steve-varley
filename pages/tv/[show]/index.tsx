import { useRouter } from "next/dist/client/router"
import React, { useEffect, useState } from "react"
import VideoPage from "../../../src/components/VideoPage"
import { Interview, Review } from "../../../src/types/graphql"
import { loadTvMedia, MediaResponse } from "../../../src/utils/apiUtils"

const Show: React.FunctionComponent = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [media, setMedia] = useState<MediaResponse>()
  const [videos, setVideos] = useState<Array<Review | Interview>>([])

  const router = useRouter()

  const fetchReviews = async () => {    
    if (Object.keys(router.query).length === 0) { return }
    const { show } = router.query
    const m = await loadTvMedia(show)
    let v: Array<Interview | Review> = []
    v = v.concat(m.interviews)
    v = v.concat(m.reviews)
    setMedia(m)
    setVideos(v)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchReviews()
  }, [router.query])


  return(
    <VideoPage isLoading={isLoading} title={media?.name || ""} videos={videos} />
  )
}

export default Show