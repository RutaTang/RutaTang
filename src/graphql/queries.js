/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTechStack = /* GraphQL */ `
  query GetTechStack($id: ID!) {
    getTechStack(id: $id) {
      id
      name
      logo_s3_path
      familarity
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTechStacks = /* GraphQL */ `
  query ListTechStacks(
    $filter: ModelTechStackFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTechStacks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        logo_s3_path
        familarity
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
