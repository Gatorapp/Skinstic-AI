"use client"
import Header from '@/Components/Header'
import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import { MdPlayArrow } from 'react-icons/md';

function Page() {
  const [phase, setPhase] = useState("location");
  const [showInnerDiamond, setShowInnerDiamond] = useState(false);

  useEffect(() => {
    if (phase === "location") {
      setTimeout(() => setShowInnerDiamond(true), 300); // Delay for effect
    }
  }, [phase]);

  return (
    <>
      {/* Navigation buttons */}
      <div className="absolute bottom-9 flex justify-between w-[90vw] lg:w-[94vw]">
        {/* Back Button */}
        <div className="flex items-center justify-center gap-4">
          {phase === "location" && (
            <button 
              onClick={() => setPhase("name")} 
              className="relative flex items-center justify-center w-8 h-8 border-2 border-gray-400 transform rotate-45 hover:scale-125 transition-all ease-out after:content-[''] after:absolute after:transition-all after:ease-out after:duration-300 after:opacity-0 after:w-0 after:h-0 after:border-2 after:border-dotted after:border-gray-400 after:rotate-45 hover:after:w-10 hover:after:h-10 hover:after:opacity-70 after:${showInnerDiamond ? 'w-10 h-10 opacity-70' : ''}" 
              title="Back to Name"
            >
              <MdPlayArrow className="rotate-[135deg] text-black text-lg z-10" />
            </button>
          )}
          {phase === "name" && (
            <Link 
              href={'/'} 
              className="relative flex items-center justify-center w-8 h-8 border-2 border-gray-900 transform rotate-45 hover:scale-125 transition-all ease-out after:content-[''] after:absolute after:transition-all after:ease-out after:duration-300 after:opacity-0 after:w-0 after:h-0 after:border-2 after:border-dotted after:border-gray-900 after:rotate-45 hover:after:w-10 hover:after:h-10 hover:after:opacity-70 after:${showInnerDiamond ? 'w-10 h-10 opacity-70' : ''}"
            >
              <MdPlayArrow className="rotate-[135deg] text-black text-lg z-10" />
            </Link>
          )}
          <p className="text-xs uppercase font-bold opacity-60">Back</p>
        </div>
        
      </div>
    </>
  )
}

export default Page;
