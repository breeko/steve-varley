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
export const onCreateTvSeries = /* GraphQL */ `
  subscription OnCreateTvSeries {
    onCreateTvSeries {
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
export const onUpdateTvSeries = /* GraphQL */ `
  subscription OnUpdateTvSeries {
    onUpdateTvSeries {
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
export const onDeleteTvSeries = /* GraphQL */ `
  subscription OnDeleteTvSeries {
    onDeleteTvSeries {
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
export const onCreateTvReview = /* GraphQL */ `
  subscription OnCreateTvReview {
    onCreateTvReview {
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
export const onUpdateTvReview = /* GraphQL */ `
  subscription OnUpdateTvReview {
    onUpdateTvReview {
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
export const onDeleteTvReview = /* GraphQL */ `
  subscription OnDeleteTvReview {
    onDeleteTvReview {
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
export const onCreateTvInterview = /* GraphQL */ `
  subscription OnCreateTvInterview {
    onCreateTvInterview {
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
export const onUpdateTvInterview = /* GraphQL */ `
  subscription OnUpdateTvInterview {
    onUpdateTvInterview {
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
export const onDeleteTvInterview = /* GraphQL */ `
  subscription OnDeleteTvInterview {
    onDeleteTvInterview {
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
export const onCreateMovie = /* GraphQL */ `
  subscription OnCreateMovie {
    onCreateMovie {
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
export const onUpdateMovie = /* GraphQL */ `
  subscription OnUpdateMovie {
    onUpdateMovie {
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
export const onDeleteMovie = /* GraphQL */ `
  subscription OnDeleteMovie {
    onDeleteMovie {
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
export const onCreateMovieReview = /* GraphQL */ `
  subscription OnCreateMovieReview {
    onCreateMovieReview {
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
export const onUpdateMovieReview = /* GraphQL */ `
  subscription OnUpdateMovieReview {
    onUpdateMovieReview {
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
export const onDeleteMovieReview = /* GraphQL */ `
  subscription OnDeleteMovieReview {
    onDeleteMovieReview {
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
export const onCreateMovieInterview = /* GraphQL */ `
  subscription OnCreateMovieInterview {
    onCreateMovieInterview {
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
export const onUpdateMovieInterview = /* GraphQL */ `
  subscription OnUpdateMovieInterview {
    onUpdateMovieInterview {
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
export const onDeleteMovieInterview = /* GraphQL */ `
  subscription OnDeleteMovieInterview {
    onDeleteMovieInterview {
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
