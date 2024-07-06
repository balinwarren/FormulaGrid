import React from "react";
import '../styles.css'

export default function GameTitle() {
    const gameNum = 1;

    return (
        <p className="font-display text-xl font-semibold italic">
          Formula Grid #{gameNum}
        </p>
    );
}