import { useEffect } from "react";

function Test() {
  useEffect(() => {
    console.log("test");
  }, []);
  return (
    <div>
      <h1>Test</h1>
    </div>
  );
}

export default Test;
