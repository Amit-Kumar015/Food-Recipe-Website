"use client";
import React from "react";
import { BackgroundBeams } from "./BackgroundBeam.tsx";

export function BackgroundBeamsDemo({ searchTerm, setSearchTerm, handleSearch }) {
  return (
    (<div
      className="h-[30rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1
          className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold pb-2">
          A Perfect Blend of Taste and Technology
        </h1>
        <p></p>
        
        <div className="flex">
          <input
            type="text"
            placeholder="Search Recipe..."
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-white pl-2 text-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} />
          <button onClick={handleSearch} className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-20 p-1 relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 text-white ml-1">Search</button>
        </div>
      </div>
      <BackgroundBeams />
    </div>)
  );
}
