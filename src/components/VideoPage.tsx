import { Col, Divider, Row } from "antd"
import { useRouter } from "next/router"
import React, { useEffect, useLayoutEffect, useState } from "react"
import YouTube from "react-youtube"
import NotFound from "../../pages/404"
import { DottedTitle } from "../style"
import { Video } from "../types/graphql"
import { getVideoId } from "../utils/youtubeUtils"
import AppLayout from "./AppLayout"
import { StyledContent } from "./style"
import ShowTable from "./VideoTable"

interface VideoPageProps {
  isLoading: boolean
  title: string
  videos: Video[]
}

const VideoPage: React.FunctionComponent<VideoPageProps> = ({ isLoading, title, videos }) => {
  const [selectedReview, setSelectedReview] = useState<string | null>(null)
  const [size, setSize] = useState({width: 0, height: 0})
  const [autoplay, setAutoPlay] = useState(true)
  

  const router = useRouter()

  useEffect(() => {
    const { v } = router.query
    if (typeof v === "string") {
      const review = videos.find(video => video.id === v)
      if (review) {
        handleSelectReview(review.path)
      }
    }
  }, [videos])

  const handleSelectReview = (path: string) => {
    const videoId = getVideoId(path)
    setAutoPlay(true)
    setSelectedReview(videoId)
    window.scroll({top: 0, left: 0, behavior: 'smooth' })
  }

  useLayoutEffect(() => {
    const updateSize = () => {
      const width = Math.min(window.innerWidth - 20, 640)
      const height = Math.floor(width / 1.64)
      if (width != size.width) {
        setAutoPlay(false)
        setSize({width, height})
 
      }
    }
    window.addEventListener('resize', updateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  }, []);


  const {width, height} = size

  const opts = {
    height: `${height}`,
    width: `${width}`,
    playerVars: { autoplay: autoplay ? 1 as 1 : 0 as 0}
  }
  
  if (!isLoading && videos.length === 0) {
    return <NotFound />
  }

  return(
    <AppLayout>
      <StyledContent>
        <DottedTitle level={1}>
          {title}
        </DottedTitle>
        <Row align="middle" justify="center" >
          <Col xs={24}>
            {selectedReview && <YouTube videoId={selectedReview} opts={opts}/>}
          </Col>
        </Row>
        <Divider/>
        <ShowTable loading={isLoading} videos={videos.map(v => ({...v, key: v.id}))} onSelect={(r) => handleSelectReview(r)} />      
      </StyledContent>
    </AppLayout>
  )
}

export default VideoPage
