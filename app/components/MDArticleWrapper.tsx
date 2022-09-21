import { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const MDArticleWrapper: FC<Props> = ({ children }) => {
  return (
    <div className="w-[60%] mx-auto pt-32">
      <article className="prose lg:prose-xl">{children}</article>
    </div>
  );
};

export default MDArticleWrapper;
