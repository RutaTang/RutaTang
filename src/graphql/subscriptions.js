/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag {
    onCreateTag {
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
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag {
    onUpdateTag {
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
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag {
    onDeleteTag {
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
export const onCreateTagPost = /* GraphQL */ `
  subscription OnCreateTagPost {
    onCreateTagPost {
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
export const onUpdateTagPost = /* GraphQL */ `
  subscription OnUpdateTagPost {
    onUpdateTagPost {
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
export const onDeleteTagPost = /* GraphQL */ `
  subscription OnDeleteTagPost {
    onDeleteTagPost {
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
