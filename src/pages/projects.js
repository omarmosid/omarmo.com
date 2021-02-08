import { SimpleGrid } from "@chakra-ui/react";
import { graphql } from "gatsby";
import React from "react";
import ProjectCard from "../components/card/projectcard";
import Hero from "../components/hero/hero";
import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";

const Projects = ({ data, pageContext }) => {
  console.log(data);
  const { edges: projectEdges } = data.allMdx;
  return (
    <Layout>
      <SEO title="Projects" />
      <Hero title="Projects" />
      <SimpleGrid columns={2} gap={10}>
        {projectEdges.map(({ node: projectNode }) => {
          return <ProjectCard project={projectNode} />;
        })}
      </SimpleGrid>
    </Layout>
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
