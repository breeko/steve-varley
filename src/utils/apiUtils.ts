import { API, graphqlOperation } from "aws-amplify"
import _ from "lodash"
import * as custom from '../../src/graphql/custom-queries'
import * as queries from '../../src/graphql/queries'
import { Interview, MoviesListItem, Review, TvVideoFull } from "../../src/types/graphql"
import { GetMovieInterviewQuery, GetMovieReviewQuery, GetTvInterviewQuery, GetTvReviewQuery, ListMovieInterviewFullQuery, ListMovieReviewsFullQuery, ListMoviesQuery, ListTvInterviewFullQuery, ListTvReviewsFullQuery, ListTvSeriessQuery } from "../API"
import { TvSeriesFull, TvSeriesListItem } from "../types/graphql"
import { isDefined } from "./utils"

interface TvReviewsResponse {
  data: { getTvSeries: TvSeriesFull }
}

interface MovieResponse {
  data: { getMovie: TvSeriesFull }
}

export interface MediaResponse {
  id: string
  name: string
  image: string
  interviews: Interview[]
  reviews: Review[]
}

const sortEpisode = (a: Review, b: Review) => {
  if (a.season === null || a.season === undefined) return -1
  if (b.season === null || b.season === undefined) return 1
  if (a.season < b.season) return -1
  if (a.season > b.season) return 1
  if (a.episode === null || a.episode === undefined) return -1
  if (b.episode === null || b.episode === undefined) return 1
  return a.episode < b.episode ? -1 : 1
}

const noLimit = { limit: 65536 }

// media
export const listTvSeries = async (): Promise<TvSeriesListItem[]> => {
  const m = await API.graphql(graphqlOperation(queries.listTvSeriess, noLimit)) as {data: ListTvSeriessQuery}
  const filtered = m.data.listTvSeriess?.items?.filter(isDefined) || []
  const sorted = _.orderBy(filtered, [i => i.name])
  return sorted
}

export const listMovies = async (): Promise<MoviesListItem[]> => {
  const m = await API.graphql(graphqlOperation(queries.listMovies, noLimit)) as {data: ListMoviesQuery}
  const filtered = m.data.listMovies?.items?.filter(isDefined) || []
  const sorted = _.orderBy(filtered, [i => i.name])
  return sorted
}


// review
export const listTvReviewsFull = async (): Promise<TvVideoFull[]> => {
  const m = await API.graphql(graphqlOperation(custom.listTvReviewsFull, noLimit)) as {data: ListTvReviewsFullQuery}
  const filtered = m.data.listTvReviews?.items?.filter(isDefined) || []
  const sorted = _.orderBy(filtered, [i => i.name])
  return sorted
}

export const listMovieReviewsFull = async (): Promise<TvVideoFull[]> => {
  const m = await API.graphql(graphqlOperation(custom.listMovieReviewsFull, noLimit)) as {data: ListMovieReviewsFullQuery}
  const filtered = m.data.listMovieReviews?.items?.filter(isDefined) || []
  const sorted = _.orderBy(filtered, [i => i.name])
  return sorted
}


// interview
export const listTvInterviewsFull = async (): Promise<TvVideoFull[]> => {
  const m = await API.graphql(graphqlOperation(custom.listTvInterviewFull, noLimit)) as {data: ListTvInterviewFullQuery}
  const filtered = m.data.listTvInterviews?.items?.filter(isDefined) || []
  const sorted = _.orderBy(filtered, [i => i.name])
  return sorted
}

export const listMovieInterviewsFull = async (): Promise<TvVideoFull[]> => {
  const m = await API.graphql(graphqlOperation(custom.listMovieInterviewsFull, noLimit)) as {data: ListMovieInterviewFullQuery}
  const filtered = m.data.listMovieInterviews?.items?.filter(isDefined) || []
  const sorted = _.orderBy(filtered, [i => i.name])
  return sorted
}


