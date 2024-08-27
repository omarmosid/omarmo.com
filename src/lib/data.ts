import { posts } from "../../.velite";

export const getPost = (slug: string) => {
  console.log("posts", posts);
  return posts.find((post) => post.slug === slug);
};

export const getAllPosts = () => {
  return posts;
};
