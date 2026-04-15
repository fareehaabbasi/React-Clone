// Navbar.jsx
import React from "react";
import { FaRegMoon } from "react-icons/fa";
import { MdTranslate } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3 ">
        {/* Left group: version + search */}
        <div className="flex flex-wrap items-center gap-1 sm:gap-3">
          <div className="flex items-center gap-1">
            <svg
              width="100%"
              height="100%"
              viewBox="-10.5 -9.45 21 18.9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="text-sm me-0 w-10 h-10 text-brand dark:text-brand-dark flex origin-center transition-all ease-in-out"
            >
              <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
              <g stroke="currentColor" stroke-width="1" fill="none">
                <ellipse rx="10" ry="4.5"></ellipse>
                <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
                <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
              </g>
            </svg>
            {/* Version badge */}
            <span className="px-1 py-1 text-sm font-medium">v19.2</span>
          </div>

          {/* Search button (non-interactive, pure style) */}
          <div className="inline-flex cursor-default items-center justify-between gap-2 rounded-full border border-gray-200 bg-gray-50 px-5 py-2 text-sm font-medium text-gray-700 w-72 min-w-[580px]">
            {/* Left group: icon + "Search" text */}
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="h-4 w-4 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <span className="text-gray-700">Search</span>
            </div>

            {/* Right group: Ctrl + K shortcut */}
            <div className="flex items-center gap-0.5 text-xs text-gray-500">
              <kbd className="rounded border border-gray-300 bg-white px-1.5 py-0.5 font-mono text-[0.7rem] font-medium shadow-sm">
                Ctrl
              </kbd>
              <span>+</span>
              <kbd className="rounded border border-gray-300 bg-white px-1.5 py-0.5 font-mono text-[0.7rem] font-medium shadow-sm">
                K
              </kbd>
            </div>
          </div>
        </div>

        {/* Right group: navigation links */}
        <nav className="flex flex-wrap items-center gap-10">
          <a
            href="#"
            className="border-b-2 border-transparent text-sm font-medium text-gray-800 transition-none hover:border-blue-500 hover:text-blue-600"
          >
            Learn
          </a>
          <a
            href="#"
            className="border-b-2 border-transparent text-sm` font-medium text-gray-800 transition-none hover:border-blue-500 hover:text-blue-600"
          >
            Reference
          </a>
          <a
            href="#"
            className="border-b-2 border-transparent text-sm font-medium text-gray-800 transition-none hover:border-blue-500 hover:text-blue-600"
          >
            Community
          </a>
          <a
            href="#"
            className="border-b-2 border-transparent text-sm font-medium text-gray-800 transition-none hover:border-blue-500 hover:text-blue-600"
          >
            Blog
          </a>
          <a
            href="#"
            className="border-b-2 border-transparent text-sm font-medium text-gray-800 transition-none hover:border-blue-500 hover:text-blue-600"
          >
            <FaRegMoon className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="border-b-2 border-transparent text-sm font-medium text-gray-800 transition-none hover:border-blue-500 hover:text-blue-600"
          >
            <MdTranslate className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="border-b-2 border-transparent text-sm font-medium text-gray-800 transition-none hover:border-blue-500 hover:text-blue-600"
          >
            <FaGithub className="h-5 w-5" />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
