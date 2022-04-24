import { useEffect } from "react";
import { Button, Input, Text, useTheme } from "@nextui-org/react";
import { useTheme as useNextTheme } from 'next-themes'


function Test() {
	const { setTheme } = useNextTheme();
  return (
    <div className="dark:bg-red-300 bg-blue-300">
			<button onClick={()=>{setTheme('light')}}>Change Style</button>
    </div>
  );
}

export default Test;
