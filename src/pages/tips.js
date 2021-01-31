import { Heading, Stack } from "@chakra-ui/react";
import { graphql } from "gatsby";
import React from "react";
import Card from "../components/card/card";
import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";

const Tips = ({ data }) => {
  const tips = data.allMdx.edges;
  return (
    <Layout>
      <SEO title="Tips" />
      <Heading as="h1">Tips</Heading>
      <Stack>
        {tips.map((tip, i) => {
          return (
            <Card
              key={i}
              title={tip.node.frontmatter.title}
              slug={`/tips/${tip.node.frontmatter.slug}`}
            />
          );
        })}
      </Stack>
    </Layout>
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
            createDate
            status
          }
        }
      }
    }
  }
`;

export default Tips;
