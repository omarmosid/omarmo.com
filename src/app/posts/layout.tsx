import { ContentLayout } from "../../components/layouts/content-layout";

export default function PostsLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
