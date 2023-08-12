import React, { useRef } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Menu } from "lucide-react";
import words from "../images/logo-just-words.png";

const LinkList = () => {
  return (
    <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
      <li>
        <a
          href="/think-write/"
          className="block py-2 pl-3 pr-4 text-gray-900 font-thin rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="/think-write/projects"
          className="block py-2 pl-3 pr-4 text-gray-900 font-thin rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          Projects
        </a>
      </li>
      <li>
        <a
          href="/think-write/about"
          className="block py-2 pl-3 pr-4 text-gray-900 font-thin rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          About
        </a>
      </li>
    </ul>
  );
};

const Dropdown = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button aria-label="Dropdown menu for navigation">
          <Menu />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content>
          <div className="mt-5 mr-4 rounded-xl bg-sky-700/75">
            <DropdownMenu.Item>
              <a
                href="/think-write/"
                className="block pt-2 pb-1 pl-3 pr-4 text-gray-900 font-thin md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Home
              </a>
            </DropdownMenu.Item>
            <DropdownMenu.Separator className="h-px bg-gray-900 my-1 mx-2 opacity-50" />
            <DropdownMenu.Item>
              <a
                href="/think-write/projects"
                className="block py-1 pl-3 pr-4 text-gray-900 font-thin hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Projects
              </a>
            </DropdownMenu.Item>
            <DropdownMenu.Separator className="h-px bg-gray-900 my-1 mx-2 opacity-50" />
            <DropdownMenu.Item>
              <a
                href={"/think-write/about"}
                className="block pt-1 pb-2 pl-3 pr-4 text-gray-900 font-thin hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About
              </a>
            </DropdownMenu.Item>
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default function Navbar() {
  const width = useRef(window.innerWidth);

  return (
    <header className="z-10  self-center mb-5 md:mb-10 md:h-20 bg-neutral-900 sticky top-0 opacity-95 flex flex-wrap items-center justify-between p-4 border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
      <img src={words} alt="Think-Write" className="h-4 md: h-5 md:px-7" />
      <div className="flex items-center">
        <nav
          className="z-20 w-full contents md:block md:w-auto px-7"
          id="navbar-solid-bg"
        >
          {width.current < 767 && <Dropdown />}
          {width.current > 767 && <LinkList />}
        </nav>
      </div>
    </header>
  );
}
