/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTechStack = /* GraphQL */ `
  query GetTechStack($id: ID!) {
    getTechStack(id: $id) {
      id
      name
      logo_s3_path
      familarity
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTag = /* GraphQL */ `
  query GetTag($id: ID!) {
    getTag(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTags = /* GraphQL */ `
  query ListTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
