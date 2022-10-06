import path from "path";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

import MDArticleWrapper from "../../components/MDArticleWrapper";
import OutLine, { OutLineItem } from "../../components/OutLine";

export async function getStaticProps() {
  //get current file name
  const filename = path.parse(__filename).name;
  return {
    props: { filename},
  };
}

const Post = ({
  filename,
}: {
  filename: string;
  outLineItems: Array<OutLineItem>;
}) => {
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
