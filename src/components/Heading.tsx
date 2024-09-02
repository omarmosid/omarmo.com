import React from "react";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface HeadingProps {
  as?: HeadingLevel;
  children: React.ReactNode;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({
  as = "h1",
  children,
  className = "",
}) => {
  const Tag = as;

  return <Tag className={`prose-${Tag} ${className}`}>{children}</Tag>;
};

export { Heading };
