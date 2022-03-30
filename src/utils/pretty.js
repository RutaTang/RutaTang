import { convertISODatetimeToDate } from "../utils/datetime-parser";

function prettyTag(tag) {
  return {
    id: tag.id,
    name: tag.name,
    posts: tag.posts.map(prettyPost),
  };
}

function prettyPost(post) {
  return {
    id: post.id,
    title: post.title,
    content: post.content,
    description: post.description,
    createdAt: convertISODatetimeToDate(post.createdAt),
    updatedAt: convertISODatetimeToDate(post.updatedAt),
    timeTaken: post.timeTaken,
    cover: post.cover,
  };
}

export { prettyTag, prettyPost };
