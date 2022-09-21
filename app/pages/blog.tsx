import Image from "next/image";
import matter from "gray-matter";
import { readdirSync, readFileSync } from "fs";
import path from "path";
import Link from "next/link";

// Get all post meta data from its corresponding .meta file
export async function getStaticProps() {
  const postsFolderPath = path.join(process.cwd(), "pages/posts");
  const folderNames = readdirSync(postsFolderPath);
  const allPostInfos = folderNames
    .filter((folderName) => !folderName.startsWith("."))
    .map((fn) => {
      const fullPath = path.join(postsFolderPath, fn, "meta");
      const fileContents = readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);
      return {
        nameID: fn,
        ...matterResult.data,
      };
    });
  return {
    props: {
      allPostInfos,
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
  return (
    <div className="pt-32 w-full">
      <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/*Card*/}
        {allPostInfos.map((postInfo) => (
          <Link href={`/posts/${postInfo.nameID}`} key={postInfo.nameID}>
            <div className="cursor-pointer">
              <Card
                coverBase64={postInfo.coverBase64}
                title={postInfo.title}
                description={postInfo.description}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
