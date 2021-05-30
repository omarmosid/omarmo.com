import { Stack } from "@chakra-ui/react";
import { graphql } from "gatsby";
import React from "react";
import FullLayout from "../components/layout/FullLayout";
import Card from "../components/reusable/card/Card.tsx";
import Hero from "../components/reusable/hero/Hero.tsx";
import SEO from "../components/seo/seo";

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
