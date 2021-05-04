import { Box } from "@chakra-ui/layout";
import React from "react";
import { MdClose, MdMenu } from "react-icons/md";

type NavbarMenuToggleProps = {
  isOpen: boolean;
  toggle: () => void;
};

const NavbarMenuToggle: React.FC<NavbarMenuToggleProps> = ({ isOpen, toggle }) => {
  return (
    <>
      <Box display={{ base: "block", md: "none" }} onClick={toggle}>
        {isOpen ? <MdClose /> : <MdMenu />}
      </Box>
    </>
  );
};

export default NavbarMenuToggle;
