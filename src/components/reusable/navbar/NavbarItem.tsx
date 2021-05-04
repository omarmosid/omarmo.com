import { ListItem } from "@chakra-ui/layout";
import { Link } from "gatsby";
import React from "react";

type NavbarItemProps = {
  to: string;
  isLast?: boolean;
  isExternal?: boolean;
};

const NavbarItem: React.FC<NavbarItemProps> = ({
  to = "/",
  isLast,
  children,
}) => {
  return (
    <>
      <ListItem>
        <Link to={to}>{children}</Link>
      </ListItem>
    </>
  );
};

export default NavbarItem;
