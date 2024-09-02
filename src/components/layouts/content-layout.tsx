import React, { ReactNode } from "react";
import { PageHeader } from "../header/PageHeader";
import { Container } from "../containers/Container";

type ContentLayoutProps = {
  title: string;
  children: ReactNode;
};

const ContentLayout: React.FC<ContentLayoutProps> = ({ title, children }) => {
  return (
    <>
      <PageHeader title={title} />
      <Container className="py-8">{children}</Container>
    </>
  );
};

export { ContentLayout };
