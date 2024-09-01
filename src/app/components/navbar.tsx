"use client";

import { Link } from "./link";
import Logo from "./logo";

export const URLS = {
  HOME: "/",
  POSTS: "/posts",
  PROJECTS: "/projects",
  ABOUT: "/about",
};

export const headerNavLinks = [
  { href: URLS.HOME, title: "Home" },
  { href: URLS.POSTS, title: "Posts" },
  { href: URLS.PROJECTS, title: "Projects" },
  { href: URLS.ABOUT, title: "About" },
];

const Navbar = () => {
  return (
    <header className="flex items-center justify-between px-4 py-4 border-b-2">
      <div>
        <Link href={URLS.HOME}>
          <div className="flex items-center justify-between hover:text-primary-500">
            <Logo />
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="hidden font-medium hover:text-primary-500 sm:block"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </header>
  );
};

export { Navbar };
