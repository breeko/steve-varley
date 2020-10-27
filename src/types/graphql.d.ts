// API.ts
import { GetTvSeriesQuery, GetTvReviewQuery, ListTvSeriessQuery, ListTvSeriessQuery, ListTvReviewsQuery, GetTvSeriesFullQuery, GetMovieQuery, ListMoviesQuery, GetTvInterviewQuery} from "../API"

type TvSeries = Omit<Exclude<GetTvSeriesQuery["getTvSeries"], null>, "__typename">
type TvSeriesFull = Omit<Exclude<GetTvSeriesFullQuery["getTvSeries"], null>, "__typename">
type TvVideoFull = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  lengthSeconds: number;
  published: string;
  path: string;
  season?: number | null;
  episode?: number | null;
  score?: number;
  movie?: {
    id: string
    name: string
  }
  series?: {
    id:string
    name: string
  }
}

// type Movie = Omit<Exclude<GetMovieQuery["getMovie"], null>, "__typename">
// type MovieFull = Omit<Exclude<GetMovie["getMovie"], null>, "__typename">
// type TvReviewFull = Omit<Exclude<GetTvReviewQuery["getTvReview"], null>, "__typename">
// type TvInterviewFull = Omit<Exclude<GetTvInterviewQuery["getTvInterview"], null>, "__typename">

type Movie = Omit<Exclude<GetMovieQuery["getMovie"], null>, "__typename">

interface Review {
  id: string
  path: string
  name: string
  lengthSeconds: number
  season?: number | null
  episode?: number | null
  score?: number
  series?: {
    id: string
    name: string
  }
  movie?: {
    id: string
    name: string
  }
}

interface Interview {
  id: string
  path: string
  name: string
  lengthSeconds: number
  series?: {
    id: string
    name: string
  }
  movie?: {
    id: string
    name: string
  }
}

type TvSeriesListItem = Pick<TvSeries, Exclude<keyof TvSeries, "reviews" | "interviews">>
type TvReviewListItem = Pick<Review, Exclude<keyof Review, "series">>
type TvInterviewListItem = Pick<Interview, Exclude<keyof Interview, "series">>
type MoviesListItem = Pick<Movie, Exclude<keyof Movie, "reviews" | "interviews">>

type ListTvSeries = Omit<Exclude<ListTvSeriessQuery["listTvSeriess"], null>, "__typename">
type ListMovies = Omit<Exclude<ListMoviesQuery["listMovies"], null>, "__typename">
