import React from "react";
import { Box, Container } from "@chakra-ui/layout";
import Navbar from "../reusable/navbar/Navbar";
import Footer from "../reusable/footer/Footer";
import ThemeSwitch from "../reusable/ThemeSwitch";

const FullLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <ThemeSwitch />
      <Box minH="70vh">
        <Container maxW="4xl">{children}</Container>
      </Box>
      <Footer />
    </>
  );
};

export default FullLayout;
