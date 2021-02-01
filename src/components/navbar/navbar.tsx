import React from "react";
import {
  Flex,
  Heading,
  IconButton,
  List,
  ListItem,
  Switch,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "gatsby";
import { BsSun, BsMoon } from "react-icons/bs";

const Navbar: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex as="nav" mb="2em" p="1em 2em" flexWrap="wrap">
      <Flex
        flex={["100%", "100%", "20%", "20%"]}
        justifyContent={["center", "center", "left", "left"]}
        mb={["1em", "0em", "0em", "0em"]}
      >
        <Heading as="h1">
          <Link to="/">Omar</Link>
        </Heading>
      </Flex>
      <List
        as="ol"
        display="flex"
        justifyContent={["center", "flex-start", "flex-end", "flex-end"]}
        alignItems="center"
        flex="70%"
      >
        <ListItem mr="2em">
          <Link to="/">Home</Link>
        </ListItem>
        <ListItem mr="2em">
          <Link to="/now">Now</Link>
        </ListItem>
        <ListItem mr="2em">
          <Link to="/blog">Blog</Link>
        </ListItem>
        <ListItem>
          <Link to="/tips">Tips</Link>
        </ListItem>
      </List>
      <Flex
        justifyContent="flex-end"
        alignItems="center"
        pl="2em"
        position={["fixed", "static", "static", "static"]}
        top="20px"
        right="20px"
      >
        {colorMode === "dark" ? (
          <IconButton
            aria-label="Change Light/Dark"
            onClick={toggleColorMode}
            icon={<BsSun />}
          />
        ) : (
          <IconButton
            aria-label="Change Light/Dark"
            onClick={toggleColorMode}
            icon={<BsMoon />}
          />
        )}
      </Flex>
    </Flex>
  );
};

export default Navbar;
