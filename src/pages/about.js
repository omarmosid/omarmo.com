import { Heading, Text } from "@chakra-ui/core";
import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Heading as="h1">About</Heading>
      <Text>Coming soon...</Text>
    </Layout>
  );
};

export default About;
