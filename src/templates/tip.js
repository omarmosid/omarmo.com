import React from "react";
import { graphql, Link } from "gatsby";

import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/layout/layout";
import { Box, Heading, Stack } from "@chakra-ui/core";

const shortcodes = { Link }; // Provide common components here

const Tips = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <Stack as="header" className="article__header" py={[1 / 2, 1 / 4, "8em"]}>
        <Heading as="h1" color="teal.400">{data.mdx.frontmatter.title}</Heading>
      </Stack>
      <Stack as="article" py="2em" maxW="4xl">
        <MDXProvider components={shortcodes}>
          <Box as={MDXRenderer} fontSize="1.4em">
            {data.mdx.body}
          </Box>
        </MDXProvider>
      </Stack>
    </Layout>
  );
};

export const pageQuery = graphql`
  query getTipById($id: String!) {
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

export default Tips;
