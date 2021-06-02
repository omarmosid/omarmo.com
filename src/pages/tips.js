import { Heading, Stack } from "@chakra-ui/react";
import { graphql } from "gatsby";
import React from "react";
import Card from "../components/reusable/card/Card.tsx";
import SEO from "../components/seo/seo";
import FullLayout from "../components/layout/FullLayout";

const Tips = ({ data }) => {
  const tips = data.allMdx.edges;
  return (
    <FullLayout>
      <SEO title="Tips" />
      <Heading as="h1">Tips</Heading>
      <Stack>
        {tips.map((tip, i) => {
          return (
            <Card
              key={i}
              frontmatter={tip.node.frontmatter}
              to={`/tips/${tip.node.frontmatter.slug}`}
            />
          );
        })}
      </Stack>
    </FullLayout>
  );
};

export const pageQuery = graphql`
  query allTips {
    allMdx(
      filter: {
        fields: { collection: { eq: "tips" } }
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

export default Tips;
