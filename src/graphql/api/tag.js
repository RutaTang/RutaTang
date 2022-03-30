import { API, graphqlOperation } from "aws-amplify";
import * as _ from "lodash";
import { listTags } from "../queries";

async function queryAllTags() {
  const default_items = [];
  const result = await API.graphql(graphqlOperation(listTags));
  let items =
    _.get(result, "data.listTags.items", default_items) ?? default_items;
  items = items.filter((item) => item !== null);
  return items;
}

export { queryAllTags };
