import React from "react";

export default function GuessCard() {
    return (
        <div>
            <p className="font-display text-center text-base font-semibold uppercase">
                Guesses Left
            </p>
            <p className="font-display mb-1 mt-1 text-center text-6xl font-semibold md:text-7xl">
                9
            </p>
            <div className="flex items-center justify-center">
                <button className="rounded-full bg-retire-red px-4 py-1 font-bold text-white hover:cursor-pointer hover:bg-red-600 dark:bg-red-600 dark:hover:bg-retire-hover">
                    Retire
                </button>
            </div>
        </div>
    );
}