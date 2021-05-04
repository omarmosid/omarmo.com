import { Box, Flex, Text } from "@chakra-ui/layout";
import { Link } from "gatsby";
import React from "react";

const NavbarLogo = () => {
  return (
    <>
      <Flex alignItems={["center", "flex-start"]}>
        <Text fontSize="4xl" fontWeight="bold" textAlign={["left", "center"]}>
          <Link to="/">Omar</Link>
        </Text>
      </Flex>
    </>
  );
};

export default NavbarLogo;
