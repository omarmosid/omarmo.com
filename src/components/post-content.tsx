import React, { ReactNode } from "react";

type PostContentProps = {
  children?: ReactNode;
};

const PostContent: React.FC<PostContentProps> = ({ children }) => {
  return (
    <>
      <article className="container max-w-3xl">{children}</article>
    </>
  );
};

export { PostContent };
