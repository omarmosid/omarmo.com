import React from "react";
import { Heading } from "../Heading";
import { Container } from "../containers/Container";

type HomeHeroProps = {};

const HomeHero: React.FC<HomeHeroProps> = () => {
  return (
    <>
      <section className="h-[50vh] w-full flex justify-center items-center">
        <Container>
          <h1 className="mb-0 text-6xl font-bold">Hi! I'm Omar!</h1>

          <div className="m-0">
            <p>
              I am a self-taught Full-Stack Developer passionate about building
              products that delight users.
            </p>
            <p>
              I am a Data geek and an obsessed collector of beautiful
              visualizations.
            </p>
            <p>
              I also thoroughly enjoy reading historical fictions and playing
              role-playing games.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};

export { HomeHero };
