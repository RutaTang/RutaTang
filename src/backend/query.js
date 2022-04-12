import { API, graphqlOperation } from "aws-amplify";
import { listTechStacks } from "../graphql/queries";

async function queryAllTechStacks() {
  return await API.graphql(graphqlOperation(listTechStacks));
}

export { queryAllTechStacks };
