// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Post, Tag, TagPost } = initSchema(schema);

export {
  Post,
  Tag,
  TagPost
};