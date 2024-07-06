import React from "react";
import '../styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

export default function Header(){
    return (
        <nav className="top-0 w-screen bg-header-red">
            <div className="mx-auto flex max-w-screen-2xl flex-wrap items-center justify-between p-4">
                <a 
                    href="https://formulagrid.app"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <div className="h-8 w-64">
                        <img className="object-contain" src="formula_grid_text_white.webp" alt="Formula Grid" />
                    </div>
                </a>

                <div className="block w-auto">
                    <ul className="flex h-auto flex-row p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse">
                        <li>
                            <a
                                href="https://twitter.com/formulagridapp"
                                className="block rounded px-3 py-2 text-white hover:cursor-pointer hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-red-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-red-500"
                            >
                                <FontAwesomeIcon icon={faTwitter} transform="grow-10" inverse/>
                            </a>
                        </li>

                        <li>
                            <div 
                                className="block rounded px-3 py-2 text-white hover:cursor-pointer hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-red-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-red-500"
                            >
                                <FontAwesomeIcon icon={faCircleQuestion} transform="grow-10" inverse/>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}