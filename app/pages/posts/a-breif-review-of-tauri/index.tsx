import { useRouter } from "next/router";

import MDArticleWrapper from "../../../components/MDArticleWrapper";
import dynamic from "next/dynamic";

const Post = () => {
  const { locale } = useRouter();
  const DynamicArticle = locale
    ? dynamic(() => import(`./i18n/${locale}/index.mdx`), {})
    : () => null;
  return (
    <MDArticleWrapper>
      <DynamicArticle />
    </MDArticleWrapper>
  );
};

export default Post;
