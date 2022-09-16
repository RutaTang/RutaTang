import {FC} from 'react'

interface Props {
  children: React.ReactNode
}

const MDArticleWrapper:FC<Props> = ({ children }) => {
  return <article className="prose lg:prose-xl">{children}</article>;
};

export default MDArticleWrapper;
