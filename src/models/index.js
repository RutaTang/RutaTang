// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { TechStack } = initSchema(schema);

export {
  TechStack
};