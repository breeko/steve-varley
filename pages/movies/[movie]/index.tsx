import { useRouter } from "next/dist/client/router"
import React, { useEffect, useState } from "react"
import VideoPage from "../../../src/components/VideoPage"
import { Media, Video } from "../../../src/types/graphql"
import { getMediaFull } from "../../../src/utils/apiUtils"

const Movie: React.FunctionComponent = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [media, setMedia] = useState<Media>()
  const [videos, setVideos] = useState<Array<Video>>([])

  const router = useRouter()

  const fetchReviews = async () => {    
    if (Object.keys(router.query).length === 0) { return }
    const { movie } = router.query
    if (typeof movie === "string") {
      const m = await getMediaFull(movie)
      setMedia(m)
      setVideos(m?.videos || [])
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchReviews()
  }, [router.query])


  return(
    <VideoPage isLoading={isLoading} title={media?.name || ""} videos={videos} />
  )
}

export default Movie
