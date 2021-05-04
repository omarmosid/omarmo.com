import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const theme = extendTheme({
  colors: {
    black: "#16161D",
    brand: {
      100: "#efada9",
      900: "#4d120f",
    },
  },
  breakpoints,
  styles: {
    global: (props) => ({
      ".content": {
        "h1, h2, h3, h4, h5, h6": {
          fontWeight: "bold",
          mb: "6",
        },
        h1: {
          fontSize: "4xl"
        },
        h2: {
          fontSize: "3xl"
        },
        h3: {
          fontSize: "2xl"
        },
        h4: {
          fontSize: "xl"
        },
        h5: {
          fontSize: "lg"
        },
        h6: {
          fontSize: "md"
        },
        pre: {
          mb: 6,
          code: {
            fontSize: ["sm", "sm"]
          }
        },
        blockquote: {
          mb: 6,
          background: props.colorMode === "light" ? "green.600" : "green.400",
          borderWidth: "2px",
          borderColor: props.colorMode === "light" ? "green.300" : "green.700",
          borderRadius: "md",
          p: {
            p: 4,
            color: props.colorMode === "light" ? "gray.200" : "gray.700",
          }
        },
        "p, a, li, span": {
          fontSize: "xl",
          lineHeight: "1.6",
          mb: "4",
          color: props.colorMode === "light" ? "gray.600" : "gray.400",
        },
        a: {
          color: props.colorMode === "light" ? "blue.600" : "blue.400",
          "&:hover": {
            textDecoration: "underline"
          }
        },
        "ul, ol": {
          ml: "1rem",
          pl: "1rem",
          listStylePosition: "inside"
        }
      }
    })
  }
});

export default theme;
