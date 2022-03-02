import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Visibility {
  PUBLIC = "PUBLIC",
  PRIVATE = "PRIVATE"
}



type FieldMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TagMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BlogPostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FieldTagMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FieldBlogPostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TagBlogPostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Field {
  readonly id: string;
  readonly name?: string;
  readonly Tags?: (FieldTag | null)[];
  readonly BlogPosts?: (FieldBlogPost | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Field, FieldMetaData>);
  static copyOf(source: Field, mutator: (draft: MutableModel<Field, FieldMetaData>) => MutableModel<Field, FieldMetaData> | void): Field;
}

export declare class Tag {
  readonly id: string;
  readonly name?: string;
  readonly fields?: (FieldTag | null)[];
  readonly BlogPosts?: (TagBlogPost | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Tag, TagMetaData>);
  static copyOf(source: Tag, mutator: (draft: MutableModel<Tag, TagMetaData>) => MutableModel<Tag, TagMetaData> | void): Tag;
}

export declare class BlogPost {
  readonly id: string;
  readonly title?: string;
  readonly create_datetime?: string;
  readonly publish_datetime?: string;
  readonly update_datetim?: string;
  readonly delete_datetime?: string;
  readonly visibility?: Visibility | keyof typeof Visibility;
  readonly cover?: string;
  readonly content?: string;
  readonly fields?: (FieldBlogPost | null)[];
  readonly tags?: (TagBlogPost | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<BlogPost, BlogPostMetaData>);
  static copyOf(source: BlogPost, mutator: (draft: MutableModel<BlogPost, BlogPostMetaData>) => MutableModel<BlogPost, BlogPostMetaData> | void): BlogPost;
}

export declare class FieldTag {
  readonly id: string;
  readonly field: Field;
  readonly tag: Tag;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<FieldTag, FieldTagMetaData>);
  static copyOf(source: FieldTag, mutator: (draft: MutableModel<FieldTag, FieldTagMetaData>) => MutableModel<FieldTag, FieldTagMetaData> | void): FieldTag;
}

export declare class FieldBlogPost {
  readonly id: string;
  readonly field: Field;
  readonly blogPost: BlogPost;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<FieldBlogPost, FieldBlogPostMetaData>);
  static copyOf(source: FieldBlogPost, mutator: (draft: MutableModel<FieldBlogPost, FieldBlogPostMetaData>) => MutableModel<FieldBlogPost, FieldBlogPostMetaData> | void): FieldBlogPost;
}

export declare class TagBlogPost {
  readonly id: string;
  readonly tag: Tag;
  readonly blogPost: BlogPost;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<TagBlogPost, TagBlogPostMetaData>);
  static copyOf(source: TagBlogPost, mutator: (draft: MutableModel<TagBlogPost, TagBlogPostMetaData>) => MutableModel<TagBlogPost, TagBlogPostMetaData> | void): TagBlogPost;
}