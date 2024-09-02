import React, { ReactNode } from "react";
import { BlogPostItem } from "./BlogPostItem";
import { getPostsBySortOrder } from "@/lib/data";

type BlogListProps = {};

const BlogList: React.FC<BlogListProps> = () => {
  const posts = getPostsBySortOrder();
  return (
    <>
      <div>
        <div className="grid grid-cols-1 gap-10">
          {posts.map((post) => {
            return (
              <>
                <BlogPostItem key={post.slug} {...post} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export { BlogList };
