import { Container, Flex, Heading } from "@chakra-ui/react";
import React from "react";

type HeroProps = {
  title: string;
};

const Hero: React.FC<HeroProps> = ({ title, children }) => {
  return (
    <Flex p="2rem">
      <Heading as="h1" fontSize="6xl">{title}</Heading>
      {children}
    </Flex>
  );
};

export default Hero;
