import React, { useRef } from "react";
import { v4 as uuid } from "uuid";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Menu } from "lucide-react";
import words from "../images/logo-just-words.png";

const LinkList = ({ writing }) => {
  return (
    <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
      <li>
        <a
          href="/think-write/"
          className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="/think-write/projects"
          className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          Projects
        </a>
      </li>
      <li>
        {!writing && (
          <a
            href={`/think-write/edit/${uuid()}`}
            className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            New Project
          </a>
        )}
      </li>
      <li>
        <a
          href="/think-write/about"
          className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          About
        </a>
      </li>
    </ul>
  );
};

const Dropdown = ({ writing }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button>
          <Menu />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content>
          <div className="rounded bg-sky-700/75">
            <DropdownMenu.Item>
              <a
                href="/think-write/"
                className="block pt-2 pb-1 pl-3 pr-4 text-gray-900 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Home
              </a>
            </DropdownMenu.Item>
            <DropdownMenu.Separator className="h-px bg-gray-900 my-1 mx-2 opacity-50" />
            <DropdownMenu.Item>
              <a
                href="/think-write/projects"
                className="block py-1 pl-3 pr-4 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Projects
              </a>
            </DropdownMenu.Item>
            <DropdownMenu.Separator className="h-px bg-gray-900 my-1 mx-2 opacity-50" />
            <DropdownMenu.Item>
              {!writing && (
                <a
                  href={`/think-write/edit/${uuid()}`}
                  className="block py-1 pl-3 pr-4 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  New Project
                </a>
              )}
            </DropdownMenu.Item>
            <DropdownMenu.Separator className="h-px bg-gray-900 my-1 mx-2 opacity-50" />
            <DropdownMenu.Item>
              <a
                href={"/think-write/about"}
                className="block pt-1 pb-2 pl-3 pr-4 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
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

export default function Navbar({ writing }) {
  const width = useRef(window.innerWidth);

  return (
    <div className="bg-neutral-900 sticky top-0 opacity-75">
      <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/think-write/" className="flex items-center">
            <img
              src={words}
              className="h-3
        "
            />
          </a>
          <div
            className="w-full contents md:block md:w-auto px-7"
            id="navbar-solid-bg"
          >
            {width.current < 767 && <Dropdown writing={writing} />}
            {width.current > 767 && <LinkList writing={writing} />}
          </div>
        </div>
      </nav>
    </div>
  );
}
