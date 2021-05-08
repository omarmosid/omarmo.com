import { Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import FullLayout from "../components/layout/FullLayout";
import SEO from "../components/seo/seo";

const NotFoundPage = () => {
  return (
    <>
      <SEO title="404: Not found" />
      <FullLayout>
        <Flex justifyContent="center">
          <Stack w="6xl">
            <Heading
              as="h1"
              color="#fff"
              textShadow="2px 2px 8px rgba(0, 0, 0, 0.45)"
            >
              NOT FOUND
            </Heading>
            <Text color="#fff">
              You just hit a route that doesn&#39;t exist... the sadness.
            </Text>
            <Image src="https://source.unsplash.com/random/1280x720?alone" />
          </Stack>
        </Flex>
      </FullLayout>
    </>
  );
};

export default NotFoundPage;
