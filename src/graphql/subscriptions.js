/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTechStack = /* GraphQL */ `
  subscription OnCreateTechStack {
    onCreateTechStack {
      id
      name
      description
      logo_s3_path
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTechStack = /* GraphQL */ `
  subscription OnUpdateTechStack {
    onUpdateTechStack {
      id
      name
      description
      logo_s3_path
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTechStack = /* GraphQL */ `
  subscription OnDeleteTechStack {
    onDeleteTechStack {
      id
      name
      description
      logo_s3_path
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag {
    onCreateTag {
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
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag {
    onUpdateTag {
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
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag {
    onDeleteTag {
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
export const onCreatePostTag = /* GraphQL */ `
  subscription OnCreatePostTag {
    onCreatePostTag {
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
export const onUpdatePostTag = /* GraphQL */ `
  subscription OnUpdatePostTag {
    onUpdatePostTag {
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
export const onDeletePostTag = /* GraphQL */ `
  subscription OnDeletePostTag {
    onDeletePostTag {
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
