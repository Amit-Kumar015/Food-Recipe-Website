"use client";

import { cn } from "../../../lib/utils.ts";

export function Card({ name, img }: { name: string; img: string }) {
    return (
        <div className="max-w-xs min-w-lg w-full group/card ">
            <div
                className={cn(
                    "cursor-pointer overflow-hidden relative card h-64 rounded-md shadow-xl max-w-lg min-w-lg mx-auto flex flex-col justify-between p-4 bg-cover"
                )}
                style={{ backgroundImage: `url(${img})` }} // Inline style for dynamic background
            >
                <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>

                <div className="text-content">
                    <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                        {name}
                    </h1>
                </div>
            </div>
        </div>
    );
}
