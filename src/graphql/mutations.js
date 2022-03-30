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
      logo
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      logo
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      logo
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      cover
      content
      description
      tags {
        items {
          id
          postID
          tagID
          post {
            id
            title
            cover
            content
            description
            tags {
              nextToken
              startedAt
            }
            timeTaken
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          tag {
            id
            name
            Posts {
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      timeTaken
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      cover
      content
      description
      tags {
        items {
          id
          postID
          tagID
          post {
            id
            title
            cover
            content
            description
            tags {
              nextToken
              startedAt
            }
            timeTaken
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          tag {
            id
            name
            Posts {
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      timeTaken
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      cover
      content
      description
      tags {
        items {
          id
          postID
          tagID
          post {
            id
            title
            cover
            content
            description
            tags {
              nextToken
              startedAt
            }
            timeTaken
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          tag {
            id
            name
            Posts {
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      timeTaken
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      Posts {
        items {
          id
          postID
          tagID
          post {
            id
            title
            cover
            content
            description
            tags {
              nextToken
              startedAt
            }
            timeTaken
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          tag {
            id
            name
            Posts {
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      Posts {
        items {
          id
          postID
          tagID
          post {
            id
            title
            cover
            content
            description
            tags {
              nextToken
              startedAt
            }
            timeTaken
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          tag {
            id
            name
            Posts {
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      Posts {
        items {
          id
          postID
          tagID
          post {
            id
            title
            cover
            content
            description
            tags {
              nextToken
              startedAt
            }
            timeTaken
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          tag {
            id
            name
            Posts {
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createTagPost = /* GraphQL */ `
  mutation CreateTagPost(
    $input: CreateTagPostInput!
    $condition: ModelTagPostConditionInput
  ) {
    createTagPost(input: $input, condition: $condition) {
      id
      postID
      tagID
      post {
        id
        title
        cover
        content
        description
        tags {
          items {
            id
            postID
            tagID
            post {
              id
              title
              cover
              content
              description
              timeTaken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            tag {
              id
              name
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        timeTaken
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      tag {
        id
        name
        Posts {
          items {
            id
            postID
            tagID
            post {
              id
              title
              cover
              content
              description
              timeTaken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            tag {
              id
              name
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateTagPost = /* GraphQL */ `
  mutation UpdateTagPost(
    $input: UpdateTagPostInput!
    $condition: ModelTagPostConditionInput
  ) {
    updateTagPost(input: $input, condition: $condition) {
      id
      postID
      tagID
      post {
        id
        title
        cover
        content
        description
        tags {
          items {
            id
            postID
            tagID
            post {
              id
              title
              cover
              content
              description
              timeTaken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            tag {
              id
              name
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        timeTaken
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      tag {
        id
        name
        Posts {
          items {
            id
            postID
            tagID
            post {
              id
              title
              cover
              content
              description
              timeTaken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            tag {
              id
              name
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteTagPost = /* GraphQL */ `
  mutation DeleteTagPost(
    $input: DeleteTagPostInput!
    $condition: ModelTagPostConditionInput
  ) {
    deleteTagPost(input: $input, condition: $condition) {
      id
      postID
      tagID
      post {
        id
        title
        cover
        content
        description
        tags {
          items {
            id
            postID
            tagID
            post {
              id
              title
              cover
              content
              description
              timeTaken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            tag {
              id
              name
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        timeTaken
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      tag {
        id
        name
        Posts {
          items {
            id
            postID
            tagID
            post {
              id
              title
              cover
              content
              description
              timeTaken
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            tag {
              id
              name
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
