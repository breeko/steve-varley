export const getMediaFull = /* GraphQL */ `
  query GetMediaFull($id: ID!) {
    getMedia(id: $id) {
      id
      type
      name
      image
      createdAt
      updatedAt
      videos {
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
      }
    }
  }
`

export const getVideoFull = /* GraphQL */ `
  query GetVideoFull($id: ID!) {
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
        name
        image
        type
      }
    }
  }
`

export const videoByVideoTypeFull = /* GraphQL */ `
  query VideoByVideoTypeFull(
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
        media {
          id
          name
          image
          type
        }
      }
      nextToken
    }
  }
`;

export const listVideoFull = /* GraphQL */ `
  query ListVideoFull(
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
        media {
          id
          name
          image
          type
        }
      }
      nextToken
    }
  }
`;
