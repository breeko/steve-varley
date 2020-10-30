
import _ from "lodash"
import React, { useEffect, useState } from "react"
import { VIDEO_TYPE } from "../../src/API"
import MediaPage from "../../src/components/MediaPage"
import { Media } from "../../src/types/graphql"
import { listVideo } from "../../src/utils/apiUtils"

const Tv: React.FunctionComponent = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [media, setMedia] = useState<Media[]>([])

  useEffect(() => {
    listVideo({type: VIDEO_TYPE.INTERVIEW})
      .then(vidoes =>_.chain(vidoes).map(v => v.media).uniqBy(m => m.name).sortBy(m => m.name).value())
      .then(m => setMedia(m))
      .finally(() => setIsLoading(false))
  }, [])

  return(
    <MediaPage media={media} type="interviews" isLoading={isLoading}/>
  )
}

export default Tv
