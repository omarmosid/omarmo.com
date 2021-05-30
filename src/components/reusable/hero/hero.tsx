import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import React from "react";

type HeroProps = {
  title: string;
};

const Hero: React.FC<HeroProps> = ({ title, children }) => {
  return (
    <Box pt={[8, 12]}>
      <Heading as="h1" fontSize="6xl" mb={4}>{title}</Heading>
      {children}
    </Box>
  );
};

export default Hero;
