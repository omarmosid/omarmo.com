import React from "react";
import { graphql } from "gatsby";
import { Heading, Stack } from "@chakra-ui/react";
import SEO from "../components/seo/seo";
import Card from "../components/reusable/card/Card";
import FullLayout from "../components/layout/FullLayout";
import Hero from "../components/reusable/hero/Hero";

const Blog = ({ data }) => {
  const posts = data.allMdx.edges;
  return (
    <FullLayout>
      <SEO title="Blog" />
      <Hero as="h1" title="Blog"></Hero>
      <Stack>
        {posts.map((post, i) => {
          return (
            <Card
              key={i}
              frontmatter={post.node.frontmatter}
            />
          );
        })}
      </Stack>
    </FullLayout>
  );
};

export const pageQuery = graphql`
  query allPosts {
    allMdx(
      filter: {
        fields: { collection: { eq: "posts" } }
        frontmatter: { status: { eq: "PUBLISHED" } }
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            slug
            createdAt
            status
          }
        }
      }
    }
  }
`;

export default Blog;
