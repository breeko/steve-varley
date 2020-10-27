import { Button, Table } from "antd"
import { ColumnsType } from "antd/lib/table"
import React from "react"
import { Interview, Review } from "../types/graphql"
import { getVideoId } from "../utils/youtubeUtils"

interface ShowTableProps {
  videos: Array<Review | Interview>
  onSelect: (videoId: string) => void
  loading?: boolean
}

const ShowTable: React.FunctionComponent<ShowTableProps> = ({ loading, videos, onSelect }) => {
  
  const columns: ColumnsType<Review | Interview> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (v, record) => {
        const videoId = getVideoId(record.path)
        return <Button type="link" onClick={() => onSelect(videoId)}>{v}</Button>
      }
    },
    {
      title: "Duration",
      dataIndex: "lengthSeconds",
      key: "lengthSeconds",
      render: (v: string) => {
        const n = Number(v)
        return `${Math.floor(n / 60)}` + ":" + `${n % 60}`.padStart(2, "0")
      }
    },
    {
      title: "Season",
      dataIndex: "season",
      key: "season",
    },
    {
      title: "Episode",
      dataIndex: "episode",
      key: "episode",
    },
    {
      title: "Score",
      dataIndex: "score",
      key: "score",
    },
  ]


  return(
    <Table loading={loading} columns={columns} dataSource={videos}/>
  )
}

export default ShowTable
