import React, { ReactNode } from "react";
import { PageHeader } from "../header/PageHeader";

type RegularLayoutProps = {
  Header?: ReactNode;
  children: ReactNode;
};

const RegularLayout: React.FC<RegularLayoutProps> = ({ Header, children }) => {
  return (
    <>
      <>
        {Header}
        <div className="mx-auto max-w-3xl py-8 px-2 prose dark:prose-invert">
          {children}
        </div>
      </>
    </>
  );
};

export { RegularLayout };
