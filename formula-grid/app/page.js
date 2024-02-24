import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

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

          <div className="block w-auto">
            <ul className="flex h-auto flex-row p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse">
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
                  <FontAwesomeIcon icon={faCircleQuestion} className="h-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <p className="font-display text-xl font-semibold italic">
        Formula Grid #1
      </p>

      <div className="flex flex-col justify-center">
        <div className="flex flex-row justify-center">
          <div className="size-24 sm:size-36 md:size-48"></div>
          <div className="size-24 sm:size-36 md:size-48"></div>
          <div className="size-24 sm:size-36 md:size-48"></div>
          <div className="size-24 sm:size-36 md:size-48"></div>
          <div className="hidden sm:block sm:size-36 md:size-48"></div>
        </div>

        <div className="flex items-center justify-center">
          <div className="grid grid-rows-3">
            <div className="size-24 sm:size-36 md:size-48"></div>
            <div className="size-24 sm:size-36 md:size-48"></div>
            <div className="size-24 sm:size-36 md:size-48"></div>
          </div>

          <div className="grid grid-cols-3 grid-rows-3 overflow-hidden rounded-xl border border-white hover:cursor-pointer dark:border-black">
            <div className="bg-grid-light hover:bg-grid-light-hover dark:bg-grid-dark dark:hover:bg-grid-dark-hover size-24 overflow-hidden border-b border-r border-white sm:size-36 md:size-48 dark:border-black"></div>
            <div className="bg-grid-light hover:bg-grid-light-hover dark:bg-grid-dark dark:hover:bg-grid-dark-hover size-24 overflow-hidden border-b border-r border-white sm:size-36 md:size-48 dark:border-black"></div>
            <div className="bg-grid-light hover:bg-grid-light-hover dark:bg-grid-dark dark:hover:bg-grid-dark-hover size-24 overflow-hidden border-b border-white sm:size-36 md:size-48 dark:border-black"></div>
            <div className="bg-grid-light hover:bg-grid-light-hover dark:bg-grid-dark dark:hover:bg-grid-dark-hover size-24 overflow-hidden border-b border-r border-white sm:size-36 md:size-48 dark:border-black"></div>
            <div className="bg-grid-light hover:bg-grid-light-hover dark:bg-grid-dark dark:hover:bg-grid-dark-hover size-24 overflow-hidden border-b border-r border-white sm:size-36 md:size-48 dark:border-black"></div>
            <div className="bg-grid-light hover:bg-grid-light-hover dark:bg-grid-dark dark:hover:bg-grid-dark-hover size-24 overflow-hidden border-b border-white sm:size-36 md:size-48 dark:border-black"></div>
            <div className="bg-grid-light hover:bg-grid-light-hover dark:bg-grid-dark dark:hover:bg-grid-dark-hover size-24 overflow-hidden border-b border-r border-white sm:size-36 md:size-48 dark:border-black"></div>
            <div className="bg-grid-light hover:bg-grid-light-hover dark:bg-grid-dark dark:hover:bg-grid-dark-hover size-24 overflow-hidden border-b border-r border-white sm:size-36 md:size-48 dark:border-black"></div>
            <div className="bg-grid-light hover:bg-grid-light-hover dark:bg-grid-dark dark:hover:bg-grid-dark-hover size-24 overflow-hidden border-b border-white sm:size-36 md:size-48 dark:border-black"></div>
          </div>

          <div className="hidden size-24 flex-col items-center justify-center gap-4 sm:flex sm:size-36 md:size-48">
            <div>
              <p className="font-display text-center text-base font-semibold uppercase">
                Guesses Left
              </p>
              <p className="font-display mb-1 mt-1 text-center text-6xl font-semibold md:text-7xl">
                9
              </p>
              <div className="flex items-center justify-center">
                <button className="rounded-full bg-red-700 px-4 py-1 font-bold text-white hover:cursor-pointer hover:bg-red-700">
                  Retire
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="font-display mt-5 text-center text-sm">
        <span className="block">
          Note: Driver's must have started a Grand Prix with the team to
          qualify.
        </span>
        <span className="block">
          Tap on a team for past team names or on a category for more info.
        </span>
      </div>

      <div className="mt-8 flex  flex-col items-center justify-center gap-2 sm:hidden">
        <p className="font-display text-center text-sm font-semibold uppercase">
          Guesses Left
        </p>
        <p className="font-display text-6xl font-semibold">9</p>
        <button className="rounded-full bg-red-700 px-4 py-1 font-bold text-white hover:cursor-pointer hover:bg-red-700">
          RETIRE
        </button>
      </div>
    </main>
  );
}
