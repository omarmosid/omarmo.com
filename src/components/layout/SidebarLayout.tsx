import {
  Box,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
} from "@chakra-ui/layout";
import React, { ReactNode } from "react";
import Footer from "../reusable/footer/Footer";
import Navbar from "../reusable/navbar/Navbar";
import ThemeSwitch from "../reusable/ThemeSwitch";

type SidebarLayoutProps = {
  Hero?: ReactNode;
  Sidebar?: ReactNode;
};

const SidebarLayout = ({ Hero, Sidebar, children }) => {
  return (
    <>
      <Navbar />
      <ThemeSwitch />
      {Hero && <Hero />}
      <Center px={[6, 12]} py={[2, 8]}>
        <SimpleGrid
          columns={[1, 1, 2]}
          gap={8}
          gridTemplateColumns={["minmax(0, 1fr)", "minmax(0, 1fr)", "3fr 1fr"]}
        >
          <Box>{children}</Box>
          <Box>{Sidebar && <Sidebar />}</Box>
        </SimpleGrid>
      </Center>
      <Footer />
    </>
  );
};

export default SidebarLayout;
