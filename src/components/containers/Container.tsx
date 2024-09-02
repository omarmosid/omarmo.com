import React, { HTMLAttributes, ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <>
      <div className={`max-w-3xl w-full mx-auto px-4 ${className}`} {...props}>
        {children}
      </div>
    </>
  );
};

export { Container };
