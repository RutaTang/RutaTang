import { useRouter } from "next/router";

import MDArticleWrapper from "../../components/MDArticleWrapper";
import dynamic from "next/dynamic";
import path from "path";

export async function getStaticProps() {
  const filename = path.parse(__filename).name;
  return {
    props: { filename },
  };
}

const Post = ({ filename }: { filename: string }) => {
  const { locale } = useRouter();
  const DynamicArticle = locale
    ? dynamic(() => import(`../../posts/${filename}/${locale}/index.mdx`), {})
    : () => null;
  return (
    <MDArticleWrapper>
      <DynamicArticle />
    </MDArticleWrapper>
  );
};

export default Post;
