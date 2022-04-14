// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { TechStack, Todo } = initSchema(schema);

export {
  TechStack,
  Todo
};