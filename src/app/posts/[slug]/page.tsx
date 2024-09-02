import { MDXContent } from "@/components/mdx-content";
import { getAllPosts, getPost } from "@/lib/data";
import { notFound } from "next/navigation";
import { BlogHeader } from "../../../components/header/BlogHeader";

type PostProps = {
  params: {
    slug: string;
  };
};

export const generateStaticParams = (): PostProps["params"][] => {
  const postParams = getAllPosts().map((p) => ({ slug: p.slug }));
  return postParams;
};

// Commenting out because of this bug: https://github.com/vercel/next.js/issues/56253
// export const dynamicParams = false;

const PostPage = ({ params }: PostProps) => {
  const slug = decodeURI(params.slug);
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <article>
        <BlogHeader post={post} />
        <div className="max-w-prose mx-auto lg:text-lg font-serif px-2 py-8">
          <MDXContent code={post.code} />
        </div>
      </article>
    </>
  );
};

export default PostPage;
