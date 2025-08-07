import React from "react";

const NavPart2 = () => {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-center justify-between w-full">
      {/* Search button */}
      <button className="inline-flex items-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border px-4 py-2 group relative h-9 w-full sm:w-auto md:w-48 lg:w-64 justify-start rounded-full bg-background text-sm font-normal text-muted-foreground shadow-none">
        <span className="hidden lg:inline-flex">Search documentation...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.4rem] hidden h-5 select-none items-center gap-1 rounded-full border bg-white/10 px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>S.K
        </kbd>
      </button>

      {/* GitHub icon with link */}
      <a
        href="https://github.com/01sapankumar"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:text-gray-700"
        aria-label="GitHub"
      >
        <svg
          className="w-5 h-5 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.8 10.9.6.1.8-.3.8-.6v-2.2c-3.1.7-3.8-1.5-3.8-1.5-.6-1.4-1.4-1.8-1.4-1.8-1.2-.8.1-.8.1-.8 1.3.1 2 1.3 2 1.3 1.2 2 3.2 1.4 3.9 1.1.1-.9.5-1.4.8-1.7-2.5-.3-5.1-1.2-5.1-5.3 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.3.1-2.7 0 0 .9-.3 3 .9.8-.2 1.6-.3 2.4-.3s1.6.1 2.4.3c2.1-1.2 3-.9 3-.9.6 1.4.2 2.4.1 2.7.7.8 1.1 1.8 1.1 3 0 4.2-2.6 5-5.1 5.3.5.4.9 1.1.9 2.2v3.3c0 .3.2.7.8.6 4.5-1.5 7.8-5.8 7.8-10.9C23.5 5.65 18.35.5 12 .5z" />
        </svg>
      </a>

      {/* Instagram icon with link */}
      <a
        href="https://instagram.com/yourInstaHandle"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-600 hover:text-pink-500 flex items-center gap-1"
        aria-label="Instagram"
      >
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5ZM4.5 7.75a3.25 3.25 0 0 1 3.25-3.25h8.5a3.25 3.25 0 0 1 3.25 3.25v8.5a3.25 3.25 0 0 1-3.25 3.25h-8.5A3.25 3.25 0 0 1 4.5 16.25v-8.5ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm5.25-.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
        </svg>
        <span className="text-sm">@yourInstaHandle</span>
      </a>
    </div>
  );
};

export default NavPart2;
