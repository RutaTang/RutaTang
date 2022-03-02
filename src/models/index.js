// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Visibility = {
  "PUBLIC": "PUBLIC",
  "PRIVATE": "PRIVATE"
};

const { Field, Tag, BlogPost, FieldTag, FieldBlogPost, TagBlogPost } = initSchema(schema);

export {
  Field,
  Tag,
  BlogPost,
  FieldTag,
  FieldBlogPost,
  TagBlogPost,
  Visibility
};