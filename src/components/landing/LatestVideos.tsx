import { Col, Space } from "antd"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { LatestVideosRow, MainTagLine } from "../../style"
import { Interview, Review } from "../../types/graphql"
import { loadLatestVideos } from "../../utils/apiUtils"

const LatestVideos: React.FunctionComponent = () => {
  const [videos, setVideos] = useState<Array<Interview | Review>>([])

  useEffect(() => {
    loadLatestVideos(3).then(v => setVideos(v))
  }, [])


  return(
    <Space direction="vertical">
      <MainTagLine>Latest Videos</MainTagLine>
      {videos.map(v => {
        const pathname = v.series ? `tv/${v.series.id}` : v.movie ? `/movies/${v.movie.id}` : ""
        return (
          <LatestVideosRow key={v.path} gutter={[16, 16]}>
            <Col span={24}>
              <Link href={{ pathname, query: { v: v.id } }}>
                <a style={{color: "inherit"}}>{v.name}</a>
              </Link>
            </Col>
          </LatestVideosRow>  
        )
      })}
    </Space>
  )
}

export default LatestVideos
