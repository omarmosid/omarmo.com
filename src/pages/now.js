import { Heading, Link, List, ListItem, Text } from "@chakra-ui/react";
import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";

const Now = ({ data }) => {
  return (
    <>
      <SEO title="Now" description="This page shows what I have been doing." />
      <Layout>
        <Heading as="h1">Now</Heading>
        <Heading as="h2" pb="2em" fontSize="1.2em">
          This page shows what I have been doing.
        </Heading>
        <List as="ul">
          <ListItem>
            <span role="img" aria-label="Open book Emoji">
              📖
            </span>{" "}
            Reading{" "}
            <Link
              href="https://www.amazon.in/Getting-Things-Done-Stress-free-Productivity-ebook/dp/B00SHL3V8M"
              isExternal
              color="blue.400"
            >
              Getting things done
            </Link>{" "}
            by David Allen
          </ListItem>

          <ListItem>
            <span role="img" aria-label="Open book Emoji">
              📖
            </span>{" "}
            Reading{" "}
            <Link
              href="https://www.amazon.in/dp/B002TXZQT6/"
              isExternal
              color="blue.400"
            >
              The Eagle's Prophecy
            </Link>{" "}
            by Simon Scarrow
          </ListItem>

          <ListItem>
            <span role="img" aria-label="Headphone Emoji">
              🎧
            </span>{" "}
            Listening to{" "}
            <Link
              href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS83eTFDYkFiTg"
              isExternal
              color="blue.400"
            >
              Maintainable
            </Link>
          </ListItem>

          <ListItem>
            <span role="img" aria-label="Videogame controller Emoji">
              🎮
            </span>{" "}
            Playing{" "}
            <Link
              href="https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/"
              isExternal
              color="blue.400"
            >
              Red Dead Redemption
            </Link>
          </ListItem>

          <Text mt="2em">Last updated on {data.siteBuildMetadata.buildTime}</Text>
        </List>
      </Layout>
    </>
  );
};

export const query = graphql`
  query lastUpdated {
    siteBuildMetadata {
      buildTime(formatString: "DD MMM, YYYY")
    }
  }
`;

export default Now;
