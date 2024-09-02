import dayjs from "dayjs";
import { posts, Post } from "../../.velite";

export const getPost = (slug: string): Post | undefined => {
  const post = posts.find((post) => post.slug === slug);
  return post;
};

export const getAllPosts = (): Post[] => {
  return posts;
};

export const getPostsBySortOrder = () => {
  const sortedPosts = posts.sort((a, b) => {
    return dayjs(b.date).isAfter(dayjs(a.date)) ? 1 : -1;
  });

  return sortedPosts;
};
