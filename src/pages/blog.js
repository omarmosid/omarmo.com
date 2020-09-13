import React from "react";
import Layout from "../components/layout/layout";
import { Heading, Text } from "@chakra-ui/core";
import SEO from "../components/seo/seo";

const Blog = () => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Heading as="h1">Blog</Heading>
      <Text>Coming soon...</Text>
    </Layout>
  );
};

export default Blog;
