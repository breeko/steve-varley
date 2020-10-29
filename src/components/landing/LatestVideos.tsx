import { Col, Space } from "antd"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { MEDIA_TYPE } from "../../API"
import { LatestVideosRow, MainTagLine } from "../../style"
import { VideoFull } from "../../types/graphql"
import { loadLatestVideos } from "../../utils/apiUtils"

const LatestVideos: React.FunctionComponent = () => {
  const [videos, setVideos] = useState<VideoFull[]>([])

  useEffect(() => {
    loadLatestVideos(3).then(v => setVideos(v))
  }, [])


  return(
    <Space direction="vertical" style={{width: "100%"}}>
      <MainTagLine>Latest Videos</MainTagLine>
      {videos.map(v => {
        const pathname = v.media.type === MEDIA_TYPE.TV ? `/tv/${v.media.id}` : v.media.type === MEDIA_TYPE.MOVIE ? `/movies/${v.media.id}` : ""
        return (
          <LatestVideosRow key={v.path} gutter={[16, 16]}>
            <Col span={24}>
              <Link href={{ pathname, query: { v: v.id } }}>
                <a style={{color: "inherit"}}>{v.name} ({v.published})</a>
              </Link>
            </Col>
          </LatestVideosRow>  
        )
      })}
    </Space>
  )
}

export default LatestVideos
