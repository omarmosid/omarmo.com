import { Heading, Stack } from "@chakra-ui/react";
import React from "react";
import Layout from "../components/layout/layout";

const Project = ({ data, pageContext }) => {
  return (
    <Layout>
      <Stack as="header" className="article__header" py={[1 / 2, 1 / 4, "8em"]}>
        <Heading as="h1" color="teal.400">
          {data.mdx.frontmatter.title}
        </Heading>
      </Stack>
    </Layout>
  );
};

export const pageQuery = graphql`
  query getProjectById($id: String!) {
    mdx(id: { eq: $id }) {
      id
      excerpt
      body
      frontmatter {
        title
        slug
        createdAt
        status
      }
    }
  }
`;

export default Project;
