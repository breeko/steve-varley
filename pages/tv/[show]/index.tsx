import { useRouter } from "next/dist/client/router"
import React, { useEffect, useState } from "react"
import VideoPage from "../../../src/components/VideoPage"
import { MediaFull } from "../../../src/types/graphql"
import { getMediaFull } from "../../../src/utils/apiUtils"


const Show: React.FunctionComponent = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [media, setMedia] = useState<MediaFull>()


  const router = useRouter()

  const fetchReviews = async () => {    
    if (Object.keys(router.query).length === 0) { return }
    const { show } = router.query
    if (typeof show === "string") {
      const m = await getMediaFull(show)
      setMedia(m)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchReviews()
  }, [router.query])


  return(
    <VideoPage isLoading={isLoading} title={media?.name || ""} videos={media?.videos || []} />
  )
}

export default Show
