import { withAuthenticator } from '@aws-amplify/ui-react'
import { Layout, Table, Tabs } from "antd"
import React, { useCallback, useEffect, useState } from "react"
import AdminSider from '../../src/components/admin/AdminSider'
import AddModal, { EditProps } from '../../src/components/admin/modals/AddModal'
import AppLayout from "../../src/components/AppLayout"
import { MoviesListItem, TvSeriesListItem, TvVideoFull } from "../../src/types/graphql"
import { listMovieInterviewsFull, listMovieReviewsFull, listMovies, listTvInterviewsFull, listTvReviewsFull, listTvSeries } from "../../src/utils/apiUtils"
import { buildInterviewColumns, buildMediaColumns, buildReviewColumns } from '../../src/components/admin/columns'
import Search from './search'


const { Content } = Layout
const { TabPane } = Tabs

const Admin: React.FunctionComponent  = () => {
  const [editProps, setEditProps] = useState<EditProps | undefined>(undefined)
  const [showAdd, setShowAdd] = useState(false)
  const [tvSeries, setTvSeries] = useState<TvSeriesListItem[]>([])
  const [tvReviews, setTvReviews] = useState<TvVideoFull[]>([])
  const [tvInterviews, setTvInterviews] = useState<TvVideoFull[]>([])
  const [filteredTvSeries, setFilteredTvSeries] = useState<TvSeriesListItem[]>([])
  const [filteredTvReviews, setFilteredTvReviews] = useState<TvVideoFull[]>([])
  const [filteredTvInterviews, setFilteredTvInterviews] = useState<TvVideoFull[]>([])

  const [movies, setMovies] = useState<MoviesListItem[]>([])
  const [movieReviews, setMovieReviews] = useState<TvVideoFull[]>([])
  const [movieInterviews, setMovieInterviews] = useState<TvVideoFull[]>([])
  const [filteredMovies, setFilteredMovies] = useState<MoviesListItem[]>([])
  const [filteredMovieReviews, setFilteredMovieReviews] = useState<TvVideoFull[]>([])
  const [filteredMovieInterviews, setFilteredMovieInterviews] = useState<TvVideoFull[]>([])

  const updateAll = useCallback(() => {
    listTvSeries().then(s => {setTvSeries(s); setFilteredTvSeries(s)})
    listTvReviewsFull().then(tv => {setTvReviews(tv); setFilteredTvReviews(tv)})
    listTvInterviewsFull().then(tv => {setTvInterviews(tv); setFilteredTvInterviews(tv)})
    listMovies().then(m => {setMovies(m); setFilteredMovies(m)})
    listMovieReviewsFull().then(m => {setMovieReviews(m); setFilteredMovieReviews(m)})
    listMovieInterviewsFull().then(m => {setMovieInterviews(m); setFilteredMovieInterviews(m)})
    
  }, [])

  useEffect(() => updateAll(), [updateAll])

  useEffect(() => {
    if (showAdd === false) {
      updateAll()
      setEditProps(undefined)
    }
  }, [showAdd])

  const handleSearch = (tab: "series" | "tvReview" | "tvInterview" | "movies" | "movieReview" | "movieInterview", val: string) => {
    switch(tab) {
      case "series":
        const s = tvSeries.filter(tv => tv.name.toLowerCase().includes(val.toLowerCase()))
        setFilteredTvSeries(s)
        break
      case "tvReview":
        const r = tvReviews.filter(tv => tv.name.toLowerCase().includes(val.toLowerCase()))
        setFilteredTvReviews(r)
        break
      case "tvInterview":
        const i = tvInterviews.filter(tv => tv.name.toLowerCase().includes(val.toLowerCase()))
        setFilteredTvInterviews(i)
        break
      case "movies":
        const m = movies.filter(m => m.name.toLowerCase().includes(val.toLowerCase()))
        setMovies(m)
        break
      }
  }

  const tvSeriesColumns = buildMediaColumns(id => { setShowAdd(true); setEditProps({ id, type: "series" })})
  const tvReviewColumns = buildReviewColumns(id => { setShowAdd(true); setEditProps({ id, type: "tvReview" })})
  const tvInterviewColumns = buildInterviewColumns(id => { setShowAdd(true); setEditProps({ id, type: "tvInterview" })})
  const movieColumns = buildMediaColumns(id => { setShowAdd(true); setEditProps({ id, type: "movie" })})
  const movieReviewColumns = buildReviewColumns(id => { setShowAdd(true); setEditProps({ id, type: "movieReview" })})
  const movieInterviewColumns = buildInterviewColumns(id => { setShowAdd(true); setEditProps({ id, type: "movieInterview" })})

  return(
    <AppLayout sider={<AdminSider setShowAdd={setShowAdd}/>}>
      { showAdd && <AddModal onClose={() => setShowAdd(false)} edit={editProps} /> }
      <Content style={{padding: "10px"}}>
        <Tabs defaultActiveKey="1" >
          <TabPane tab="Tv Series" key="1">
            <Search setSearch={s => handleSearch("series", s)} options={tvSeries.map(tv => ({value: tv.name}))}/>
            <Table columns={tvSeriesColumns} dataSource={filteredTvSeries}/>
          </TabPane>
          <TabPane tab="Tv Reviews" key="2">
            <Search setSearch={s => handleSearch("tvReview", s)} options={tvReviews.map(tv => ({value: tv.name}))}/>
            <Table columns={tvReviewColumns} dataSource={filteredTvReviews}/>
          </TabPane>
          <TabPane tab="Tv Interviews" key="3">
            <Search setSearch={s => handleSearch("tvInterview", s)} options={tvInterviews.map(tv => ({value: tv.name}))}/>
            <Table columns={tvInterviewColumns} dataSource={filteredTvInterviews}/>
          </TabPane>
          <TabPane tab="Movies" key="4">
            <Search setSearch={s => handleSearch("movies", s)} options={movies.map(tv => ({value: tv.name}))}/>
            <Table columns={movieColumns} dataSource={filteredMovies}/>
          </TabPane>
          <TabPane tab="Movie Reviews" key="5">
            <Search setSearch={s => handleSearch("movieReview", s)} options={movieReviews.map(tv => ({value: tv.name}))}/>
            <Table columns={movieReviewColumns} dataSource={filteredMovieReviews}/>
          </TabPane>
          <TabPane tab="Movie Interviews" key="6">
            <Search setSearch={s => handleSearch("movieInterview", s)} options={movieInterviews.map(tv => ({value: tv.name}))}/>
            <Table columns={movieInterviewColumns} dataSource={filteredMovieInterviews}/>
          </TabPane>
        </Tabs>
      </Content>
    </AppLayout>
  )
}

export default withAuthenticator(Admin)
