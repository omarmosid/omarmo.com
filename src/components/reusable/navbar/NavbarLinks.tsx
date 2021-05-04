import { Box, Flex, List } from "@chakra-ui/layout";
import React from "react";
import NavbarItem from "./NavbarItem";

const NavbarLinks = ({ isOpen }) => {
  return (
    <>
      <Flex h="100%" justify="flex-end" align="center">
        <List minW="sm" display="flex" justifyContent="flex-end" flexWrap="wrap">
          <NavbarItem to="/now">Now</NavbarItem>
          {/* <NavbarItem to="/projects">Work</NavbarItem>
          <NavbarItem to="/blog">Blog</NavbarItem>
          <NavbarItem to="/tips">Tips</NavbarItem>
          <NavbarItem to="/contact">Contact</NavbarItem> */}
        </List>
      </Flex>
    </>
  );
};

export default NavbarLinks;
