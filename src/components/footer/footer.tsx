import { Flex, Text } from "@chakra-ui/core";
import React from "react";

const Footer: React.FC = () => {
  return (
    <Flex as="footer" justifyContent="center">
      <Flex w="6xl" p="2em 1em" justifyContent="center">
        <Text color="gray.400" fontSize="0.8em" textAlign="center">
        All Rights Reserved | © {new Date().getFullYear()} | Made by Omar with <span>❤️</span> and <span>☕</span>
        </Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
