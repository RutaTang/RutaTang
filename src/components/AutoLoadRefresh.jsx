import { useState, useEffect } from "react";

const Loading = (props) => {
  const style = props.style || {};
  return (
    <div style={style} className="relative grid place-items-center">
      <svg
        t="1649296515792"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1271"
        className="opacity-10 absolute animate-ping w-2/3 h-2/3"
        style={{ animationDuration: "1.5s" }}
      >
        <path
          d="M512 0C233.248 0 6.528 222.752 0.16 499.968 6.08 258.112 189.984 64 416 64c229.76 0 416 200.576 416 448a96 96 0 1 0 192 0c0-282.784-229.216-512-512-512z m0 1024c278.752 0 505.472-222.752 511.84-499.968C1017.92 765.888 834.016 960 608 960c-229.76 0-416-200.576-416-448a96 96 0 1 0-192 0c0 282.784 229.216 512 512 512z"
          p-id="1272"
          fill="#515151"
        ></path>
      </svg>
      <svg
        t="1649296515792"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1271"
        className="absolute animate-spin w-2/3 h-2/3"
        style={{ animationDuration: "1.5s" }}
      >
        <path
          d="M512 0C233.248 0 6.528 222.752 0.16 499.968 6.08 258.112 189.984 64 416 64c229.76 0 416 200.576 416 448a96 96 0 1 0 192 0c0-282.784-229.216-512-512-512z m0 1024c278.752 0 505.472-222.752 511.84-499.968C1017.92 765.888 834.016 960 608 960c-229.76 0-416-200.576-416-448a96 96 0 1 0-192 0c0 282.784 229.216 512 512 512z"
          p-id="1272"
          fill="#515151"
        ></path>
      </svg>
    </div>
  );
};

/*
 * @params loaded - whether data is loaded
 */
const AutoLoadRefresh = (props) => {
  const children = props.children;
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    // console.log(props.loaded);
    if (props.loaded) {
      setTimeout(() => {
        setLoaded(true);
      }, 500);
    }
  });
  return (
    <>
      {loaded ? (
        <>{children}</>
      ) : (
        <Loading
          style={{ marginTop: "20px", height: "100px", width: "100%" }}
        />
      )}
    </>
  );
};

export default AutoLoadRefresh;
