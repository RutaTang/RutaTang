import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type TechStackMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TagMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TagPostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class TechStack {
  readonly id: string;
  readonly name?: string;
  readonly logo?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<TechStack, TechStackMetaData>);
  static copyOf(source: TechStack, mutator: (draft: MutableModel<TechStack, TechStackMetaData>) => MutableModel<TechStack, TechStackMetaData> | void): TechStack;
}

export declare class Post {
  readonly id: string;
  readonly title?: string;
  readonly cover?: string;
  readonly content?: string;
  readonly description?: string;
  readonly tags?: (TagPost | null)[];
  readonly timeTaken?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Post, PostMetaData>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post, PostMetaData>) => MutableModel<Post, PostMetaData> | void): Post;
}

export declare class Tag {
  readonly id: string;
  readonly name?: string;
  readonly Posts?: (TagPost | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Tag, TagMetaData>);
  static copyOf(source: Tag, mutator: (draft: MutableModel<Tag, TagMetaData>) => MutableModel<Tag, TagMetaData> | void): Tag;
}

export declare class TagPost {
  readonly id: string;
  readonly post: Post;
  readonly tag: Tag;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<TagPost, TagPostMetaData>);
  static copyOf(source: TagPost, mutator: (draft: MutableModel<TagPost, TagPostMetaData>) => MutableModel<TagPost, TagPostMetaData> | void): TagPost;
}