import { SimpleGrid } from "@chakra-ui/react";
import { graphql } from "gatsby";
import React from "react";
import ProjectCard from "../components/reusable/card/projectcard";
import Layout from "../components/layout/layout";
import Hero from "../components/reusable/hero/hero";
import SEO from "../components/seo/seo";
import FullLayout from "../components/layout/FullLayout";

const Projects = ({ data, pageContext }) => {
  const { edges: projectEdges } = data.allMdx;
  return (
    <FullLayout>
      <SEO title="Projects" />
      <Hero title="Projects" />
      <SimpleGrid columns={[1, 1, 2]} gap={10}>
        {projectEdges.map(({ node: projectNode }) => {
          return <ProjectCard project={projectNode} />;
        })}
      </SimpleGrid>
    </FullLayout>
  );
};

export const pageQuery = graphql`
  query allProjects {
    allMdx(
      filter: {
        fields: { collection: { eq: "projects" } }
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
            featuredImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Projects;
