import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Box } from "@chakra-ui/layout";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

const ThemeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box position="fixed" bottom="20px" right="20px">
        {colorMode === "light" ? (
          <IconButton
            aria-label="Light Mode"
            icon={<BsMoon />}
            onClick={toggleColorMode}
          />
        ) : (
          <IconButton
            aria-label="Light Mode"
            icon={<BsSun />}
            onClick={toggleColorMode}
          />
        )}
      </Box>
    </>
  );
};

export default ThemeSwitch;
