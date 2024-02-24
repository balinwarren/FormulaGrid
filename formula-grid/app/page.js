import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <nav className="sticky top-0 w-screen">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          <a
            href="https://formulagrid.app/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <div className="relative h-8 w-64">
              <Image
                src="/fg-logos/formulagrid-white.webp"
                layout="fill"
                objectFit="contain"
                alt="Formula Grid Logo"
              />
            </div>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="mt-4 flex flex-col rounded-lg border p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse">
              <li>
                <a
                  href="https://twitter.com/formulagridapp"
                  className="block rounded px-3 py-2 text-gray-900 hover:cursor-pointer hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-red-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-red-500"
                >
                  <FontAwesomeIcon icon={faTwitter} className="h-5" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block rounded px-3 py-2 text-gray-900 hover:cursor-pointer hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-red-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-red-500"
                >
                  <FontAwesomeIcon icon={faUser} className="h-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <p className="font-display text-xl">Formula Grid #1</p>
    </main>
  );
}
