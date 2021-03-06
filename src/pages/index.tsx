import React from "react";
import SEO from "../components/seo/seo";
import { Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import FullLayout from "../components/layout/FullLayout";

const IndexPage = () => (
  <FullLayout>
    <SEO title="Home" />
    <Stack justifyContent="center" my={[20, 14]}>
      <Heading as="h1" fontSize={["6xl", "3em", "4em"]}>
        Hi I'm{" "}
        <Text as="span" color="blue.400">
          Omar
        </Text>
        !
      </Heading>
      <Stack pb="1em">
        <Text
          fontSize={["1.6em", "2em", "2em", "2.4em"]}
          fontWeight="400"
          pb="0.6em"
        >
          A Self-taught{" "}
          <Text as="span" color="blue.400">
            Full-Stack Developer
          </Text>
          . I love everything about the web and have a keen interest in
          user-experience and web performance.
        </Text>
        {/* <Text fontSize="1.4em" pb="0.6em">
          I am great with Frontend stuff like React, GraphQL and Javasript
          (ES6).
        </Text>
        <Text fontSize="1.4em" pb="0.6em">
          I also have a decent grasp of Backend Tech like Express.js, Node.js, Typescript, Microservices architecture and
          Database Design.
        </Text>
        <Text fontSize="1.4em" pb="0.6em">
          I also find have a keen interest UX design and am good with tools like
          Figma, Adobe Photoshop, Sketch.
        </Text> */}
      </Stack>
      <Flex>
        <Button variant="solid" size="lg">
          <a href="mailto:omar.mo.sid@gmail.com">Get in touch</a>
        </Button>
      </Flex>
    </Stack>
  </FullLayout>
);

export default IndexPage;
