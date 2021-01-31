import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import { Heading, Stack } from "@chakra-ui/react";
import SEO from "../components/seo/seo";
import Card from "../components/card/card";

const Blog = ({ data }) => {
  const posts = data.allMdx.edges;
  return (
    <Layout>
      <SEO title="Blog" />
      <Heading as="h1">Blog</Heading>
      <Stack>
        {posts.map((post, i) => {
          return (
            <Card
              key={i}
              title={post.node.frontmatter.title}
              slug={`/posts/${post.node.frontmatter.slug}`}
            />
          );
        })}
      </Stack>
    </Layout>
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
            createDate
            status
          }
        }
      }
    }
  }
`;

export default Blog;