export const loadTvMedia = async (id: string | string[]): Promise<MediaResponse> => {
  const res = await API.graphql(graphqlOperation(custom.getTvSeriesFull, { id } )) as TvReviewsResponse
  const reviews = res.data.getTvSeries?.reviews?.items?.filter(isDefined) || []
  const sortedReviews = reviews.sort(sortEpisode).map(s => ({...s, key: s.path}))
  const interviews = res.data.getTvSeries?.interviews?.items?.filter(isDefined) || []
  const sortedInterviews = interviews.sort((a, b) => a.published.localeCompare(b.published)).map(s => ({...s, key: s.path}))

  return {...res.data.getTvSeries, interviews: sortedInterviews, reviews: sortedReviews}
}

export const loadMovieMedia = async (id: string | string[]): Promise<MediaResponse> => {
  const res = await API.graphql(graphqlOperation(custom.getMoviesFull, { id } )) as MovieResponse
  const reviews = res.data.getMovie?.reviews?.items?.filter(isDefined) || []
  const sortedReviews = reviews.sort(sortEpisode).map(s => ({...s, key: s.path}))
  const interviews = res.data.getMovie?.interviews?.items?.filter(isDefined) || []
  const sortedInterviews = interviews.sort((a, b) => a.published.localeCompare(b.published)).map(s => ({...s, key: s.path}))

  return {...res.data.getMovie, interviews: sortedInterviews, reviews: sortedReviews}
}

export const loadTvReview = async (id: string | string[]): Promise<GetTvReviewQuery> => {
  const res = await API.graphql(graphqlOperation(queries.getTvReview, { id } )) as { data: GetTvReviewQuery }
  return res.data
}

export const loadTvInterview = async (id: string | string[]): Promise<GetTvInterviewQuery> => {
  const res = await API.graphql(graphqlOperation(queries.getTvInterview, { id } )) as { data: GetTvInterviewQuery }
  return res.data
}

export const loadMovieReview = async (id: string | string[]): Promise<GetMovieReviewQuery> => {
  const res = await API.graphql(graphqlOperation(queries.getMovieReview, { id } )) as { data: GetMovieReviewQuery }
  return res.data
}

export const loadMovieInterview = async (id: string | string[]): Promise<GetMovieInterviewQuery> => {
  const res = await API.graphql(graphqlOperation(queries.getMovieInterview, { id } )) as { data: GetMovieInterviewQuery }
  return res.data
}
export const loadLatestVideos = async (limit: number): Promise<Array<Interview | Review>> => {
  const tvReviews = API.graphql(graphqlOperation(custom.listTvReviewsFull, { limit } )) as Promise<{data: ListTvReviewsFullQuery}>
  const tvInterviews = API.graphql(graphqlOperation(custom.listTvInterviewFull, { limit } )) as Promise<{data: ListTvInterviewFullQuery}>
  const movieReviews = API.graphql(graphqlOperation(custom.listMovieReviewsFull, { limit } )) as Promise<{data: ListMovieReviewsFullQuery}>
  const movieInterviews =API.graphql(graphqlOperation(custom.listMovieInterviewsFull, { limit } )) as Promise<{data: ListMovieInterviewFullQuery}>

  return Promise.all([tvReviews, tvInterviews, movieReviews, movieInterviews]).then(([tvR, tvI, mR, mI]) => {
    const a = tvR.data.listTvReviews?.items?.filter(isDefined) || []
    const b = tvI.data.listTvInterviews?.items?.filter(isDefined) || []
    const c = mR.data.listMovieReviews?.items?.filter(isDefined) || []
    const d = mI.data.listMovieInterviews?.items?.filter(isDefined) || []
    let out: Array<Interview | Review> = []
    out = out.concat(a)
    out = out.concat(b)
    out = out.concat(c)
    out = out.concat(d)
    out = _.sortBy(out, "-published").slice(0, 3)
    return out
  })
}