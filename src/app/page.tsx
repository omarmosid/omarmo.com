import { BlogList } from "../components/blog/BlogList";
import { HomeHero } from "../components/header/HomeHero";
import { RegularLayout } from "../components/layouts/regular-layout";

export default function Home() {
  return (
    <>
      <HomeHero />
      <RegularLayout>
        <div>
          <h2 className="text-4xl">Latest posts</h2>
        </div>
        <BlogList />
      </RegularLayout>
    </>
  );
}
