import { posts, Post } from "../../.velite";

export const getPost = (slug: string): Post | undefined => {
  const post = posts.find((post) => post.slug === slug);
  return post;
};

export const getAllPosts = (): Post[] => {
  return posts;
};
