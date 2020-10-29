import { withAuthenticator } from '@aws-amplify/ui-react'
import { Layout, Table, Tabs } from "antd"
import { ColumnsType } from 'antd/lib/table'
import React, { useCallback, useEffect, useState } from "react"
import AdminSider from '../../src/components/admin/AdminSider'
import { buildMediaColumns, buildVideoColumns } from '../../src/components/admin/columns'
import AddModal, { EditProps } from '../../src/components/admin/modals/AddModal'
import AppLayout from "../../src/components/AppLayout"
import { Media, VideoFull } from '../../src/types/graphql'
import { listMedia, listVideo } from "../../src/utils/apiUtils"
import Search from '../../src/components/admin/search'


const { Content } = Layout
const { TabPane } = Tabs

const Admin: React.FunctionComponent  = () => {
  const [editProps, setEditProps] = useState<EditProps | undefined>(undefined)
  const [showAdd, setShowAdd] = useState(false)
  const [media, setMedia] = useState<Media[]>([])
  const [filteredMedia, setFilteredMedia] = useState<Media[]>([])
  const [videos, setVideos] = useState<VideoFull[]>([])
  const [filteredVideos, setFilteredVideos] = useState<VideoFull[]>([])
  const [mediaColumns, setMediaColumns] = useState<ColumnsType<Media>>([])
  const [videoColumns, setVideoColumns] = useState<ColumnsType<VideoFull>>([])

  const updateAll = useCallback(() => {
    listMedia({}).then(s => {setMedia(s); setFilteredMedia(s)})
    listVideo({}).then(v => {setVideos(v); setFilteredVideos(v)})
  }, [])

  useEffect(() => updateAll(), [updateAll])

  useEffect(() => {
    if (showAdd === false) {
      updateAll()
      setEditProps(undefined)
    }
  }, [showAdd])


  const handleSearch = (tab: "media" | "video", val: string) => {
    switch(tab) {
      case "media":
        const s = media.filter(m => m.name.toLowerCase().includes(val.toLowerCase()))
        setFilteredMedia(s)
        break
      case "video":
        const r = videos.filter(v => `${v.name}${v.media.name}`.toLowerCase().includes(val.toLowerCase()))
        setFilteredVideos(r)
        break
      }
  }

  useEffect(() => {
    const c = buildMediaColumns(media, id => { setEditProps({id, type: "media"}); setShowAdd(true) })
    setMediaColumns(c)  
  }, [media])

  useEffect(() => {
    const c = buildVideoColumns(videos, id => { setEditProps({id, type: "video"}); setShowAdd(true) })
    setVideoColumns(c)
  }, [videos])

  return(
    <AppLayout sider={<AdminSider setShowAdd={setShowAdd}/>}>
      { showAdd && <AddModal onClose={() => setShowAdd(false)} edit={editProps} /> }
      <Content style={{padding: "10px"}}>
        <Tabs defaultActiveKey="1" >
          <TabPane tab="Media" key="1">
            <Search setSearch={s => handleSearch("media", s)} />
            <Table columns={mediaColumns} dataSource={filteredMedia}/>
          </TabPane>
          <TabPane tab="Videos" key="2">
            <Search setSearch={s => handleSearch("video", s)} />
            <Table columns={videoColumns} dataSource={filteredVideos}/>
          </TabPane>
        </Tabs>
      </Content>
    </AppLayout>
  )
}

export default withAuthenticator(Admin)
