import React, { useState } from "react";
import { Box, Flex, Link } from "@chakra-ui/layout";
import Logo from "../../../images/logo.png";
import { Image } from "@chakra-ui/image";
import { Link as GatsbyLink } from "gatsby";
import { IconButton } from "@chakra-ui/button";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const navbg = useColorModeValue("gray.100", "gray.900");

  return (
    <>
      <Flex as="header" w="100%" justifyContent="center">
        <Flex
          as="nav"
          w="full"
          px="4"
          py="4"
          flexWrap="wrap"
          backgroundColor={navbg}
        >
          <Flex
            className="Logo"
            justifyContent="space-between"
            alignItems="center"
            width={["100%", "50%"]}
          >
            <GatsbyLink to="/">
              <Image src={Logo} alt="Omar" h={8} />
            </GatsbyLink>
            <Box display={["flex", "none"]} onClick={toggle}>
              {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </Box>
          </Flex>

          <Flex
            width={["100%", "50%"]}
            flexWrap="wrap"
            justifyContent="flex-end"
          >
            <Flex
              w={["100%", "60%"]}
              display={[isOpen ? "flex" : "none", "flex"]}
              direction={["column", "row"]}
              justifyContent={["center", "flex-end"]}
              alignItems={["center", "flex-start"]}
            >
              <Box py="2" px="4">
                <Link as={GatsbyLink} to="/now">
                  Now
                </Link>
              </Box>

              <Box py="2" px="4">
                <Link as={GatsbyLink} to="/about">
                  About
                </Link>
              </Box>

              {/* <Box py="2" px="4">
                <Link as={GatsbyLink} to="/blog">
                  Blog
                </Link>
              </Box>

              <Box py="2" px="4">
                <Link as={GatsbyLink} to="/tips">
                  Tips
                </Link>
              </Box> */}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
