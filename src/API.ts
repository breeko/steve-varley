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

export type ModelMediaFilterInput = {
  id?: ModelIDInput | null,
  type?: ModelMEDIA_TYPEInput | null,
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelMediaFilterInput | null > | null,
  or?: Array< ModelMediaFilterInput | null > | null,
  not?: ModelMediaFilterInput | null,
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
