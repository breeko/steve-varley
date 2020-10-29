
import React, { useEffect, useState } from "react"
import { MEDIA_TYPE } from "../../src/API"
import MediaPage from "../../src/components/MediaPage"
import { Media } from "../../src/types/graphql"
import { listMedia } from "../../src/utils/apiUtils"


const Tv: React.FunctionComponent = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [media, setMedia] = useState<Media[]>([])

  useEffect(() => {
    listMedia({type: MEDIA_TYPE.MOVIE}).then(m => setMedia(m)).finally(() => setIsLoading(false))
  }, [])

  return(
    <MediaPage media={media} type="movies" isLoading={isLoading}/>
  )
}

export default Tv
