import { Box, Heading, Image, Link } from "@chakra-ui/react";
import React from "react";
import Img from "gatsby-image";
import { Link as GatsbyLink } from "gatsby";

type ProjectCardProps = {
  project: Project;
};

type Project = {
  frontmatter: {
    title: string;
    slug: string;
    featuredImage: any;
  };
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { frontmatter } = project;
  return (
    <Link as={GatsbyLink} to={`/projects/${frontmatter.slug}`}>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Box w="100%" h="300px">
          {frontmatter.featuredImage ? (
            <Img fluid={frontmatter.featuredImage.childImageSharp.fluid} style={{ height: "100%", width: "100%", objectFit: "cover" }}/>
          ) : null}
        </Box>
        <Box p="6">
          <Heading as="h4" fontSize="md">
            {frontmatter.title}
          </Heading>
        </Box>
      </Box>
    </Link>
  );
};

export default ProjectCard;
