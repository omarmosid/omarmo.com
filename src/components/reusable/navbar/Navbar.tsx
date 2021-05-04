import { Box, Flex, Grid, GridItem } from "@chakra-ui/layout";
import { useColorMode, useTheme } from "@chakra-ui/system";
import React from "react";
import { useDisclosure } from "../../../hooks/useDisclosure";
import NavbarLinks from "./NavbarLinks";
import NavbarLogo from "./NavbarLogo";
import NavbarMenuToggle from "./NavbarMenuToggle";

const Navbar = () => {
  const { isOpen, toggle } = useDisclosure();

  const { colorMode } = useColorMode();

  return (
    <>
      <Grid
        as="nav"
        py={4}
        px={12}
        position="sticky"
        top="0px"
        zIndex="sticky"
        background={colorMode === "light" ? "#fff" : "gray.800"}
        templateColumns={["1fr", "2fr 6fr", "2fr 8fr"]}
        gap={4}
      >
        <GridItem>
          <NavbarLogo />
        </GridItem>

        {/* <GridItem>
          <NavbarMenuToggle isOpen={isOpen} toggle={toggle} />
        </GridItem> */}

        <GridItem>
          <NavbarLinks isOpen={isOpen} />
        </GridItem>
      </Grid>
    </>
  );
};

export default Navbar;
