import React, { useRef } from "react";
import { v4 as uuid } from "uuid";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Menu } from "lucide-react";

const LinkList = ({ writing }) => {
  return (
    <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
      <li>
        <a
          href="/think-write/"
          className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
          aria-current="page"
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
            Start a Project
          </a>
        )}
      </li>
    </ul>
  );
};

const Dropdown = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button>
          <Menu />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content>
          <DropdownMenu.Label />
          <DropdownMenu.Item />

          <DropdownMenu.Group>
            <DropdownMenu.Item />
          </DropdownMenu.Group>

          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger />
            <DropdownMenu.Portal>
              <DropdownMenu.SubContent />
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>

          <DropdownMenu.Separator />
          <DropdownMenu.Arrow />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default function Navbar({ writing }) {
  const width = useRef(window.innerWidth);
  console.log(width);
  return (
    <div className="bg-neutral-900 sticky top-0">
      <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/think-write/" className="flex items-center">
            <span className="text-sm md:text-3xl px-3 md:px-7 font-semibold whitespace-nowrap dark:text-white">
              Think-Write
            </span>
          </a>
          <div
            className="w-full contents md:block md:w-auto px-7"
            id="navbar-solid-bg"
          >
            {width.current < 767 && <Dropdown />}
            {width.current > 767 && <LinkList writing={writing} />}
          </div>
        </div>
      </nav>
    </div>
  );
}
