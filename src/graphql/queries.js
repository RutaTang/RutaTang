/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
      nextToken
      startedAt
    }
  }
`;
export const syncPosts = /* GraphQL */ `
  query SyncPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPosts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getTag = /* GraphQL */ `
  query GetTag($id: ID!) {
    getTag(id: $id) {
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
      nextToken
      startedAt
    }
  }
`;
export const syncTags = /* GraphQL */ `
  query SyncTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTags(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getTagPost = /* GraphQL */ `
  query GetTagPost($id: ID!) {
    getTagPost(id: $id) {
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
export const listTagPosts = /* GraphQL */ `
  query ListTagPosts(
    $filter: ModelTagPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTagPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
            items {
              id
              postID
              tagID
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
        tag {
          id
          name
          Posts {
            items {
              id
              postID
              tagID
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
      nextToken
      startedAt
    }
  }
`;
export const syncTagPosts = /* GraphQL */ `
  query SyncTagPosts(
    $filter: ModelTagPostFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTagPosts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
            items {
              id
              postID
              tagID
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
        tag {
          id
          name
          Posts {
            items {
              id
              postID
              tagID
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
      nextToken
      startedAt
    }
  }
`;
