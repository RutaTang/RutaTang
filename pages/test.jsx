import { useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listTechStacks } from '../src/graphql/queries'

function Test() {
  useEffect(() => {
    API.graphql(graphqlOperation(listTechStacks)).then(console.log);
  }, []);
  return (
    <div>
      <h1></h1>
    </div>
  );
}

export default Test;
