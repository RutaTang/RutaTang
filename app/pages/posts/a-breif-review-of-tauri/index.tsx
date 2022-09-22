import { useRouter } from "next/router";

import MDArticleWrapper from "../../../components/MDArticleWrapper";
import ZhCN from "./i18n/zh-CN.mdx";
import EnUS from "./i18n/en-US.mdx";
import { ReactNode, useEffect, useState } from "react";

const Post = () => {
  const { locale } = useRouter();
  const [article, setArticle] = useState<ReactNode | null>(<EnUS />);
  useEffect(() => {
    switch (locale) {
      case "en-US": {
        setArticle(<EnUS />);
        break;
      }
      case "zh-CN": {
        setArticle(<ZhCN />);
        break;
      }
    }
  }, [locale]);
  return <MDArticleWrapper>{article}</MDArticleWrapper>;
};

export default Post;
