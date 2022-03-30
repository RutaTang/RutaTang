// @ts-check
import { initSchema } from "@aws-amplify/datastore";
import { schema } from "./schema";

const { TechStack, Post, Tag, TagPost } = initSchema(schema);

export { TechStack, Post, Tag, TagPost };
