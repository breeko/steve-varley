import { Button, Space } from "antd";
import { ColumnsType } from "antd/lib/table";
import React from "react";
import { FiEdit } from "react-icons/fi";
import { TvVideoFull } from "../../types/graphql";


export const buildReviewColumns = (onEdit: (id: string) => void) => {
  const columns: ColumnsType<TvVideoFull> = [
    {
      title: "Action",
      key: "action",
      render: (_a, item) => <Space direction="horizontal">
        <Button icon={<FiEdit onClick={() => onEdit(item.id)}/>}/>
      </Space>
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
      onFilter: (value, record) => record.name === value,
    },
    {
      title: "Path",
      dataIndex: "path",
      key: "path",
    },
    {
      title: "Series",
      dataIndex: "series",
      key: "series",
      render: (_v, r) => r.series?.name,
      sorter: (a, b) => a?.series?.name.localeCompare(b.series?.name || "") || 0,
      onFilter: (value, record) => record.series?.name === value,
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
    {
      title: "Length (seconds)",
      dataIndex: "lengthSeconds",
      key: "lengthSeconds",
    },
    {
      title: "Published",
      dataIndex: "published",
      key: "published",
      sorter: (a, b) => a.published.localeCompare(b.published),
    },
  ]
  return columns
}

export const buildInterviewColumns = (onEdit: (id: string) => void) => {
  const columns: ColumnsType<TvVideoFull> = [
    {
      title: "Action",
      render: (_a, item) => <Space direction="horizontal">
        <Button icon={<FiEdit onClick={() => onEdit(item.id)}/>}/>
      </Space>
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
      onFilter: (value, record) => record.name === value,
    },
    {
      title: "Path",
      dataIndex: "path",
      key: "path",
    },
    {
      title: "Series",
      dataIndex: "series",
      key: "series",
      render: (_v, r) => r.series?.name,
      sorter: (a, b) => a.series?.name.localeCompare(b.series?.name || "") || 0,
      onFilter: (value, record) => record.series?.name === value,
    },
    {
      title: "Length (seconds)",
      dataIndex: "lengthSeconds",
      key: "lengthSeconds",
    },
    {
      title: "Published",
      dataIndex: "published",
      key: "published",
    },
  ]
  return columns
}

export const buildMediaColumns = (onEdit: (id: string) => void) => {
  const tvSeriesColumns: ColumnsType<{id: string, name: string}> = [
    {
      title: "Action",
      key: "action",
      render: (_a, item) => <Space direction="horizontal">
        <Button icon={<FiEdit onClick={() => onEdit(item.id)}/>}/>
      </Space>
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
      onFilter: (value, record) => record.name === value,
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
    },
  ]
  return tvSeriesColumns
}
