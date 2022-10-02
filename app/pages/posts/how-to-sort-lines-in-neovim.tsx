import path from "path";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

import MDArticleWrapper from "../../components/MDArticleWrapper";
import OutLine, { OutLineItem } from "../../components/OutLine";

export async function getStaticProps() {
  //get current file name
  const filename = path.parse(__filename).name;
  //get outline items
  const outLineItems: Array<OutLineItem> = [
    {
      title: "Cases",
      href: `#cases`,
    },
    {
      title: "Syntax",
      href: "#syntax",
    },
    { title: "Use sort with range", href: "#sort-with-range" },
    {
      title: "Use sort without pattern",
      href: "#sort-without-pattern",
    },
    {
      title: "Use sort with pattern",
      href: "#sort-with-pattern",
    },
    {
      title: "Examples",
      href: "#examples",
    },
    {
      title: "References",
      href: "#references",
    }
  ];
  return {
    props: { filename, outLineItems },
  };
}

const Post = ({
  filename,
  outLineItems,
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
      {/* <OutLine items={outLineItems} /> */}
      <DynamicArticle />
    </MDArticleWrapper>
  );
};

export default Post;
