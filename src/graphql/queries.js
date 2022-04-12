/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTechStack = /* GraphQL */ `
  query GetTechStack($id: ID!) {
    getTechStack(id: $id) {
      id
      name
      description
      logo_s3_path
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
        description
        logo_s3_path
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      description
      content
      cover_s3_path
      Tags {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        content
        cover_s3_path
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
      posts {
        nextToken
      }
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
export const getPostTag = /* GraphQL */ `
  query GetPostTag($id: ID!) {
    getPostTag(id: $id) {
      id
      postID
      tagID
      post {
        id
        title
        description
        content
        cover_s3_path
        createdAt
        updatedAt
      }
      tag {
        id
        name
        description
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPostTags = /* GraphQL */ `
  query ListPostTags(
    $filter: ModelPostTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        postID
        tagID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
