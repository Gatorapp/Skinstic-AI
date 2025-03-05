"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { MdPlayArrow } from "react-icons/md";


const Form = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [phase, setPhase] = useState<"name" | "location">("name");

  // State for random rotations
  const [diamondRotations, setDiamondRotations] = useState([0, 0, 0]);

  useEffect(() => {
    let animationFrameId: number;
    const rotateDiamonds = () => {
      setDiamondRotations((prevRotations) => [
        prevRotations[0] + 0.18,
        prevRotations[1] + 0.20,
        prevRotations[2] + 0.22,
      ]);
      animationFrameId = requestAnimationFrame(rotateDiamonds);
    };

    animationFrameId = requestAnimationFrame(rotateDiamonds);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Rotating Diamonds */}
      <div
        className="hidden lg:block absolute w-[500px] h-[500px] border-2 border-[--primary] border-dotted opacity-30"
        style={{ transform: `rotate(${diamondRotations[0]}deg)` }}
      ></div>
      <div
        className="hidden lg:block absolute w-[600px] h-[600px] border-2 border-[--primary] border-dotted opacity-20"
        style={{ transform: `rotate(${diamondRotations[1]}deg)` }}
      ></div>
      <div
        className="hidden lg:block absolute w-[700px] h-[700px] border-2 border-[--primary] border-dotted opacity-10"
        style={{ transform: `rotate(${diamondRotations[2]}deg)` }}
      ></div>

      {/* Centered Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <h1 className="uppercase text-xs font-semibold text-center">
          {phase === "name" ? "Introduce Yourself" : "Where are you from?"}
        </h1>

        <h2 className="uppercase opacity-60 text-[10px] mt-2">Click to type</h2>

        <div className="relative group mt-3">
          <input
            type="text"
            placeholder={phase === "name" ? "Full Name" : "Your Location"}
            value={phase === "name" ? name : location}
            onChange={(e) =>
              phase === "name" ? setName(e.target.value) : setLocation(e.target.value)
            }
            className="w-[350px] lg:w-[450px] text-center text-3xl lg:text-5xl border-b-2 border-transparent focus:border-transparent focus:outline-none transition-colors duration-200 placeholder:text-black focus:placeholder:text-opacity-60"
          />
          <span className="absolute left-1/2 bottom-0 h-0.5 w-[350px] bg-black transform -translate-x-1/2 scale-x-0 origin-center group-focus-within:scale-x-100 transition-transform duration-200"></span>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="absolute bottom-9 flex justify-between w-[90vw] lg:w-[94vw]">
        {/* Back Button */}
        <div className="flex items-center gap-4">
          {phase === "location" && (
            <button onClick={() => setPhase("name")} className="relative flex items-center w-6 h-6" title="Back to Name">
              <div className="absolute inset-0 transform rotate-45 border-2 border-[#a0a4ab]"></div>
              <MdPlayArrow className="rotate-180 text-black text-lg z-10" />
            </button>
          )}
          {phase === "name" && (
            <Link href={"/testing"} className="relative flex items-center justify-center w-6 h-6">
            <div className="absolute inset-0 flex items-center justify-center transform rotate-45 border-2 border-[#a0a4ab]"></div>
            <MdPlayArrow className="rotate-180 text-black text-lg z-10" />
          </Link>
          
          )}
          <p className="text-xs uppercase font-bold opacity-60">Back</p>
        </div>

        {/* Next/Proceed Button */}
        {name.trim() !== "" && phase === "name" && (
          <button onClick={() => setPhase("location")} className="relative flex items-center w-6 h-6" title="Proceed to Location">
            <div className="absolute inset-0 transform rotate-45 border-2 border-[#a0a4ab]"></div>
            <MdPlayArrow className="text-black text-lg z-10" />
          </button>
        )}

        {location.trim() !== "" && phase === "location" && (
          <div className="flex items-center gap-4">
            <p className="text-xs uppercase font-bold opacity-60">Proceed</p>
            <Link href={"/testing"} className="relative flex items-center justify-center w-6 h-6">
  <div className="absolute inset-0 flex items-center justify-center transform rotate-45 border-2 border-[#a0a4ab]"></div>
  <MdPlayArrow className="text-black text-lg z-10" />
</Link>

          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
