import { Heading, Text } from "@chakra-ui/react";
import React from "react";
import FullLayout from "../components/layout/FullLayout";
import SEO from "../components/seo/seo";

const Contact = () => {
  return (
    <FullLayout>
      <SEO title="Contact" />
      <Heading as="h1">Contact</Heading>
      <Text>Coming soon...</Text>
      <a href="mailto:omar.mo.sid@gmail.com">Get in touch</a>
    </FullLayout>
  );
};

export default Contact;
