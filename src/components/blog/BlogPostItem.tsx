import React from "react";
import { Post } from "../../../.velite";
import Link from "next/link";

type BlogPostItemProps = Post;

const BlogPostItem: React.FC<BlogPostItemProps> = ({
  title,
  date,
  excerpt,
  cover,
  slug,
}) => {
  return (
    <>
      <Link className="inline-block no-underline" href={`/posts/${slug}`}>
        <div className="px-6 py-8 w-full border border-zinc-300 dark:border-zinc-700 rounded shadow-sm">
          <h2 className="mt-0 mb-2 text-zinc-700 dark:text-zinc-300">
            {title}
          </h2>
          <p className="mb-0 text-zinc-600 dark:text-zinc-400">{excerpt}</p>
        </div>
      </Link>
    </>
  );
};

export { BlogPostItem };
