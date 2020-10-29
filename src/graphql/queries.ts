/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listMedias = /* GraphQL */ `
  query ListMedias(
    $filter: ModelMediaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMedias(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        name
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMedia = /* GraphQL */ `
  query GetMedia($id: ID!) {
    getMedia(id: $id) {
      id
      type
      name
      image
      createdAt
      updatedAt
      videos {
        nextToken
      }
    }
  }
`;
export const mediaByMediaType = /* GraphQL */ `
  query MediaByMediaType(
    $type: MEDIA_TYPE
    $sortDirection: ModelSortDirection
    $filter: ModelMediaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    mediaByMediaType(
      type: $type
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        name
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getVideo = /* GraphQL */ `
  query GetVideo($id: ID!) {
    getVideo(id: $id) {
      id
      type
      name
      lengthSeconds
      published
      path
      season
      episode
      score
      createdAt
      updatedAt
      media {
        id
        type
        name
        image
        createdAt
        updatedAt
      }
    }
  }
`;
export const listVideos = /* GraphQL */ `
  query ListVideos(
    $filter: ModelVideoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVideos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        name
        lengthSeconds
        published
        path
        season
        episode
        score
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const videoByVideoType = /* GraphQL */ `
  query VideoByVideoType(
    $type: VIDEO_TYPE
    $sortDirection: ModelSortDirection
    $filter: ModelVideoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    videoByVideoType(
      type: $type
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        name
        lengthSeconds
        published
        path
        season
        episode
        score
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listTvSeriess = /* GraphQL */ `
  query ListTvSeriess(
    $filter: ModelTvSeriesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTvSeriess(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTvSeries = /* GraphQL */ `
  query GetTvSeries($id: ID!) {
    getTvSeries(id: $id) {
      id
      name
      image
      createdAt
      updatedAt
      reviews {
        nextToken
      }
      interviews {
        nextToken
      }
    }
  }
`;
export const getTvReview = /* GraphQL */ `
  query GetTvReview($id: ID!) {
    getTvReview(id: $id) {
      id
      name
      lengthSeconds
      published
      path
      season
      episode
      score
      createdAt
      updatedAt
      series {
        id
        name
        image
        createdAt
        updatedAt
      }
    }
  }
`;
export const listTvReviews = /* GraphQL */ `
  query ListTvReviews(
    $filter: ModelTvReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTvReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        lengthSeconds
        published
        path
        season
        episode
        score
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTvInterview = /* GraphQL */ `
  query GetTvInterview($id: ID!) {
    getTvInterview(id: $id) {
      id
      name
      lengthSeconds
      published
      path
      createdAt
      updatedAt
      series {
        id
        name
        image
        createdAt
        updatedAt
      }
    }
  }
`;
export const listTvInterviews = /* GraphQL */ `
  query ListTvInterviews(
    $filter: ModelTvInterviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTvInterviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        lengthSeconds
        published
        path
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listMovies = /* GraphQL */ `
  query ListMovies(
    $filter: ModelMovieFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMovies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMovie = /* GraphQL */ `
  query GetMovie($id: ID!) {
    getMovie(id: $id) {
      id
      name
      image
      createdAt
      updatedAt
      reviews {
        nextToken
      }
      interviews {
        nextToken
      }
    }
  }
`;
export const getMovieReview = /* GraphQL */ `
  query GetMovieReview($id: ID!) {
    getMovieReview(id: $id) {
      id
      name
      lengthSeconds
      published
      path
      score
      createdAt
      updatedAt
      movie {
        id
        name
        image
        createdAt
        updatedAt
      }
    }
  }
`;
export const listMovieReviews = /* GraphQL */ `
  query ListMovieReviews(
    $filter: ModelMovieReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMovieReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        lengthSeconds
        published
        path
        score
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMovieInterview = /* GraphQL */ `
  query GetMovieInterview($id: ID!) {
    getMovieInterview(id: $id) {
      id
      name
      lengthSeconds
      published
      path
      createdAt
      updatedAt
      movie {
        id
        name
        image
        createdAt
        updatedAt
      }
    }
  }
`;
export const listMovieInterviews = /* GraphQL */ `
  query ListMovieInterviews(
    $filter: ModelMovieInterviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMovieInterviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        lengthSeconds
        published
        path
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
