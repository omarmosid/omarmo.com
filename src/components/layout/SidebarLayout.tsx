import { Box, Container, Grid, GridItem, SimpleGrid } from "@chakra-ui/layout";
import React, { ReactNode } from "react";
import Footer from "../reusable/footer/footer";
import ContentHero from "../reusable/hero/ContentHero";
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
      <Box minH="70vh">
        <Container maxW={["sm", "md", "6xl"]}>
          <Grid templateColumns={["1fr", "7fr 3fr", "7fr 3fr"]} gap={12}>
            <GridItem>{children}</GridItem>
            <GridItem>{Sidebar && <Sidebar />}</GridItem>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default SidebarLayout;
