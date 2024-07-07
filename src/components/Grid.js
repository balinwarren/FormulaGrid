import React from "react";
import CategoryCard from "./CategoryCard";
import DriverCard from "./DriverCard";
import GuessCard from "./GuessCard";

export default function Grid() {
    return (
        <div className="flex flex-col justify-center">
            <div className="flex flex-row justify-center">
                <div className="size-24 sm:size-32 md:size-40 lg:size-52"></div>
                <CategoryCard></CategoryCard>
                <CategoryCard></CategoryCard>
                <CategoryCard></CategoryCard>
                <div className="hidden sm:block sm:size-32 md:size-40 lg:size-52"></div>
            </div>

            <div className="flex items-center justify-center">
                <div className="grid grid-rows-3">
                    <CategoryCard></CategoryCard>
                    <CategoryCard></CategoryCard>
                    <CategoryCard></CategoryCard>
                </div>

                <div className="grid grid-cols-3 grid-rows-3 overflow-hidden rounded-xl hover:cursor-pointer">
                    <DriverCard></DriverCard>
                    <DriverCard></DriverCard>
                    <DriverCard></DriverCard>

                    <DriverCard></DriverCard>
                    <DriverCard></DriverCard>
                    <DriverCard></DriverCard>
                    
                    <DriverCard></DriverCard>
                    <DriverCard></DriverCard>
                    <DriverCard></DriverCard>
                </div>

                <div className="hidden size-24 flex-col items-center justify-center gap-4 sm:flex sm:size-32 md:size-40 lg:size-52">
                    <GuessCard></GuessCard>
                </div>
            </div>
        </div>
    );
}