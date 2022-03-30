import { API, graphqlOperation } from "aws-amplify";
import * as _ from "lodash";
import { listTechStacks } from "../queries";

async function queryAllTechStacks() {
  const default_items = [];
  const result = await API.graphql(graphqlOperation(listTechStacks));
  let items =
    _.get(result, "data.listTechStacks.items", default_items) ?? default_items;
  items = items.filter((item) => item !== null);
  return items;
}

export { queryAllTechStacks };
