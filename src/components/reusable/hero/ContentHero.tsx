import { Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import Tags from "../tags/Tags";
import { GatsbyImage } from "gatsby-plugin-image";

type ContentHeroProps = {
  meta: any;
};

const ContentHero: React.FC<ContentHeroProps> = ({ meta }) => {
  console.log(meta);
  return (
    <Stack as="header" w="100%" position="relative" alignItems="center">
      {meta.featuredImage && (
        <GatsbyImage
          image={meta.featuredImage.childImageSharp.gatsbyImageData}
          alt="Cover"
          style={{ width: "100%", height: "100vh" }}
        />
      )}
      <Container maxW="7xl" pt={10} pb={8}>
        <Heading fontSize={["4xl", "6xl"]} textAlign={["left"]} pb={10}>
          {meta.title}
        </Heading>
        <Box w="100%">
          {meta.tags && (
            <Text>
              <Tags tags={meta.tags} />
            </Text>
          )}
          <Text>Posted on {meta.createdAt}</Text>
        </Box>
      </Container>
    </Stack>
  );
};

export default ContentHero;
