import { Navbar } from "@/app/components/navbar";

export default function PostLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <div className="px-0">{children}</div>;
}
