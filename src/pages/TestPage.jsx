import AutoLoadRefresh from "../components/AutoLoadRefresh";

async function get() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return 1;
}
const TestPage = () => {
  return (
    <AutoLoadRefresh>
      <div>
        <h1>Test</h1>
      </div>
    </AutoLoadRefresh>
  );
};

export default TestPage;
