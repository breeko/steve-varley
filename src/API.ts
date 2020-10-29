/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export enum MEDIA_TYPE {
  MOVIE = "MOVIE",
  TV = "TV",
  OTHER = "OTHER",
}


export enum VIDEO_TYPE {
  REVIEW = "REVIEW",
  INTERVIEW = "INTERVIEW",
}


export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelVideoFilterInput = {
  id?: ModelIDInput | null,
  type?: ModelVIDEO_TYPEInput | null,
  name?: ModelStringInput | null,
  lengthSeconds?: ModelIntInput | null,
  published?: ModelStringInput | null,
  path?: ModelStringInput | null,
  season?: ModelIntInput | null,
  episode?: ModelIntInput | null,
  score?: ModelFloatInput | null,
  and?: Array< ModelVideoFilterInput | null > | null,
  or?: Array< ModelVideoFilterInput | null > | null,
  not?: ModelVideoFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelVIDEO_TYPEInput = {
  eq?: VIDEO_TYPE | null,
  ne?: VIDEO_TYPE | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type CreateMediaInput = {
  id?: string | null,
  type: MEDIA_TYPE,
  name: string,
  image: string,
};

export type ModelMediaConditionInput = {
  type?: ModelMEDIA_TYPEInput | null,
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelMediaConditionInput | null > | null,
  or?: Array< ModelMediaConditionInput | null > | null,
  not?: ModelMediaConditionInput | null,
};

export type ModelMEDIA_TYPEInput = {
  eq?: MEDIA_TYPE | null,
  ne?: MEDIA_TYPE | null,
};

export type UpdateMediaInput = {
  id: string,
  type?: MEDIA_TYPE | null,
  name?: string | null,
  image?: string | null,
};

export type DeleteMediaInput = {
  id?: string | null,
};

export type CreateVideoInput = {
  id?: string | null,
  type: VIDEO_TYPE,
  name: string,
  lengthSeconds: number,
  published: string,
  path: string,
  season?: number | null,
  episode?: number | null,
  score?: number | null,
  videoMediaId: string,
};

export type ModelVideoConditionInput = {
  type?: ModelVIDEO_TYPEInput | null,
  name?: ModelStringInput | null,
  lengthSeconds?: ModelIntInput | null,
  published?: ModelStringInput | null,
  path?: ModelStringInput | null,
  season?: ModelIntInput | null,
  episode?: ModelIntInput | null,
  score?: ModelFloatInput | null,
  and?: Array< ModelVideoConditionInput | null > | null,
  or?: Array< ModelVideoConditionInput | null > | null,
  not?: ModelVideoConditionInput | null,
};

export type UpdateVideoInput = {
  id: string,
  type?: VIDEO_TYPE | null,
  name?: string | null,
  lengthSeconds?: number | null,
  published?: string | null,
  path?: string | null,
  season?: number | null,
  episode?: number | null,
  score?: number | null,
  videoMediaId?: string | null,
};

export type DeleteVideoInput = {
  id?: string | null,
};

export type CreateTvSeriesInput = {
  id?: string | null,
  name: string,
  image: string,
};

export type ModelTvSeriesConditionInput = {
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelTvSeriesConditionInput | null > | null,
  or?: Array< ModelTvSeriesConditionInput | null > | null,
  not?: ModelTvSeriesConditionInput | null,
};

export type UpdateTvSeriesInput = {
  id: string,
  name?: string | null,
  image?: string | null,
};

export type DeleteTvSeriesInput = {
  id?: string | null,
};

export type CreateTvReviewInput = {
  id?: string | null,
  name: string,
  lengthSeconds: number,
  published: string,
  path: string,
  season?: number | null,
  episode?: number | null,
  score: number,
  tvReviewSeriesId: string,
};

export type ModelTvReviewConditionInput = {
  name?: ModelStringInput | null,
  lengthSeconds?: ModelIntInput | null,
  published?: ModelStringInput | null,
  path?: ModelStringInput | null,
  season?: ModelIntInput | null,
  episode?: ModelIntInput | null,
  score?: ModelFloatInput | null,
  and?: Array< ModelTvReviewConditionInput | null > | null,
  or?: Array< ModelTvReviewConditionInput | null > | null,
  not?: ModelTvReviewConditionInput | null,
};

export type UpdateTvReviewInput = {
  id: string,
  name?: string | null,
  lengthSeconds?: number | null,
  published?: string | null,
  path?: string | null,
  season?: number | null,
  episode?: number | null,
  score?: number | null,
  tvReviewSeriesId?: string | null,
};

export type DeleteTvReviewInput = {
  id?: string | null,
};

export type CreateTvInterviewInput = {
  id?: string | null,
  name: string,
  lengthSeconds: number,
  published: string,
  path: string,
  tvInterviewSeriesId: string,
};

export type ModelTvInterviewConditionInput = {
  name?: ModelStringInput | null,
  lengthSeconds?: ModelIntInput | null,
  published?: ModelStringInput | null,
  path?: ModelStringInput | null,
  and?: Array< ModelTvInterviewConditionInput | null > | null,
  or?: Array< ModelTvInterviewConditionInput | null > | null,
  not?: ModelTvInterviewConditionInput | null,
};

export type UpdateTvInterviewInput = {
  id: string,
  name?: string | null,
  lengthSeconds?: number | null,
  published?: string | null,
  path?: string | null,
  tvInterviewSeriesId?: string | null,
};

export type DeleteTvInterviewInput = {
  id?: string | null,
};

export type CreateMovieInput = {
  id?: string | null,
  name: string,
  image: string,
};

export type ModelMovieConditionInput = {
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelMovieConditionInput | null > | null,
  or?: Array< ModelMovieConditionInput | null > | null,
  not?: ModelMovieConditionInput | null,
};

export type UpdateMovieInput = {
  id: string,
  name?: string | null,
  image?: string | null,
};

export type DeleteMovieInput = {
  id?: string | null,
};

export type CreateMovieReviewInput = {
  id?: string | null,
  name: string,
  lengthSeconds: number,
  published: string,
  path: string,
  score: number,
  movieReviewMovieId: string,
};

export type ModelMovieReviewConditionInput = {
  name?: ModelStringInput | null,
  lengthSeconds?: ModelIntInput | null,
  published?: ModelStringInput | null,
  path?: ModelStringInput | null,
  score?: ModelFloatInput | null,
  and?: Array< ModelMovieReviewConditionInput | null > | null,
  or?: Array< ModelMovieReviewConditionInput | null > | null,
  not?: ModelMovieReviewConditionInput | null,
};

export type UpdateMovieReviewInput = {
  id: string,
  name?: string | null,
  lengthSeconds?: number | null,
  published?: string | null,
  path?: string | null,
  score?: number | null,
  movieReviewMovieId?: string | null,
};

export type DeleteMovieReviewInput = {
  id?: string | null,
};

export type CreateMovieInterviewInput = {
  id?: string | null,
  name: string,
  lengthSeconds: number,
  published: string,
  path: string,
  movieInterviewMovieId: string,
};

export type ModelMovieInterviewConditionInput = {
  name?: ModelStringInput | null,
  lengthSeconds?: ModelIntInput | null,
  published?: ModelStringInput | null,
  path?: ModelStringInput | null,
  and?: Array< ModelMovieInterviewConditionInput | null > | null,
  or?: Array< ModelMovieInterviewConditionInput | null > | null,
  not?: ModelMovieInterviewConditionInput | null,
};

export type UpdateMovieInterviewInput = {
  id: string,
  name?: string | null,
  lengthSeconds?: number | null,
  published?: string | null,
  path?: string | null,
  movieInterviewMovieId?: string | null,
};

export type DeleteMovieInterviewInput = {
  id?: string | null,
};

export type ModelMediaFilterInput = {
  id?: ModelIDInput | null,
  type?: ModelMEDIA_TYPEInput | null,
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelMediaFilterInput | null > | null,
  or?: Array< ModelMediaFilterInput | null > | null,
  not?: ModelMediaFilterInput | null,
};

export type ModelTvSeriesFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelTvSeriesFilterInput | null > | null,
  or?: Array< ModelTvSeriesFilterInput | null > | null,
  not?: ModelTvSeriesFilterInput | null,
};

export type ModelTvReviewFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  lengthSeconds?: ModelIntInput | null,
  published?: ModelStringInput | null,
  path?: ModelStringInput | null,
  season?: ModelIntInput | null,
  episode?: ModelIntInput | null,
  score?: ModelFloatInput | null,
  and?: Array< ModelTvReviewFilterInput | null > | null,
  or?: Array< ModelTvReviewFilterInput | null > | null,
  not?: ModelTvReviewFilterInput | null,
};

