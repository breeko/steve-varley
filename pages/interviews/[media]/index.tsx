import { useRouter } from "next/dist/client/router"
import React, { useEffect, useState } from "react"
import { VIDEO_TYPE } from "../../../src/API"
import VideoPage from "../../../src/components/VideoPage"
import { MediaFull } from "../../../src/types/graphql"
import { getMediaFull } from "../../../src/utils/apiUtils"

const Interviews: React.FunctionComponent = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [media, setMedia] = useState<MediaFull>()

  const router = useRouter()

  const fetchInterviews = async () => {
    if (Object.keys(router.query).length === 0) { return }
    const { media } = router.query
    if (typeof media === "string") {
      const m = await getMediaFull(media)
      setMedia(m)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchInterviews()
  }, [router.query])

  // TODO: special table for interviews!!
  return(
    <VideoPage isLoading={isLoading} title="Interviews" videos={media?.videos.filter(v => v.type === VIDEO_TYPE.INTERVIEW) || []} />
  )
}

export default Interviews
