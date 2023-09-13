const Nav = () => {
  return (
    <nav className="flex p-3 h-16 md:h-12 w-full md:w-1/2">
      <ul className="flex flex-row justify-around w-full items-center text-2xl md:text-3xl">
        <li>
          <a className="hover:text-sky-600" href="/about">
            About Me
          </a>
        </li>
        <li>
          <a className="hover:text-sky-600" href="/projects">
            Projects
          </a>
        </li>
        <li className="md:hidden">
          <a
            href="https://www.linkedin.com/in/kevingael/"
            target="_blank"
            className="hover:text-sky-600"
          >
            Connect
          </a>
        </li>
        <li className="hidden md:block">
          <a
            href="https://www.linkedin.com/in/kevingael/"
            target="_blank"
            className="font-bold rounded-full shadow bg-white hover:text-white hover:border-sky-800 hover:bg-sky-600 text-sky-600 border border-sky-600 cursor-pointer flex justify-center items-center w-32 h-10 lg:w-52 lg:h-12"
          >
            <p>Connect</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="animate-bounce icon icon-tabler icon-tabler-user-plus"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
              <path d="M16 19h6"></path>
              <path d="M19 16v6"></path>
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
