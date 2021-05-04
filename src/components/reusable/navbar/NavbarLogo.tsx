import { Image } from "@chakra-ui/image";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Link } from "gatsby";
import React from "react";
import Logo from "../../../images/logo.png"

const NavbarLogo = () => {
  return (
    <>
      <Flex alignItems={["center", "flex-start"]}>
        <Link to="/">
          <Image src={Logo} height="50px" />
        </Link>
      </Flex>
    </>
  );
};

export default NavbarLogo;
