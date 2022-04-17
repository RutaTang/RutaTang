import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type TechStackMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class TechStack {
  readonly id: string;
  readonly name: string;
  readonly logo_s3_path: string;
  readonly familarity: number;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<TechStack, TechStackMetaData>);
  static copyOf(source: TechStack, mutator: (draft: MutableModel<TechStack, TechStackMetaData>) => MutableModel<TechStack, TechStackMetaData> | void): TechStack;
}