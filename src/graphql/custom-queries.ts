
export const getTvSeriesFull = /* GraphQL */ `
  query GetTvSeriesFull($id: ID!) {
    getTvSeries(id: $id) {
      id
      name
      image
      createdAt
      updatedAt
      reviews {
        items {
          name
          lengthSeconds
          path
          published
          season
          episode
          score
        }
        nextToken
      }
      interviews {
        items {
          name
          published
          lengthSeconds
          path
        }
        nextToken
      }
    }
  }
`

export const listTvReviewsFull = /* GraphQL */ `
  query ListTvReviewsFull(
    $filter: ModelTvReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTvReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        lengthSeconds
        path
        season
        published
        episode
        score
        series {
          id
          name
          image
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

export const listTvInterviewFull = /* GraphQL */ `
  query ListTvInterviewFull(
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
        series {
          id
          name
          image
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;



export const getMoviesFull = /* GraphQL */ `
  query GetMoviessFull($id: ID!) {
    getMovie(id: $id) {
      id
      name
      image
      createdAt
      updatedAt
      reviews {
        items {
          name
          lengthSeconds
          path
          published
          score
        }
        nextToken
      }
      interviews {
        items {
          name
          published
          lengthSeconds
          path
        }
        nextToken
      }
    }
  }
`


export const listMovieReviewsFull = /* GraphQL */ `
  query ListMovieReviewsFull(
    $filter: ModelMovieReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMovieReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        lengthSeconds
        path
        published
        score
        movie {
          id
          name
          image
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

export const listMovieInterviewsFull = /* GraphQL */ `
  query ListMovieInterviewFull(
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
        movie {
          id
          name
          image
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
