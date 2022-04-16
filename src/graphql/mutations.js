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
      logo_s3_path
      familarity
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
      logo_s3_path
      familarity
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
      logo_s3_path
      familarity
      createdAt
      updatedAt
    }
  }
`;
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
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
      createdAt
      updatedAt
    }
  }
`;
