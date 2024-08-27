import { MDXContent } from "@/app/components/mdx-content";
import { getAllPosts, getPost } from "@/lib/data";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export const generateStaticParams = () => {
  return getAllPosts().map((p) => ({ slug: p.slug }));
};

const PostPage = ({ params }: { params: { slug: string } }) => {
  const slug = decodeURI(params.slug);
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      ddd
      <MDXContent code={post.code} />
    </>
  );
};

export default PostPage;
