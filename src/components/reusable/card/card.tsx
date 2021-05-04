import { Box, Heading } from "@chakra-ui/react";
import { Link } from "gatsby";
import React from "react";

type CardProps = {
  title: string;
  slug: string;
};

const Card: React.FC<CardProps> = ({ title, slug }) => {
  return (
    <Box to={slug} as={Link} border="1px solid #aaa" borderRadius="4px" p="2em" my="1em">
      <Heading as="h4" fontSize="1.6em">{title}</Heading>
    </Box>
  );
};

export default Card;
