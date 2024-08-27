import { MDXContent } from "@/app/components/mdx-content";
import { getPost } from "@/lib/data";
import { notFound } from "next/navigation";

const PostPage = ({ params }: { params: { slug: string } }) => {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <>
      <MDXContent code={post.code} />
    </>
  );
};

export default PostPage;
