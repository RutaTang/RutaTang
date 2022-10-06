import path from "path";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

import MDArticleWrapper from "../../components/MDArticleWrapper";

const Post = () => {
  const router = useRouter();
  const locale = router.locale;
  const { globalNameId } = router.query;
  const DynamicArticle = locale
    ? dynamic(() => import(`../../posts/${globalNameId}/${locale}/index.mdx`), {})
    : () => null;
  return (
    <MDArticleWrapper>
      <DynamicArticle />
    </MDArticleWrapper>
  );
};

export default Post;
