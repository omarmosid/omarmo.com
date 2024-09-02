import { BlogList } from "../components/blog/BlogList";
import { HomeHero } from "../components/header/HomeHero";
import { RegularLayout } from "../components/layouts/regular-layout";

export default function Home() {
  return (
    <>
      <HomeHero />
      <RegularLayout>
        <BlogList />
      </RegularLayout>
    </>
  );
}
