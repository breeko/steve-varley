
import React, { useEffect, useState } from "react"
import MediaPage from "../../src/components/MediaPage"
import { listTvSeries } from "../../src/utils/apiUtils"

const Tv: React.FunctionComponent = () => {

  const [media, setMedia] = useState<Media[]>([])

  useEffect(() => {
    listTvSeries().then(tv => setMedia(tv))
  }, [])

  return(
    <MediaPage media={media} type="tv"/>
  )
}

export default Tv
