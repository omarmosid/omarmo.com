import { Box, Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/layout";
import { Link } from "gatsby";
import React from "react";

type PrevNext = {
  pageContext: any;
};

const PrevNext = ({ pageContext }) => {
  return (
    <>
      <Box py={4}>
        <SimpleGrid columns={[1, 1, 2]} gap={8}>
          {pageContext.prev !== null && (
            <Stack
              as={Link}
              to={`/posts/${pageContext.prev.frontmatter.slug}`}
              padding="2em 1em 1em"
              border="2px solid"
              borderRadius="2px"
              borderColor="teal.400"
            >
              <Heading as="h4" fontSize="lg">
                {pageContext.prev.frontmatter.title}
              </Heading>
              <Text>Previous Post</Text>
            </Stack>
          )}
          {pageContext.next !== null && (
            <Stack
              as={Link}
              to={`/posts/${pageContext.next.frontmatter.slug}`}
              padding="2em 1em 1em"
              border="2px solid"
              borderRadius="2px"
              borderColor="teal.400"
              alignItems="flex-end"
            >
              <Heading as="h4" fontSize="lg" textAlign="right">
                {pageContext.next.frontmatter.title}
              </Heading>
              <Text>Next Post</Text>
            </Stack>
          )}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default PrevNext;
