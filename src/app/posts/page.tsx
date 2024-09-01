import React from "react";
import { posts } from "../../../.velite";
import { Link } from "../components/link";
import Image from "next/image";

const PostsPage = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {posts.map((post) => {
          return (
            <>
              <Link href={`/posts/${post.slug}`}>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                  <Image
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                    src={post?.cover || "/default_hero.jpg"}
                    alt={post.title}
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{post.title}</div>
                  </div>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
};

export default PostsPage;
