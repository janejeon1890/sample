import gql from "graphql-tag";


export const HOME_PAGE = gql`
  {
    movies(limit: 50, rating: 7) {
      id
      title
      rating
      medium_cover_image
    }
  }
`;

export const USER_QUERY = gql`
query{
  getUsers{
    User{
        age
        gender
        job
        adid
    }
  }
}
`;