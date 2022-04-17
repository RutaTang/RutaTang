import { useEffect } from "react";
import { Button, Input, Text, useTheme } from "@nextui-org/react";
import { useTheme as useNextTheme } from 'next-themes'

import { API, graphqlOperation } from "aws-amplify";
import { listTechStacks } from "../src/graphql/queries";

function Test() {
	const { setTheme } = useNextTheme();
  useEffect(() => {
    API.graphql(graphqlOperation(listTechStacks)).then(console.log);
  }, []);
  return (
    <div className="dark:bg-red-300 bg-blue-300">
			<button onClick={()=>{setTheme('light')}}>Change Style</button>
    </div>
  );
}

export default Test;
