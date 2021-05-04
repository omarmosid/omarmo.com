import { Box } from "@chakra-ui/layout";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import { Link } from "gatsby";

type ContentProps = {
  content: any;
};

const shortcodes = { Link };

const Content: React.FC<ContentProps> = ({ content }) => {
  return (
    <>
    <Box className="content" w="100%" border="1px solid red">
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{content}</MDXRenderer>
        </MDXProvider>
      </Box>
    </>
  );
};

export default Content;