export type ModelTvInterviewFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  lengthSeconds?: ModelIntInput | null,
  published?: ModelStringInput | null,
  path?: ModelStringInput | null,
  and?: Array< ModelTvInterviewFilterInput | null > | null,
  or?: Array< ModelTvInterviewFilterInput | null > | null,
  not?: ModelTvInterviewFilterInput | null,
};

export type ModelMovieFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelMovieFilterInput | null > | null,
  or?: Array< ModelMovieFilterInput | null > | null,
  not?: ModelMovieFilterInput | null,
};

export type ModelMovieReviewFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  lengthSeconds?: ModelIntInput | null,
  published?: ModelStringInput | null,
  path?: ModelStringInput | null,
  score?: ModelFloatInput | null,
  and?: Array< ModelMovieReviewFilterInput | null > | null,
  or?: Array< ModelMovieReviewFilterInput | null > | null,
  not?: ModelMovieReviewFilterInput | null,
};

export type ModelMovieInterviewFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  lengthSeconds?: ModelIntInput | null,
  published?: ModelStringInput | null,
  path?: ModelStringInput | null,
  and?: Array< ModelMovieInterviewFilterInput | null > | null,
  or?: Array< ModelMovieInterviewFilterInput | null > | null,
  not?: ModelMovieInterviewFilterInput | null,
};

