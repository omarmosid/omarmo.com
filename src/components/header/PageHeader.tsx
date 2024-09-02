import React from "react";

type PageHeaderProps = {
  title: string;
};

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  return (
    <>
      <section className="h-[20vh] w-full border-b border-zinc-300 dark:border-zinc-700 mb-8 flex items-center">
        <div className="prose dark:prose-invert mx-auto w-full max-w-3xl p-4">
          <h1 className="m-0 align-middle lg:text-6xl">{title}</h1>
        </div>
      </section>
    </>
  );
};

export { PageHeader };
