import { Col, Space } from "antd"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { MEDIA_TYPE } from "../../API"
import { DottedTitle, LatestVideosRow } from "../../style"
import { VideoFull } from "../../types/graphql"
import { loadLatestVideos } from "../../utils/apiUtils"

const LatestVideos: React.FunctionComponent = () => {
  const [videos, setVideos] = useState<VideoFull[]>([])

  useEffect(() => {
    loadLatestVideos(3).then(v => setVideos(v))
  }, [])


  return(
    <div style={{alignItems: "center", display: "flex", flexDirection: "column"}}>
      <Space direction="vertical" >
        <DottedTitle className="blink">Latest Videos</DottedTitle>
        {videos.map(v => {
          let prefix = ""
          switch(v.media.type) {
            case MEDIA_TYPE.TV:
              prefix = `/tv`
              break
            case MEDIA_TYPE.MOVIE:
              prefix = `/movies`
              break
            case MEDIA_TYPE.OTHER:
              prefix = `/interviews`
              break
          }
          const pathname = `${prefix}/${v.media.id}`
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
    </div>
  )
}

export default LatestVideos
