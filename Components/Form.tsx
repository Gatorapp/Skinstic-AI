"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { MdPlayArrow } from "react-icons/md";
import DiamondBackground from "./DiamondBackground"; // Import the new component

const Form = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [phase, setPhase] = useState<"name" | "location">("name");
  const [showProcess, setShowProcess] = useState(false);
  const [isFocused, setIsFocused] = useState(false); // State to track if input is focused

  useEffect(() => {
    setShowProcess(name.trim() !== "");
  }, [name]);

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <DiamondBackground /> {/* Use the extracted component */}

      {/* Centered Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <h1 className="uppercase text-xs font-semibold text-center">
          {phase === "name" ? "Introduce Yourself" : "Where are you from?"}
        </h1>
        {!isFocused && (
          <h2 className="uppercase opacity-60 text-[10px] mt-2">Click to type</h2>
        )}

        <div className="relative group mt-3">
          <input
            type="text"
            placeholder={phase === "name" ? "Introduce Yourself" : "Where are you from?"}
            value={phase === "name" ? name : location}
            onChange={(e) =>
              phase === "name" ? setName(e.target.value) : setLocation(e.target.value)
            }
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="w-[350px] lg:w-[450px] text-center text-3xl lg:text-5xl border-b-2 border-transparent focus:border-transparent focus:outline-none transition-colors duration-200 placeholder:text-black focus:placeholder:text-opacity-60"
          />
          <span className="absolute left-1/2 bottom-0 h-0.5 w-[350px] bg-black transform -translate-x-1/2 scale-x-0 origin-center group-focus-within:scale-x-100 transition-transform duration-200"></span>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="absolute bottom-9 flex justify-between w-[90vw] lg:w-[94vw]">
        {/* Back Button */}
        <div className="flex items-center justify-center gap-4">
          {phase === "location" && (
            <button onClick={() => setPhase("name")} className="relative flex items-center justify-center w-6 h-6 diamond-button" title="Back to Name">
              <div className="diamond"></div>
              <div className="diamond-hover"></div> {/* Second diamond on hover */}
              <MdPlayArrow className="rotate-180 text-black text-lg z-10" />
            </button>
          )}
          {phase === "name" && (
            <Link href={"/"} className="relative flex items-center justify-center w-6 h-6 diamond-button">
              <div className="diamond"></div>
              <div className="diamond-hover"></div> {/* Second diamond on hover */}
              <MdPlayArrow className="rotate-180 text-black text-lg z-10" />
            </Link>
          )}
          <p className="text-xs uppercase font-bold opacity-60">Back</p>
        </div>

        {/* Next/Proceed Button Location */}
        {name.trim() !== "" && phase === "name" && (
          <div className="flex items-center gap-4">
            <p className="text-xs uppercase font-bold opacity-60">Process</p>
            <button
              onClick={() => setPhase("location")}
              className="relative flex items-center justify-center w-6 h-6 diamond-button"
              title="Proceed to Location"
            >
              <div className="diamond"></div>
              <div className="diamond-hover"></div> {/* Second diamond on hover */}
              <MdPlayArrow className="text-black text-lg z-10" />
            </button>
          </div>
        )}

        {/* Next/Proceed Button Next Page */}
        {location.trim() !== "" && phase === "location" && (
          <div className="flex items-center gap-4">
            <p className="text-xs uppercase font-bold opacity-60">Proceed</p>
            <Link href={"/testing"} className="relative flex items-center justify-center w-6 h-6 diamond-button">
              <div className="diamond"></div>
              <div className="diamond-hover"></div> {/* Second diamond on hover */}
              <MdPlayArrow className="text-black text-lg z-10" />
            </Link>
          </div>
        )}
      </div>

      <style jsx>{`
        .diamond-button {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .diamond, .diamond-hover {
          position: absolute;
          inset: 0;
          transform: rotate(45deg);
          border: 2px solid #a0a4ab;
          transition: all 0.2s ease;
        }

        .diamond-hover {
          opacity: 0;
          transform: rotate(45deg) scale(1.2); /* Second diamond appears slightly bigger */
        }

        .diamond-button:hover .diamond-hover {
          opacity: 1;
          transform: rotate(45deg) scale(1.2) translate(2px, 2px); /* Moves out slightly */
        }
      `}</style>
    </div>
  );
};

export default Form;
