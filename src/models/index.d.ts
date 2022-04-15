import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type TechStackMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TodoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class TechStack {
  readonly id: string;
  readonly name: string;
  readonly logo_s3_path: string;
  readonly familarity: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<TechStack, TechStackMetaData>);
  static copyOf(source: TechStack, mutator: (draft: MutableModel<TechStack, TechStackMetaData>) => MutableModel<TechStack, TechStackMetaData> | void): TechStack;
}

export declare class Todo {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Todo, TodoMetaData>);
  static copyOf(source: Todo, mutator: (draft: MutableModel<Todo, TodoMetaData>) => MutableModel<Todo, TodoMetaData> | void): Todo;
}