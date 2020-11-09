/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMedia = /* GraphQL */ `
  subscription OnCreateMedia {
    onCreateMedia {
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
export const onUpdateMedia = /* GraphQL */ `
  subscription OnUpdateMedia {
    onUpdateMedia {
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
export const onDeleteMedia = /* GraphQL */ `
  subscription OnDeleteMedia {
    onDeleteMedia {
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
export const onCreateVideo = /* GraphQL */ `
  subscription OnCreateVideo {
    onCreateVideo {
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
export const onUpdateVideo = /* GraphQL */ `
  subscription OnUpdateVideo {
    onUpdateVideo {
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
export const onDeleteVideo = /* GraphQL */ `
  subscription OnDeleteVideo {
    onDeleteVideo {
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
