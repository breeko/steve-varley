import { GraphQLResult, GRAPHQL_AUTH_MODE } from "@aws-amplify/api-graphql"
import { API, graphqlOperation } from "aws-amplify"
import _ from "lodash"
import * as custom from '../../src/graphql/custom-queries'
import * as mutations from '../../src/graphql/mutations'
import * as queries from '../../src/graphql/queries'
import { CreateMediaInput, CreateVideoInput, GetMediaFullQuery, GetMediaQuery, GetVideoFullQuery, ListMediasQuery, ListMediasQueryVariables, ListVideoFullQuery, ListVideoFullQueryVariables, MediaByMediaTypeQuery, MediaByMediaTypeQueryVariables, UpdateMediaInput, UpdateVideoInput, VideoByVideoTypeFullQuery, VideoByVideoTypeFullQueryVariables } from "../API"
import { Media, MediaFull, VideoFull } from "../types/graphql"
import { isDefined } from "./utils"

const noLimit = { limit: 65536 }

// media
export const listMedia = async (variables: MediaByMediaTypeQueryVariables): Promise<Media[]> =>
    variables.type ? listMediaByType(variables) : listMediaAll(variables)


const listMediaByType = async (variables: MediaByMediaTypeQueryVariables): Promise<Media[]> => {
  const m = await API.graphql(graphqlOperation(queries.mediaByMediaType, {...noLimit, ...variables})) as {data: MediaByMediaTypeQuery}
  const filtered = m.data.mediaByMediaType?.items?.filter(isDefined) || []
  const sorted = _.orderBy(filtered, [i => i.name])
  return sorted
}

const listMediaAll = async (variables: ListMediasQueryVariables): Promise<Media[]> => {
  const m = await API.graphql(graphqlOperation(queries.listMedias, {...noLimit, ...variables})) as {data: ListMediasQuery}
  const filtered = m.data.listMedias?.items?.filter(isDefined) || []
  const sorted = _.orderBy(filtered, [i => i.name])
  return sorted
}

export const listVideo = async (variables: VideoByVideoTypeFullQueryVariables) =>
  variables.type ? listVideosByType(variables) : listVideosAll(variables)

const listVideosByType = async (variables: VideoByVideoTypeFullQueryVariables) => {
  const m = await API.graphql(graphqlOperation(custom.videoByVideoTypeFull, {...noLimit, ...variables})) as {data: VideoByVideoTypeFullQuery}
  const filtered = m.data.videoByVideoType?.items?.filter(isDefined) || []
  const sorted = _.orderBy(filtered, [i => i.name])
  return sorted
}

const listVideosAll = async (variables: ListVideoFullQueryVariables) => {
  const m = await API.graphql(graphqlOperation(custom.listVideoFull, {...noLimit, ...variables})) as {data: ListVideoFullQuery}
  const filtered = m.data.listVideos?.items?.filter(isDefined) || []
  const sorted = _.orderBy(filtered, [i => i.name])
  return sorted
}

export const getMedia = async (id: string): Promise<Media | undefined> => {
  const m = await API.graphql(graphqlOperation(queries.getMedia, { id })) as {data: GetMediaQuery}
  return m.data.getMedia || undefined
}

export const getMediaFull = async (id: string): Promise<MediaFull | undefined> => {
  const m = await API.graphql(graphqlOperation(custom.getMediaFull, { id })) as {data: GetMediaFullQuery}
  const filteredVideos = m.data.getMedia?.videos?.items?.filter(isDefined) || []
  const videos = _.orderBy(filteredVideos, [i => i.name])
  const media = m.data.getMedia ? {...m.data.getMedia, videos} : undefined
  return media
}

export const getVideoFull = async (id: string): Promise<VideoFull | undefined> => {
  const m = await API.graphql(graphqlOperation(custom.getVideoFull, { id })) as {data: GetVideoFullQuery}
  return m.data.getVideo || undefined
}


// TODO: update this!
export const loadLatestVideos = async (limit: number) =>
  listVideosAll({})
    .then(videos => _.sortBy(videos, v => v.published).reverse().slice(0, limit))

export const deleteMedia = async (id: string) => {
  const input = { id }
  const media = await getMediaFull(id)
  const mediaDeletions = media?.videos.map(async (v) => deleteVideo(v.id))
  mediaDeletions && Promise.all(mediaDeletions)
  const opts = {...graphqlOperation(mutations.deleteMedia, {input}), authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS}
  const res = await API.graphql(opts) as Promise<GraphQLResult>
  return res
}

export const createMedia = async (input: CreateMediaInput) => {
  const opts = {...graphqlOperation(mutations.createMedia, {input}), authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS}
  const res = await API.graphql(opts) as Promise<GraphQLResult>
  return res
}

export const updateMedia = async (input: UpdateMediaInput) => {
  const opts = {...graphqlOperation(mutations.updateMedia, {input}), authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS}
  const res = await API.graphql(opts) as Promise<GraphQLResult>
  return res
}

export const deleteVideo = async (id: string) => {
  const input = { id }
  const opts = {...graphqlOperation(mutations.deleteVideo, {input}), authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS}
  const res = await API.graphql(opts) as Promise<GraphQLResult>
  return res
}

export const createVideo = async (input: CreateVideoInput) => {
  const opts = {...graphqlOperation(mutations.createVideo, {input}), authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS}
  const res = await API.graphql(opts) as Promise<GraphQLResult>
  return res
}

export const updateVideo = async (input: UpdateVideoInput) => {
  const opts = {...graphqlOperation(mutations.updateVideo, {input}), authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS}
  const res = await API.graphql(opts) as Promise<GraphQLResult>
  return res
}
