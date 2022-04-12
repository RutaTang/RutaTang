import { useEffect, useState } from "react";
import { queryAllTechStacks } from "../backend/query";

const TestPage = () => {
  useEffect(() => {
    queryAllTechStacks().then(console.log);
  }, []);
  const [c, setC] = useState(false);
  return (
    <div>
      <h1
        onClick={() => {
          setC((p) => !p);
        }}
      >
        Test{c ? 1 : 2}
      </h1>
    </div>
  );
};

export default TestPage;
