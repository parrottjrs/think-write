import React, { useRef } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Menu, Linkedin, Github, Mail } from "lucide-react";
import words from "../images/logo-just-words.png";
import { STYLES } from "../utils/constants";

const LinkList = () => {
  return (
    <ul className="hidden md:flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700 ">
      <li>
        <a href="#/" className={STYLES.NAV_ANCHOR}>
          Home
        </a>
      </li>
      <li>
        <a href="#/projects" className={STYLES.NAV_ANCHOR}>
          Projects
        </a>
      </li>
      <li>
        <a href="#/about" className={STYLES.NAV_ANCHOR}>
          About
        </a>
      </li>
      <li>
        <a href="https://ca.linkedin.com/in/parrottjrs">
          <Linkedin className={STYLES.NAV_ANCHOR} strokeWidth={1} />
        </a>
      </li>
      <li>
        <a href="https://github.com/parrottjrs">
          <Github className={STYLES.NAV_ANCHOR} strokeWidth={1} />
        </a>
      </li>
      <li>
        <a href="mailto:parrottjrs@gmail.com">
          <Mail className={STYLES.NAV_ANCHOR} strokeWidth={1} />
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
          <Menu
            className="inline-block md:hidden text-slate-300"
            strokeWidth={1}
          />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content>
          <div className="w-28 mt-5 mr-4 rounded-xl bg-sky-700/95">
            <DropdownMenu.Item>
              <a href="#/" className={STYLES.DROPDOWN_NAV_ANCHOR}>
                Home
              </a>
            </DropdownMenu.Item>
            <DropdownMenu.Separator className={STYLES.DROPDOWN_NAV_SPACER} />
            <DropdownMenu.Item>
              <a href="#/projects" className={STYLES.DROPDOWN_NAV_ANCHOR}>
                Projects
              </a>
            </DropdownMenu.Item>
            <DropdownMenu.Separator className={STYLES.DROPDOWN_NAV_SPACER} />
            <DropdownMenu.Item>
              <a href="#/about" className={STYLES.DROPDOWN_NAV_ANCHOR}>
                About
              </a>
            </DropdownMenu.Item>
            <DropdownMenu.Separator className={STYLES.DROPDOWN_NAV_SPACER} />
            <div className="flex flex-row justify-left pt-1 pb-2 pl-3">
              <DropdownMenu.Item>
                <a href="https://ca.linkedin.com/in/parrottjrs">
                  <Linkedin
                    className={STYLES.DROPDOWN_NAV_SOCIALS}
                    strokeWidth={1}
                  />
                </a>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <a href="https://github.com/parrottjrs">
                  <Github
                    className={STYLES.DROPDOWN_NAV_SOCIALS}
                    strokeWidth={1}
                  />
                </a>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <a href="mailto:parrottjrs@gmail.com">
                  <Mail
                    className={STYLES.DROPDOWN_NAV_SOCIALS}
                    strokeWidth={1}
                  />
                </a>
              </DropdownMenu.Item>
            </div>
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default function Navbar() {
  const width = useRef(window.innerWidth);

  return (
    <header className="z-10  self-center mb-5 md:mb-10 md:h-20 bg-gray-800/95 sticky top-0 opacity-95 flex flex-wrap items-center justify-between p-4 border-gray-200 bg-gray-50 dark:bg-gray-800/95 dark:border-gray-700">
      <img src={words} alt="Think-Write" className="h-6 md:h-12 md:px-7" />
      <div className="flex items-center">
        <nav
          className="z-20 w-full contents md:block md:w-auto px-7"
          id="navbar-solid-bg"
        >
          <Dropdown />
          <LinkList />
        </nav>
      </div>
    </header>
  );
}
