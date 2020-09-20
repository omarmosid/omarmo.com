import { Heading, Link, List, ListItem, Text } from "@chakra-ui/core";
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
              href="https://www.amazon.in/Eagles-Prey-Empire-Cato-Macro-ebook/dp/B002TZ3D4E"
              isExternal
              color="blue.400"
            >
              The Eagle's Prey
            </Link>{" "}
            by Simon Scarrow
          </ListItem>

          <ListItem>
            <span role="img" aria-label="Headphone Emoji">
              🎧
            </span>{" "}
            Listening to{" "}
            <Link
              href="https://podcasts.google.com/feed/aHR0cHM6Ly9qYWtlaHVtcGhyZXloaWdocGVyZm9ybWFuY2UubGlic3luLmNvbS9yc3M"
              isExternal
              color="blue.400"
            >
              High Performance Podcast
            </Link>
          </ListItem>

          <ListItem>
            <span role="img" aria-label="Videogame controller Emoji">
              🎮
            </span>{" "}
            Playing{" "}
            <Link
              href="https://store.steampowered.com/app/356190/Middleearth_Shadow_of_War/"
              isExternal
              color="blue.400"
            >
              Shadow of War
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
