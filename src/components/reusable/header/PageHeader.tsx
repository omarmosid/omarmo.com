import { Flex, Heading } from "@chakra-ui/layout";
import React from "react";

type PageHeaderProps = {
  title: string;
};

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  return (
    <>
      <Flex as="header" h="60vh" w="100%" alignItems="center">
        <Heading fontSize="6xl">{title}</Heading>
      </Flex>
    </>
  );
};

export default PageHeader;
