/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "../header/header";
import Footer from "../footer/footer";
import { Box, Stack } from "@chakra-ui/react";

import { GlobalStyles } from "../../utils/styles/global";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Box minHeight="100vh" p="2em 3em">
        <Stack as="main" maxWidth="6xl" width="100%" margin="0 auto">
          {children}
        </Stack>
      </Box>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
