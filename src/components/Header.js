import React from "react";
import '../styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

export default function Header(){
    return (
        <nav className="top-0 w-screen bg-header-red">
            <div className="mx-auto max-w-screen-2xl flex items-center justify-between p-4">
                <a 
                    href="https://formulagrid.app"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <div className="h-auto w-48">
                        <img className="object-contain" src="formula_grid_text_white.webp" alt="Formula Grid" />
                    </div>
                </a>

                <div className="flex gap-7">
                    <a
                        href="https://twitter.com/formulagridapp"
                    >
                        <FontAwesomeIcon icon={faTwitter} transform="grow-10" inverse/>
                    </a>
                    <div>
                        <FontAwesomeIcon icon={faCircleQuestion} transform="grow-10" inverse/>
                    </div>
                </div>
            </div>
        </nav>
    );
}