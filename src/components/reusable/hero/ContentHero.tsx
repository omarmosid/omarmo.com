import { Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import Img from "gatsby-image";
import Tags from "../tags/Tags";

type ContentHeroProps = {
  meta: any;
};

const ContentHero: React.FC<ContentHeroProps> = ({ meta }) => {
  console.log(meta);
  return (
    <Stack as="header" w="100%" position="relative" alignItems="center">
      {meta.featuredImage && (
        <Img
          fluid={meta.featuredImage.childImageSharp.fluid}
          style={{ width: "100%", height: "100vh", objectFit: "cover" }}
        />
      )}
      <Container maxW="6xl" pt={10} pb={8}>
        <Heading fontSize={["4xl", "6xl"]} pb={6}>
          {meta.title}
        </Heading>
        <Box w="100%">
          <Text>Posted on {meta.createdAt}</Text>
          {meta.tags && (
            <Text>
              Filed in <Tags tags={meta.tags} />
            </Text>
          )}
        </Box>
      </Container>
    </Stack>
  );
};

export default ContentHero;
