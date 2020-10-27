import { Col, Row, Typography } from "antd"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import YouTube from "react-youtube"
import NotFound from "../../pages/404"
import { Interview, Review } from "../types/graphql"
import AppLayout from "./AppLayout"
import { StyledContent } from "./style"
import ShowTable from "./VideoTable"

const { Title } = Typography

interface VideoPageProps {
  isLoading: boolean
  title: string
  videos: Array<Review | Interview>
}

const VideoPage: React.FunctionComponent<VideoPageProps> = ({ isLoading, title, videos }) => {
  const [selectedReview, setSelectedReview] = useState<string | null>(null)

  const router = useRouter()

  useEffect(() => {
    const { v } = router.query
    if (typeof v === "string") {
      setSelectedReview(v)
    }
  }, [])

  const handleSelectReview = (review: string) => {
    setSelectedReview(review)
    window.scroll({top: 0, left: 0, behavior: 'smooth' })
  }

  const opts = {
    height: '390',
    width: '640',
    playerVars: { autoplay: 1 as 1 }
  }
  
  if (!isLoading && videos.length === 0) {
    return <NotFound />
  }

  return(
    <AppLayout>
      <StyledContent>
        <Title level={1}>
          {title}
        </Title>
        <Row align="middle" justify="center" >
          <Col xs={24}>
            {selectedReview && <YouTube videoId={selectedReview} opts={opts}/>}
          </Col>
        </Row>
        <ShowTable loading={isLoading} videos={videos} onSelect={(r) => handleSelectReview(r)} />      
      </StyledContent>
    </AppLayout>
  )
}

export default VideoPage