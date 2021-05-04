import { Heading, Text } from "@chakra-ui/react";
import React from "react";
import FullLayout from "../components/layout/FullLayout";
import SEO from "../components/seo/seo";

const About = () => {
  return (
    <FullLayout>
      <SEO title="About" />
      <Heading as="h1">About</Heading>
      <Text>Coming soon...</Text>
    </FullLayout>
  );
};

export default About;
