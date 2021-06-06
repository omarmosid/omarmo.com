import { Stack } from "@chakra-ui/react";
import { graphql } from "gatsby";
import React from "react";
import SidebarLayout from "../components/layout/SidebarLayout";
import Content from "../components/reusable/content/Content";
import ContentHero from "../components/reusable/hero/ContentHero";
import PrevNext from "../components/reusable/prevnext/PrevNext";

const Project = ({ data, pageContext }) => {
  return (
    <SidebarLayout Hero={() => <ContentHero meta={data.mdx.frontmatter} />}>
      <Stack as="article" py="2em" maxW="4xl">
        <Content content={data.mdx.body} />
        <PrevNext pageContext={pageContext} />
      </Stack>
    </SidebarLayout>
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
        tags
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: FIXED)
          }
        }
      }
    }
  }
`;

export default Project;
