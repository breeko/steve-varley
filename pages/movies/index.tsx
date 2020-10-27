
import React, { useEffect, useState } from "react"
import MediaPage from "../../src/components/MediaPage"
import { listMovies } from "../../src/utils/apiUtils"

const Tv: React.FunctionComponent = () => {

  const [media, setMedia] = useState<Media[]>([])

  useEffect(() => {
    listMovies().then(m => setMedia(m))
  }, [])

  return(
    <MediaPage media={media} type="movies"/>
  )
}

export default Tv
