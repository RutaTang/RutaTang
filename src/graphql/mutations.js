/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTechStack = /* GraphQL */ `
  mutation CreateTechStack(
    $input: CreateTechStackInput!
    $condition: ModelTechStackConditionInput
  ) {
    createTechStack(input: $input, condition: $condition) {
      id
      name
      description
      logo_s3_path
      createdAt
      updatedAt
    }
  }
`;
export const updateTechStack = /* GraphQL */ `
  mutation UpdateTechStack(
    $input: UpdateTechStackInput!
    $condition: ModelTechStackConditionInput
  ) {
    updateTechStack(input: $input, condition: $condition) {
      id
      name
      description
      logo_s3_path
      createdAt
      updatedAt
    }
  }
`;
export const deleteTechStack = /* GraphQL */ `
  mutation DeleteTechStack(
    $input: DeleteTechStackInput!
    $condition: ModelTechStackConditionInput
  ) {
    deleteTechStack(input: $input, condition: $condition) {
      id
      name
      description
      logo_s3_path
      createdAt
      updatedAt
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
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
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
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
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
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
export const createPostTag = /* GraphQL */ `
  mutation CreatePostTag(
    $input: CreatePostTagInput!
    $condition: ModelPostTagConditionInput
  ) {
    createPostTag(input: $input, condition: $condition) {
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
export const updatePostTag = /* GraphQL */ `
  mutation UpdatePostTag(
    $input: UpdatePostTagInput!
    $condition: ModelPostTagConditionInput
  ) {
    updatePostTag(input: $input, condition: $condition) {
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
export const deletePostTag = /* GraphQL */ `
  mutation DeletePostTag(
    $input: DeletePostTagInput!
    $condition: ModelPostTagConditionInput
  ) {
    deletePostTag(input: $input, condition: $condition) {
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
