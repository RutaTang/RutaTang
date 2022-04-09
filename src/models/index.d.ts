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

type PostTagMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class TechStack {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly logo_s3_path?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<TechStack, TechStackMetaData>);
  static copyOf(source: TechStack, mutator: (draft: MutableModel<TechStack, TechStackMetaData>) => MutableModel<TechStack, TechStackMetaData> | void): TechStack;
}

export declare class Post {
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly content?: string | null;
  readonly cover_s3_path?: string | null;
  readonly Tags?: (PostTag | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Post, PostMetaData>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post, PostMetaData>) => MutableModel<Post, PostMetaData> | void): Post;
}

export declare class Tag {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly posts?: (PostTag | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Tag, TagMetaData>);
  static copyOf(source: Tag, mutator: (draft: MutableModel<Tag, TagMetaData>) => MutableModel<Tag, TagMetaData> | void): Tag;
}

export declare class PostTag {
  readonly id: string;
  readonly post: Post;
  readonly tag: Tag;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<PostTag, PostTagMetaData>);
  static copyOf(source: PostTag, mutator: (draft: MutableModel<PostTag, PostTagMetaData>) => MutableModel<PostTag, PostTagMetaData> | void): PostTag;
}