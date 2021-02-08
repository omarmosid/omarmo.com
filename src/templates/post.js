import React from "react";
import { graphql, Link } from "gatsby";

import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/layout/layout";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";

const shortcodes = { Link }; // Provide common components here

const Post = ({ data, pageContext }) => {
  return (
    <Layout>
      <Stack as="header" className="article__header" py={[1 / 2, 1 / 4, "8em"]}>
        <Heading as="h1" color="teal.400">
          {data.mdx.frontmatter.title}
        </Heading>
      </Stack>
      <Stack as="article" py="2em" maxW="4xl">
        <MDXProvider components={shortcodes}>
          <Box as={MDXRenderer} fontSize="1.4em">
            {data.mdx.body}
          </Box>
        </MDXProvider>
        <Flex justifyContent="space-between" pt="4em">
          {pageContext.prev !== null && (
            <Stack
              as={Link}
              to={`/posts/${pageContext.prev.frontmatter.slug}`}
              flex="100%"
              maxW="45%"
              padding="2em 1em 1em"
              border="2px solid"
              borderRadius="2px"
              borderColor="teal.400"
            >
              <Heading as="h4">{pageContext.prev.frontmatter.title}</Heading>
              <Text>Previous Post</Text>
            </Stack>
          )}
          {pageContext.next !== null && (
            <Stack
              as={Link}
              to={`/posts/${pageContext.next.frontmatter.slug}`}
              flex="100%"
              maxW="45%"
              padding="2em 1em 1em"
              border="2px solid"
              borderRadius="2px"
              borderColor="teal.400"
              alignItems="flex-end"
            >
              <Heading as="h4">{pageContext.next.frontmatter.title}</Heading>
              <Text>Next Post</Text>
            </Stack>
          )}
        </Flex>
      </Stack>
    </Layout>
  );
};

export const pageQuery = graphql`
  query getPostById($id: String!) {
    mdx(id: { eq: $id }) {
      id
      excerpt
      body
      frontmatter {
        title
        slug
        createDate
      }
    }
  }
`;

export default Post;
