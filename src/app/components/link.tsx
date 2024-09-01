import React, { AnchorHTMLAttributes } from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";

type LinkProps = NextLinkProps & AnchorHTMLAttributes<HTMLAnchorElement>;

const Link: React.FC<LinkProps> = ({ href, ...props }) => {
  const isInternalLink = href && href.startsWith("/");
  const isAnchorLink = href && href.startsWith("#");

  if (isInternalLink) {
    return <NextLink href={href} {...props} prefetch={false} />;
  }

  if (isAnchorLink) {
    return <a href={href} {...props} />;
  }

  return (
    <a
      className="underline text-blue-500"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      {...props}
    />
  );
};

export { Link };
