import { Box, Heading } from "@chakra-ui/react";
import { Link } from "gatsby";
import React from "react";

type CardProps = {
  frontmatter: CardFrontmatterProps;
  to: any;
};

type CardFrontmatterProps = {
  title: string;
  featuredImage: any;
};

const Card: React.FC<CardProps> = ({ frontmatter, to }) => {
  console.log(frontmatter);
  const { title, slug }: any = frontmatter;

  return (
    <Box
      to={to}
      as={Link}
      border="1px solid #aaa"
      borderRadius="4px"
      p="2em"
      my="1em"
    >
      <Heading as="h4" fontSize="1.6em">
        {title}
      </Heading>
    </Box>
  );
};

export default Card;