export type GetMediaFullQueryVariables = {
  id: string,
};

export type GetMediaFullQuery = {
  getMedia:  {
    __typename: "Media",
    id: string,
    type: MEDIA_TYPE,
    name: string,
    image: string,
    createdAt: string,
    updatedAt: string,
    videos:  {
      __typename: "ModelVideoConnection",
      items:  Array< {
        __typename: "Video",
        id: string,
        type: VIDEO_TYPE,
        name: string,
        lengthSeconds: number,
        published: string,
        path: string,
        season: number | null,
        episode: number | null,
        score: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
    } | null,
  } | null,
};

export type GetVideoFullQueryVariables = {
  id: string,
};

export type GetVideoFullQuery = {
  getVideo:  {
    __typename: "Video",
    id: string,
    type: VIDEO_TYPE,
    name: string,
    lengthSeconds: number,
    published: string,
    path: string,
    season: number | null,
    episode: number | null,
    score: number | null,
    createdAt: string,
    updatedAt: string,
    media:  {
      __typename: "Media",
      id: string,
      name: string,
      image: string,
      type: MEDIA_TYPE,
    },
  } | null,
};

export type VideoByVideoTypeFullQueryVariables = {
  type?: VIDEO_TYPE | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelVideoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VideoByVideoTypeFullQuery = {
  videoByVideoType:  {
    __typename: "ModelVideoConnection",
    items:  Array< {
      __typename: "Video",
      id: string,
      type: VIDEO_TYPE,
      name: string,
      lengthSeconds: number,
      published: string,
      path: string,
      season: number | null,
      episode: number | null,
      score: number | null,
      createdAt: string,
      updatedAt: string,
      media:  {
        __typename: "Media",
        id: string,
        name: string,
        image: string,
        type: MEDIA_TYPE,
      },
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type ListVideoFullQueryVariables = {
  filter?: ModelVideoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVideoFullQuery = {
  listVideos:  {
    __typename: "ModelVideoConnection",
    items:  Array< {
      __typename: "Video",
      id: string,
      type: VIDEO_TYPE,
      name: string,
      lengthSeconds: number,
      published: string,
      path: string,
      season: number | null,
      episode: number | null,
      score: number | null,
      createdAt: string,
      updatedAt: string,
      media:  {
        __typename: "Media",
        id: string,
        name: string,
        image: string,
        type: MEDIA_TYPE,
      },
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type CreateMediaMutationVariables = {
  input: CreateMediaInput,
  condition?: ModelMediaConditionInput | null,
};

export type CreateMediaMutation = {
  createMedia:  {
    __typename: "Media",
    id: string,
    type: MEDIA_TYPE,
    name: string,
    image: string,
    createdAt: string,
    updatedAt: string,
    videos:  {
      __typename: "ModelVideoConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateMediaMutationVariables = {
  input: UpdateMediaInput,
  condition?: ModelMediaConditionInput | null,
};

export type UpdateMediaMutation = {
  updateMedia:  {
    __typename: "Media",
    id: string,
    type: MEDIA_TYPE,
    name: string,
    image: string,
    createdAt: string,
    updatedAt: string,
    videos:  {
      __typename: "ModelVideoConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteMediaMutationVariables = {
  input: DeleteMediaInput,
  condition?: ModelMediaConditionInput | null,
};

export type DeleteMediaMutation = {
  deleteMedia:  {
    __typename: "Media",
    id: string,
    type: MEDIA_TYPE,
    name: string,
    image: string,
    createdAt: string,
    updatedAt: string,
    videos:  {
      __typename: "ModelVideoConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateVideoMutationVariables = {
  input: CreateVideoInput,
  condition?: ModelVideoConditionInput | null,
};

export type CreateVideoMutation = {
  createVideo:  {
    __typename: "Video",
    id: string,
    type: VIDEO_TYPE,
    name: string,
    lengthSeconds: number,
    published: string,
    path: string,
    season: number | null,
    episode: number | null,
    score: number | null,
    createdAt: string,
    updatedAt: string,
    media:  {
      __typename: "Media",
      id: string,
      type: MEDIA_TYPE,
      name: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type UpdateVideoMutationVariables = {
  input: UpdateVideoInput,
  condition?: ModelVideoConditionInput | null,
};

export type UpdateVideoMutation = {
  updateVideo:  {
    __typename: "Video",
    id: string,
    type: VIDEO_TYPE,
    name: string,
    lengthSeconds: number,
    published: string,
    path: string,
    season: number | null,
    episode: number | null,
    score: number | null,
    createdAt: string,
    updatedAt: string,
    media:  {
      __typename: "Media",
      id: string,
      type: MEDIA_TYPE,
      name: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type DeleteVideoMutationVariables = {
  input: DeleteVideoInput,
  condition?: ModelVideoConditionInput | null,
};

export type DeleteVideoMutation = {
  deleteVideo:  {
    __typename: "Video",
    id: string,
    type: VIDEO_TYPE,
    name: string,
    lengthSeconds: number,
    published: string,
    path: string,
    season: number | null,
    episode: number | null,
    score: number | null,
    createdAt: string,
    updatedAt: string,
    media:  {
      __typename: "Media",
      id: string,
      type: MEDIA_TYPE,
      name: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type CreateTvSeriesMutationVariables = {
  input: CreateTvSeriesInput,
  condition?: ModelTvSeriesConditionInput | null,
};

export type CreateTvSeriesMutation = {
  createTvSeries:  {
    __typename: "TvSeries",
    id: string,
    name: string,
    image: string,
    createdAt: string,
    updatedAt: string,
    reviews:  {
      __typename: "ModelTvReviewConnection",
      nextToken: string | null,
    } | null,
    interviews:  {
      __typename: "ModelTvInterviewConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateTvSeriesMutationVariables = {
  input: UpdateTvSeriesInput,
  condition?: ModelTvSeriesConditionInput | null,
};

export type UpdateTvSeriesMutation = {
  updateTvSeries:  {
    __typename: "TvSeries",
    id: string,
    name: string,
    image: string,
    createdAt: string,
    updatedAt: string,
    reviews:  {
      __typename: "ModelTvReviewConnection",
      nextToken: string | null,
    } | null,
    interviews:  {
      __typename: "ModelTvInterviewConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteTvSeriesMutationVariables = {
  input: DeleteTvSeriesInput,
  condition?: ModelTvSeriesConditionInput | null,
};

export type DeleteTvSeriesMutation = {
  deleteTvSeries:  {
    __typename: "TvSeries",
    id: string,
    name: string,
    image: string,
    createdAt: string,
    updatedAt: string,
    reviews:  {
      __typename: "ModelTvReviewConnection",
      nextToken: string | null,
    } | null,
    interviews:  {
      __typename: "ModelTvInterviewConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateTvReviewMutationVariables = {
  input: CreateTvReviewInput,
  condition?: ModelTvReviewConditionInput | null,
};

export type CreateTvReviewMutation = {
  createTvReview:  {
    __typename: "TvReview",
    id: string,
    name: string,
    lengthSeconds: number,
    published: string,
    path: string,
    season: number | null,
    episode: number | null,
    score: number,
    createdAt: string,
    updatedAt: string,
    series:  {
      __typename: "TvSeries",
      id: string,
      name: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type UpdateTvReviewMutationVariables = {
  input: UpdateTvReviewInput,
  condition?: ModelTvReviewConditionInput | null,
};

export type UpdateTvReviewMutation = {
  updateTvReview:  {
    __typename: "TvReview",
    id: string,
    name: string,
    lengthSeconds: number,
    published: string,
    path: string,
    season: number | null,
    episode: number | null,
    score: number,
    createdAt: string,
    updatedAt: string,
    series:  {
      __typename: "TvSeries",
      id: string,
      name: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type DeleteTvReviewMutationVariables = {
  input: DeleteTvReviewInput,
  condition?: ModelTvReviewConditionInput | null,
};

export type DeleteTvReviewMutation = {
  deleteTvReview:  {
    __typename: "TvReview",
    id: string,
    name: string,
    lengthSeconds: number,
    published: string,
    path: string,
    season: number | null,
    episode: number | null,
    score: number,
    createdAt: string,
    updatedAt: string,
    series:  {
      __typename: "TvSeries",
      id: string,
      name: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type CreateTvInterviewMutationVariables = {
  input: CreateTvInterviewInput,
  condition?: ModelTvInterviewConditionInput | null,
};

export type CreateTvInterviewMutation = {
  createTvInterview:  {
    __typename: "TvInterview",
    id: string,
    name: string,
    lengthSeconds: number,
    published: string,
    path: string,
    createdAt: string,
    updatedAt: string,
    series:  {
      __typename: "TvSeries",
      id: string,
      name: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type UpdateTvInterviewMutationVariables = {
  input: UpdateTvInterviewInput,
  condition?: ModelTvInterviewConditionInput | null,
};

export type UpdateTvInterviewMutation = {
  updateTvInterview:  {
    __typename: "TvInterview",
    id: string,
    name: string,
    lengthSeconds: number,
    published: string,
    path: string,
    createdAt: string,
    updatedAt: string,
    series:  {
      __typename: "TvSeries",
      id: string,
      name: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type DeleteTvInterviewMutationVariables = {
  input: DeleteTvInterviewInput,
  condition?: ModelTvInterviewConditionInput | null,
};

export type DeleteTvInterviewMutation = {
  deleteTvInterview:  {
    __typename: "TvInterview",
    id: string,
    name: string,
    lengthSeconds: number,
    published: string,
    path: string,
    createdAt: string,
    updatedAt: string,
    series:  {
      __typename: "TvSeries",
      id: string,
      name: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type CreateMovieMutationVariables = {
  input: CreateMovieInput,
  condition?: ModelMovieConditionInput | null,
};

export type CreateMovieMutation = {
  createMovie:  {
    __typename: "Movie",
    id: string,
    name: string,
    image: string,
    createdAt: string,
    updatedAt: string,
    reviews:  {
      __typename: "ModelMovieReviewConnection",
      nextToken: string | null,
    } | null,
    interviews:  {
      __typename: "ModelMovieInterviewConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateMovieMutationVariables = {
  input: UpdateMovieInput,
  condition?: ModelMovieConditionInput | null,
};

export type UpdateMovieMutation = {
  updateMovie:  {
    __typename: "Movie",
    id: string,
    name: string,
    image: string,
    createdAt: string,
    updatedAt: string,
    reviews:  {
      __typename: "ModelMovieReviewConnection",
      nextToken: string | null,
    } | null,
    interviews:  {
      __typename: "ModelMovieInterviewConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteMovieMutationVariables = {
  input: DeleteMovieInput,
  condition?: ModelMovieConditionInput | null,
};

export type DeleteMovieMutation = {
  deleteMovie:  {
    __typename: "Movie",
    id: string,
    name: string,
    image: string,
    createdAt: string,
    updatedAt: string,
    reviews:  {
      __typename: "ModelMovieReviewConnection",
      nextToken: string | null,
    } | null,
    interviews:  {
      __typename: "ModelMovieInterviewConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateMovieReviewMutationVariables = {
  input: CreateMovieReviewInput,
  condition?: ModelMovieReviewConditionInput | null,
};

export type CreateMovieReviewMutation = {
  createMovieReview:  {
    __typename: "MovieReview",
    id: string,
    name: string,
    lengthSeconds: number,
    published: string,
    path: string,
    score: number,
    createdAt: string,
    updatedAt: string,
    movie:  {
      __typename: "Movie",
      id: string,
      name: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type UpdateMovieReviewMutationVariables = {
  input: UpdateMovieReviewInput,
  condition?: ModelMovieReviewConditionInput | null,
};

export type UpdateMovieReviewMutation = {
  updateMovieReview:  {
    __typename: "MovieReview",
    id: string,
    name: string,
    lengthSeconds: number,
    published: string,
    path: string,
    score: number,
    createdAt: string,
    updatedAt: string,
    movie:  {
      __typename: "Movie",
      id: string,
      name: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type DeleteMovieReviewMutationVariables = {
  input: DeleteMovieReviewInput,
  condition?: ModelMovieReviewConditionInput | null,
};

export type DeleteMovieReviewMutation = {
  deleteMovieReview:  {
    __typename: "MovieReview",
    id: string,
    name: string,
    lengthSeconds: number,
    published: string,
    path: string,
    score: number,
    createdAt: string,
    updatedAt: string,
    movie:  {
      __typename: "Movie",
      id: string,
      name: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type CreateMovieInterviewMutationVariables = {
  input: CreateMovieInterviewInput,
  condition?: ModelMovieInterviewConditionInput | null,
};

export type CreateMovieInterviewMutation = {
  createMovieInterview:  {
    __typename: "MovieInterview",
    id: string,
    name: string,
    lengthSeconds: number,
    published: string,
    path: string,
    createdAt: string,
    updatedAt: string,
    movie:  {
      __typename: "Movie",
      id: string,
      name: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type UpdateMovieInterviewMutationVariables = {
  input: UpdateMovieInterviewInput,
  condition?: ModelMovieInterviewConditionInput | null,
};

export type UpdateMovieInterviewMutation = {
  updateMovieInterview:  {
    __typename: "MovieInterview",
    id: string,
    name: string,
    lengthSeconds: number,
    published: string,
    path: string,
    createdAt: string,
    updatedAt: string,
    movie:  {
      __typename: "Movie",
      id: string,
      name: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type DeleteMovieInterviewMutationVariables = {
  input: DeleteMovieInterviewInput,
  condition?: ModelMovieInterviewConditionInput | null,
};

export type DeleteMovieInterviewMutation = {
  deleteMovieInterview:  {
    __typename: "MovieInterview",
    id: string,
    name: string,
    lengthSeconds: number,
    published: string,
    path: string,
    createdAt: string,
    updatedAt: string,
    movie:  {
      __typename: "Movie",
      id: string,
      name: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type ListMediasQueryVariables = {
  filter?: ModelMediaFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMediasQuery = {
  listMedias:  {
    __typename: "ModelMediaConnection",
    items:  Array< {
      __typename: "Media",
      id: string,
      type: MEDIA_TYPE,
      name: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetMediaQueryVariables = {
  id: string,
};

export type GetMediaQuery = {
  getMedia:  {
    __typename: "Media",
    id: string,
    type: MEDIA_TYPE,
    name: string,
    image: string,
    createdAt: string,
    updatedAt: string,
    videos:  {
      __typename: "ModelVideoConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type MediaByMediaTypeQueryVariables = {
  type?: MEDIA_TYPE | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMediaFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MediaByMediaTypeQuery = {
  mediaByMediaType:  {
    __typename: "ModelMediaConnection",
    items:  Array< {
      __typename: "Media",
      id: string,
      type: MEDIA_TYPE,
      name: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetVideoQueryVariables = {
  id: string,
};

export type GetVideoQuery = {
  getVideo:  {
    __typename: "Video",
    id: string,
    type: VIDEO_TYPE,
    name: string,
    lengthSeconds: number,
    published: string,
    path: string,
    season: number | null,
    episode: number | null,
    score: number | null,
    createdAt: string,
    updatedAt: string,
    media:  {
      __typename: "Media",
      id: string,
      type: MEDIA_TYPE,
      name: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type ListVideosQueryVariables = {
  filter?: ModelVideoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVideosQuery = {
  listVideos:  {
    __typename: "ModelVideoConnection",
    items:  Array< {
      __typename: "Video",
      id: string,
      type: VIDEO_TYPE,
      name: string,
      lengthSeconds: number,
      published: string,
      path: string,
      season: number | null,
      episode: number | null,
      score: number | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type VideoByVideoTypeQueryVariables = {
  type?: VIDEO_TYPE | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelVideoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VideoByVideoTypeQuery = {
  videoByVideoType:  {
    __typename: "ModelVideoConnection",
    items:  Array< {
      __typename: "Video",
      id: string,
      type: VIDEO_TYPE,
      name: string,
      lengthSeconds: number,
      published: string,
      path: string,
      season: number | null,
      episode: number | null,
      score: number | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type ListTvSeriessQueryVariables = {
  filter?: ModelTvSeriesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTvSeriessQuery = {
  listTvSeriess:  {
    __typename: "ModelTvSeriesConnection",
    items:  Array< {
      __typename: "TvSeries",
      id: string,
      name: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetTvSeriesQueryVariables = {
  id: string,
};

export type GetTvSeriesQuery = {
  getTvSeries:  {
    __typename: "TvSeries",
    id: string,
    name: string,
    image: string,
    createdAt: string,
    updatedAt: string,
    reviews:  {
      __typename: "ModelTvReviewConnection",
      nextToken: string | null,
    } | null,
    interviews:  {
      __typename: "ModelTvInterviewConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type GetTvReviewQueryVariables = {
  id: string,
};

export type GetTvReviewQuery = {
  getTvReview:  {
    __typename: "TvReview",
    id: string,
    name: string,
    lengthSeconds: number,
    published: string,
    path: string,
    season: number | null,
    episode: number | null,
    score: number,
    createdAt: string,
    updatedAt: string,
    series:  {
      __typename: "TvSeries",
      id: string,
      name: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type ListTvReviewsQueryVariables = {
  filter?: ModelTvReviewFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTvReviewsQuery = {
  listTvReviews:  {
    __typename: "ModelTvReviewConnection",
    items:  Array< {
      __typename: "TvReview",
      id: string,
      name: string,
      lengthSeconds: number,
      published: string,
      path: string,
      season: number | null,
      episode: number | null,
      score: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetTvInterviewQueryVariables = {
  id: string,
};

export type GetTvInterviewQuery = {
  getTvInterview:  {
    __typename: "TvInterview",
    id: string,
    name: string,
    lengthSeconds: number,
    published: string,
    path: string,
    createdAt: string,
    updatedAt: string,
    series:  {
      __typename: "TvSeries",
      id: string,
      name: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type ListTvInterviewsQueryVariables = {
  filter?: ModelTvInterviewFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTvInterviewsQuery = {
  listTvInterviews:  {
    __typename: "ModelTvInterviewConnection",
    items:  Array< {
      __typename: "TvInterview",
      id: string,
      name: string,
      lengthSeconds: number,
      published: string,
      path: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type ListMoviesQueryVariables = {
  filter?: ModelMovieFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMoviesQuery = {
  listMovies:  {
    __typename: "ModelMovieConnection",
    items:  Array< {
      __typename: "Movie",
      id: string,
      name: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetMovieQueryVariables = {
  id: string,
};

export type GetMovieQuery = {
  getMovie:  {
    __typename: "Movie",
    id: string,
    name: string,
    image: string,
    createdAt: string,
    updatedAt: string,
    reviews:  {
      __typename: "ModelMovieReviewConnection",
      nextToken: string | null,
    } | null,
    interviews:  {
      __typename: "ModelMovieInterviewConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type GetMovieReviewQueryVariables = {
  id: string,
};

export type GetMovieReviewQuery = {
  getMovieReview:  {
    __typename: "MovieReview",
    id: string,
    name: string,
    lengthSeconds: number,
    published: string,
    path: string,
    score: number,
    createdAt: string,
    updatedAt: string,
    movie:  {
      __typename: "Movie",
      id: string,
      name: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type ListMovieReviewsQueryVariables = {
  filter?: ModelMovieReviewFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMovieReviewsQuery = {
  listMovieReviews:  {
    __typename: "ModelMovieReviewConnection",
    items:  Array< {
      __typename: "MovieReview",
      id: string,
      name: string,
      lengthSeconds: number,
      published: string,
      path: string,
      score: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetMovieInterviewQueryVariables = {
  id: string,
};

export type GetMovieInterviewQuery = {
  getMovieInterview:  {
    __typename: "MovieInterview",
    id: string,
    name: string,
    lengthSeconds: number,
    published: string,
    path: string,
    createdAt: string,
    updatedAt: string,
    movie:  {
      __typename: "Movie",
      id: string,
      name: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type ListMovieInterviewsQueryVariables = {
  filter?: ModelMovieInterviewFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMovieInterviewsQuery = {
  listMovieInterviews:  {
    __typename: "ModelMovieInterviewConnection",
    items:  Array< {
      __typename: "MovieInterview",
      id: string,
      name: string,
      lengthSeconds: number,
      published: string,
      path: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateMediaSubscription = {
  onCreateMedia:  {
    __typename: "Media",
    id: string,
    type: MEDIA_TYPE,
    name: string,
    image: string,
    createdAt: string,
    updatedAt: string,
    videos:  {
      __typename: "ModelVideoConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateMediaSubscription = {
  onUpdateMedia:  {
    __typename: "Media",
    id: string,
    type: MEDIA_TYPE,
    name: string,
    image: string,
    createdAt: string,
    updatedAt: string,
    videos:  {
      __typename: "ModelVideoConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteMediaSubscription = {
  onDeleteMedia:  {
    __typename: "Media",
    id: string,
    type: MEDIA_TYPE,
    name: string,
    image: string,
    createdAt: string,
    updatedAt: string,
    videos:  {
      __typename: "ModelVideoConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateVideoSubscription = {
  onCreateVideo:  {
    __typename: "Video",
    id: string,
    type: VIDEO_TYPE,
    name: string,
    lengthSeconds: number,
    published: string,
    path: string,
    season: number | null,
    episode: number | null,
    score: number | null,
    createdAt: string,
    updatedAt: string,
    media:  {
      __typename: "Media",
      id: string,
      type: MEDIA_TYPE,
      name: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type OnUpdateVideoSubscription = {
  onUpdateVideo:  {
    __typename: "Video",
    id: string,
    type: VIDEO_TYPE,
    name: string,
    lengthSeconds: number,
    published: string,
    path: string,
    season: number | null,
    episode: number | null,
    score: number | null,
    createdAt: string,
    updatedAt: string,
    media:  {
      __typename: "Media",
      id: string,
      type: MEDIA_TYPE,
      name: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type OnDeleteVideoSubscription = {
  onDeleteVideo:  {
    __typename: "Video",
    id: string,
    type: VIDEO_TYPE,
    name: string,
    lengthSeconds: number,
    published: string,
    path: string,
    season: number | null,
    episode: number | null,
    score: number | null,
    createdAt: string,
    updatedAt: string,
    media:  {
      __typename: "Media",
      id: string,
      type: MEDIA_TYPE,
      name: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type OnCreateTvSeriesSubscription = {
  onCreateTvSeries:  {
    __typename: "TvSeries",
    id: string,
    name: string,
    image: string,
    createdAt: string,
    updatedAt: string,
    reviews:  {
      __typename: "ModelTvReviewConnection",
      nextToken: string | null,
    } | null,
    interviews:  {
      __typename: "ModelTvInterviewConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateTvSeriesSubscription = {
  onUpdateTvSeries:  {
    __typename: "TvSeries",
    id: string,
    name: string,
    image: string,
    createdAt: string,
    updatedAt: string,
    reviews:  {
      __typename: "ModelTvReviewConnection",
      nextToken: string | null,
    } | null,
    interviews:  {
      __typename: "ModelTvInterviewConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteTvSeriesSubscription = {
  onDeleteTvSeries:  {
    __typename: "TvSeries",
    id: string,
    name: string,
    image: string,
    createdAt: string,
    updatedAt: string,
    reviews:  {
      __typename: "ModelTvReviewConnection",
      nextToken: string | null,
    } | null,
    interviews:  {
      __typename: "ModelTvInterviewConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateTvReviewSubscription = {
  onCreateTvReview:  {
    __typename: "TvReview",
    id: string,
    name: string,
    lengthSeconds: number,
    published: string,
    path: string,
    season: number | null,
    episode: number | null,
    score: number,
    createdAt: string,
    updatedAt: string,
    series:  {
      __typename: "TvSeries",
      id: string,
      name: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type OnUpdateTvReviewSubscription = {
  onUpdateTvReview:  {
    __typename: "TvReview",
    id: string,
    name: string,
    lengthSeconds: number,
    published: string,
    path: string,
    season: number | null,
    episode: number | null,
    score: number,
    createdAt: string,
    updatedAt: string,
    series:  {
      __typename: "TvSeries",
      id: string,
      name: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type OnDeleteTvReviewSubscription = {
  onDeleteTvReview:  {
    __typename: "TvReview",
    id: string,
    name: string,
    lengthSeconds: number,
    published: string,
    path: string,
    season: number | null,
    episode: number | null,
    score: number,
    createdAt: string,
    updatedAt: string,
    series:  {
      __typename: "TvSeries",
      id: string,
      name: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type OnCreateTvInterviewSubscription = {
  onCreateTvInterview:  {
    __typename: "TvInterview",
    id: string,
    name: string,
    lengthSeconds: number,
    published: string,
    path: string,
    createdAt: string,
    updatedAt: string,
    series:  {
      __typename: "TvSeries",
      id: string,
      name: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type OnUpdateTvInterviewSubscription = {
  onUpdateTvInterview:  {
    __typename: "TvInterview",
    id: string,
    name: string,
    lengthSeconds: number,
    published: string,
    path: string,
    createdAt: string,
    updatedAt: string,
    series:  {
      __typename: "TvSeries",
      id: string,
      name: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type OnDeleteTvInterviewSubscription = {
  onDeleteTvInterview:  {
    __typename: "TvInterview",
    id: string,
    name: string,
    lengthSeconds: number,
    published: string,
    path: string,
    createdAt: string,
    updatedAt: string,
    series:  {
      __typename: "TvSeries",
      id: string,
      name: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type OnCreateMovieSubscription = {
  onCreateMovie:  {
    __typename: "Movie",
    id: string,
    name: string,
    image: string,
    createdAt: string,
    updatedAt: string,
    reviews:  {
      __typename: "ModelMovieReviewConnection",
      nextToken: string | null,
    } | null,
    interviews:  {
      __typename: "ModelMovieInterviewConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateMovieSubscription = {
  onUpdateMovie:  {
    __typename: "Movie",
    id: string,
    name: string,
    image: string,
    createdAt: string,
    updatedAt: string,
    reviews:  {
      __typename: "ModelMovieReviewConnection",
      nextToken: string | null,
    } | null,
    interviews:  {
      __typename: "ModelMovieInterviewConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteMovieSubscription = {
  onDeleteMovie:  {
    __typename: "Movie",
    id: string,
    name: string,
    image: string,
    createdAt: string,
    updatedAt: string,
    reviews:  {
      __typename: "ModelMovieReviewConnection",
      nextToken: string | null,
    } | null,
    interviews:  {
      __typename: "ModelMovieInterviewConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateMovieReviewSubscription = {
  onCreateMovieReview:  {
    __typename: "MovieReview",
    id: string,
    name: string,
    lengthSeconds: number,
    published: string,
    path: string,
    score: number,
    createdAt: string,
    updatedAt: string,
    movie:  {
      __typename: "Movie",
      id: string,
      name: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type OnUpdateMovieReviewSubscription = {
  onUpdateMovieReview:  {
    __typename: "MovieReview",
    id: string,
    name: string,
    lengthSeconds: number,
    published: string,
    path: string,
    score: number,
    createdAt: string,
    updatedAt: string,
    movie:  {
      __typename: "Movie",
      id: string,
      name: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type OnDeleteMovieReviewSubscription = {
  onDeleteMovieReview:  {
    __typename: "MovieReview",
    id: string,
    name: string,
    lengthSeconds: number,
    published: string,
    path: string,
    score: number,
    createdAt: string,
    updatedAt: string,
    movie:  {
      __typename: "Movie",
      id: string,
      name: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type OnCreateMovieInterviewSubscription = {
  onCreateMovieInterview:  {
    __typename: "MovieInterview",
    id: string,
    name: string,
    lengthSeconds: number,
    published: string,
    path: string,
    createdAt: string,
    updatedAt: string,
    movie:  {
      __typename: "Movie",
      id: string,
      name: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type OnUpdateMovieInterviewSubscription = {
  onUpdateMovieInterview:  {
    __typename: "MovieInterview",
    id: string,
    name: string,
    lengthSeconds: number,
    published: string,
    path: string,
    createdAt: string,
    updatedAt: string,
    movie:  {
      __typename: "Movie",
      id: string,
      name: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type OnDeleteMovieInterviewSubscription = {
  onDeleteMovieInterview:  {
    __typename: "MovieInterview",
    id: string,
    name: string,
    lengthSeconds: number,
    published: string,
    path: string,
    createdAt: string,
    updatedAt: string,
    movie:  {
      __typename: "Movie",
      id: string,
      name: string,
      image: string,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};
