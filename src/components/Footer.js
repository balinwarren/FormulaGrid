import React from "react";
import '../styles.css'

export default function Footer() {
    return (
        <div className="dark:bg-footer-dark font-display bottom-0 mt-10 w-screen bg-footer-light p-12 text-center text-xs">
            <span>
            Please note: Formula Grid does not own any of the team, organization
            or event logos depicted within this site. All sports logos contained
            within this site are properties of their respective teams, ownership
            groups and/or organizations.
            </span>
        </div>
    );
}