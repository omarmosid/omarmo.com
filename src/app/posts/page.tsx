import { ContentLayout } from "../../components/layouts/content-layout";
import { BlogList } from "../../components/blog/BlogList";

const PostsPage = () => {
  return (
    <>
      <ContentLayout title="Posts">
        <BlogList />
      </ContentLayout>
    </>
  );
};

export default PostsPage;
