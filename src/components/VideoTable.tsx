import { Button, Table } from "antd"
import { ColumnsType } from "antd/lib/table"
import _ from "lodash"
import React from "react"
import { Video } from "../types/graphql"
import { isDefined } from "../utils/utils"

interface ShowTableProps {
  videos: Video[]
  onSelect: (videoId: string) => void
  loading?: boolean
}

const ShowTable: React.FunctionComponent<ShowTableProps> = ({ loading, videos, onSelect }) => {
  const columns: ColumnsType<Video> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (v, record) => {
        return <Button type="link" onClick={() => onSelect(record.path)}>{v}</Button>
      },
      filters: videos.map(v => ({text: v.name, value: v.name})),
    },
    // {
    //   title: "Duration",
    //   dataIndex: "lengthSeconds",
    //   key: "lengthSeconds",
    //   render: (v: string) => {
    //     const n = Number(v)
    //     return `${Math.floor(n / 60)}` + ":" + `${n % 60}`.padStart(2, "0")
    //   }
    // },
    {
      title: "Published",
      dataIndex: "published",
      key: "published",
      sorter: (a, b) => a.published.localeCompare(b.published),
      defaultSortOrder: "descend"
      // render: (v: string) => {
      //   const n = Number(v)
      //   return `${Math.floor(n / 60)}` + ":" + `${n % 60}`.padStart(2, "0")
      // }
    },
    {
      title: "Season",
      dataIndex: "season",
      key: "season",
      sorter: (a, b) => (a.season || Number.NEGATIVE_INFINITY) - (b.season || Number.NEGATIVE_INFINITY),
      filters: _.chain(videos).map(v => (v.season ? {text: `${v.season}`, value: v.season} : undefined)).uniqBy(v => v && v.text).filter(isDefined).value()

    },
    {
      title: "Episode",
      dataIndex: "episode",
      key: "episode",
      sorter: (a, b) => (a.episode || Number.NEGATIVE_INFINITY) - (b.episode || Number.NEGATIVE_INFINITY),
    },
    {
      title: "Score",
      dataIndex: "score",
      sorter: (a, b) => (a.score || Number.NEGATIVE_INFINITY) - (b.score || Number.NEGATIVE_INFINITY),
      key: "score",
    },
  ]


  return(
    <Table loading={loading} columns={columns} dataSource={videos}/>
  )
}

export default ShowTable
