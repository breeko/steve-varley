import { useRouter } from "next/dist/client/router"
import React, { useEffect, useState } from "react"
import { VIDEO_TYPE } from "../../src/API"
import VideoPage from "../../src/components/VideoPage"
import { Video } from "../../src/types/graphql"
import { listVideo } from "../../src/utils/apiUtils"

const Interviews: React.FunctionComponent = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [videos, setVideos] = useState<Video[]>([])

  const router = useRouter()

  const fetchInterviews = async () => {    
    listVideo({type: VIDEO_TYPE.INTERVIEW})
      .then(v => setVideos(v))
      .finally(() => setIsLoading(false))
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
