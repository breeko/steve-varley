/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMedia = /* GraphQL */ `
  mutation CreateMedia(
    $input: CreateMediaInput!
    $condition: ModelMediaConditionInput
  ) {
    createMedia(input: $input, condition: $condition) {
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
export const updateMedia = /* GraphQL */ `
  mutation UpdateMedia(
    $input: UpdateMediaInput!
    $condition: ModelMediaConditionInput
  ) {
    updateMedia(input: $input, condition: $condition) {
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
export const deleteMedia = /* GraphQL */ `
  mutation DeleteMedia(
    $input: DeleteMediaInput!
    $condition: ModelMediaConditionInput
  ) {
    deleteMedia(input: $input, condition: $condition) {
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
export const createVideo = /* GraphQL */ `
  mutation CreateVideo(
    $input: CreateVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    createVideo(input: $input, condition: $condition) {
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
export const updateVideo = /* GraphQL */ `
  mutation UpdateVideo(
    $input: UpdateVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    updateVideo(input: $input, condition: $condition) {
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
export const deleteVideo = /* GraphQL */ `
  mutation DeleteVideo(
    $input: DeleteVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    deleteVideo(input: $input, condition: $condition) {
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
export const createTvSeries = /* GraphQL */ `
  mutation CreateTvSeries(
    $input: CreateTvSeriesInput!
    $condition: ModelTvSeriesConditionInput
  ) {
    createTvSeries(input: $input, condition: $condition) {
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
export const updateTvSeries = /* GraphQL */ `
  mutation UpdateTvSeries(
    $input: UpdateTvSeriesInput!
    $condition: ModelTvSeriesConditionInput
  ) {
    updateTvSeries(input: $input, condition: $condition) {
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
export const deleteTvSeries = /* GraphQL */ `
  mutation DeleteTvSeries(
    $input: DeleteTvSeriesInput!
    $condition: ModelTvSeriesConditionInput
  ) {
    deleteTvSeries(input: $input, condition: $condition) {
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
export const createTvReview = /* GraphQL */ `
  mutation CreateTvReview(
    $input: CreateTvReviewInput!
    $condition: ModelTvReviewConditionInput
  ) {
    createTvReview(input: $input, condition: $condition) {
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
export const updateTvReview = /* GraphQL */ `
  mutation UpdateTvReview(
    $input: UpdateTvReviewInput!
    $condition: ModelTvReviewConditionInput
  ) {
    updateTvReview(input: $input, condition: $condition) {
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
export const deleteTvReview = /* GraphQL */ `
  mutation DeleteTvReview(
    $input: DeleteTvReviewInput!
    $condition: ModelTvReviewConditionInput
  ) {
    deleteTvReview(input: $input, condition: $condition) {
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
export const createTvInterview = /* GraphQL */ `
  mutation CreateTvInterview(
    $input: CreateTvInterviewInput!
    $condition: ModelTvInterviewConditionInput
  ) {
    createTvInterview(input: $input, condition: $condition) {
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
export const updateTvInterview = /* GraphQL */ `
  mutation UpdateTvInterview(
    $input: UpdateTvInterviewInput!
    $condition: ModelTvInterviewConditionInput
  ) {
    updateTvInterview(input: $input, condition: $condition) {
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
export const deleteTvInterview = /* GraphQL */ `
  mutation DeleteTvInterview(
    $input: DeleteTvInterviewInput!
    $condition: ModelTvInterviewConditionInput
  ) {
    deleteTvInterview(input: $input, condition: $condition) {
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
export const createMovie = /* GraphQL */ `
  mutation CreateMovie(
    $input: CreateMovieInput!
    $condition: ModelMovieConditionInput
  ) {
    createMovie(input: $input, condition: $condition) {
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
export const updateMovie = /* GraphQL */ `
  mutation UpdateMovie(
    $input: UpdateMovieInput!
    $condition: ModelMovieConditionInput
  ) {
    updateMovie(input: $input, condition: $condition) {
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
export const deleteMovie = /* GraphQL */ `
  mutation DeleteMovie(
    $input: DeleteMovieInput!
    $condition: ModelMovieConditionInput
  ) {
    deleteMovie(input: $input, condition: $condition) {
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
export const createMovieReview = /* GraphQL */ `
  mutation CreateMovieReview(
    $input: CreateMovieReviewInput!
    $condition: ModelMovieReviewConditionInput
  ) {
    createMovieReview(input: $input, condition: $condition) {
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
export const updateMovieReview = /* GraphQL */ `
  mutation UpdateMovieReview(
    $input: UpdateMovieReviewInput!
    $condition: ModelMovieReviewConditionInput
  ) {
    updateMovieReview(input: $input, condition: $condition) {
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
export const deleteMovieReview = /* GraphQL */ `
  mutation DeleteMovieReview(
    $input: DeleteMovieReviewInput!
    $condition: ModelMovieReviewConditionInput
  ) {
    deleteMovieReview(input: $input, condition: $condition) {
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
export const createMovieInterview = /* GraphQL */ `
  mutation CreateMovieInterview(
    $input: CreateMovieInterviewInput!
    $condition: ModelMovieInterviewConditionInput
  ) {
    createMovieInterview(input: $input, condition: $condition) {
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
export const updateMovieInterview = /* GraphQL */ `
  mutation UpdateMovieInterview(
    $input: UpdateMovieInterviewInput!
    $condition: ModelMovieInterviewConditionInput
  ) {
    updateMovieInterview(input: $input, condition: $condition) {
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
export const deleteMovieInterview = /* GraphQL */ `
  mutation DeleteMovieInterview(
    $input: DeleteMovieInterviewInput!
    $condition: ModelMovieInterviewConditionInput
  ) {
    deleteMovieInterview(input: $input, condition: $condition) {
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
