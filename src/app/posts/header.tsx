"use client";

import React from "react";
import Image from "next/image";
import { Post } from "../../../.velite";
import dayjs from "dayjs";

type BlogHeaderProps = { post: Post };

const BlogHeader: React.FC<BlogHeaderProps> = ({ post }) => {
  const { permalink, title, date, metadata, cover } = post;
  return (
    <header className="prose prose-zinc w-full relative flex justify-center flex-wrap max-w-none">
      <div className="container max-w-3xl">
        {/* Title */}
        <div className="pt-10 bg-white">
          <h1 className="text-5xl font-bold mb-6">{title}</h1>
        </div>

        {/* Metadata row */}
        <div className="flex flex-start gap-2">
          <span>{`Published on ${dayjs(new Date(date)).format(
            "MMMM D, YYYY"
          )}`}</span>
          <span>●</span>
          <span>{`${metadata.readingTime} min read`}</span>
        </div>
      </div>

      {/* Full-width cover image */}
      <div className="w-full h-[75vh] overflow-hidden relative">
        <Image
          src={cover?.src || "/default_hero.jpg"}
          alt={title}
          className="absolute inset-0 object-cover"
          fill
        />
      </div>
    </header>
  );
};

export { BlogHeader };
