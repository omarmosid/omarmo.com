import React from "react";
import { Badge } from "@chakra-ui/layout";

type TagsProps = {
  tags: Array<string>;
};

const Tags: React.FC<TagsProps> = ({ tags }) => {
  return (
    <>
      {tags.map((tag, i) => {
        return <Badge key={i} mr={2}>{tag}</Badge>;
      })}
    </>
  );
};

export default Tags;
