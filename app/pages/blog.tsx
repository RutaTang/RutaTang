import Image from "next/image";
import matter from "gray-matter";
import { readdirSync, readFileSync, existsSync } from "fs";
import path from "path";
import Link from "next/link";
import { useRouter } from "next/router";

// Get all post meta data from its corresponding .meta file
export async function getStaticProps() {
  const postsFolderPath = path.join(process.cwd(), "pages/posts");
  const folderNames = readdirSync(postsFolderPath);

  const allPostInfos = folderNames
    .filter((folderName) => !folderName.startsWith("."))
    .map((folderName) => {
      const i18nFullFolderPath = path.join(postsFolderPath, folderName, "i18n");
      const i18nFolderNames = readdirSync(i18nFullFolderPath).filter(
        (fn) => !fn.startsWith(".")
      );
      // key is i18n locale, value is post meta data with corresponding locale
      let postInfoWithLocale: any = {};
      i18nFolderNames.forEach((i18nFolderName) => {
        const locale = i18nFolderName;

        const metaFullPath = path.join(
          i18nFullFolderPath,
          i18nFolderName,
          "meta"
        );
        const metaContent = readFileSync(metaFullPath, "utf-8");
        const matterResult = matter(metaContent);

        postInfoWithLocale[locale] = {
          locale,
          ...matterResult.data,
        };
      });
      return {
        globalNameID: folderName,
        postInfoWithLocale,
      };
    });

  return {
    props: {
      allPostInfos, //an array whose item has globalNameID, and postInfoWithLocale (key is locale, value is post meta data)
    },
  };
}

interface CardProps {
  coverBase64: string;
  title: string;
  description: string;
}
const Card = ({ coverBase64, title, description }: CardProps) => {
  return (
    <div className="card h-[20rem] md:h-[30rem] shadow-xl">
      <figure className="relative w-full h-[12rem] md:h-[18rem]">
        <Image layout="fill" src={coverBase64} alt="Post Cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <span className="truncate">{title}</span>
        </h2>
        <p className="line-clamp-4">{description}</p>
      </div>
    </div>
  );
};

interface BlogProps {
  allPostInfos: any[];
}
const Blog = (props: BlogProps) => {
  const allPostInfos = props.allPostInfos;
  const { locale } = useRouter();
  return (
    <div className="pt-32 w-full">
      <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/*Card*/}
        {locale && allPostInfos.map((postInfo) => {
          return (
            <Link
              href={`/posts/${postInfo.globalNameID}`}
              key={postInfo.globalNameID}
            >
              <div className="cursor-pointer">
                <Card
                  coverBase64={postInfo.postInfoWithLocale[locale].coverBase64}
                  title={postInfo.postInfoWithLocale[locale].title}
                  description={postInfo.postInfoWithLocale[locale].description}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
