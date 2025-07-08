import React, { useEffect, useState } from "react";
import { gsap } from "gsap";

const Loader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(() => {
          setIsVisible(false);
        }, 1000); // Optional delay before hiding
      },
    });

    // Animate headline and then subtext
    tl.fromTo(
      ".animate-text",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    )
      .fromTo(
        ".animate-des",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.5" // overlaps a bit for smooth effect
      )
      .to(".loader-content", {
        opacity: 0,
        y: -50,
        duration: 0.8,
        delay: 0.5,
      });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    isVisible && (
      <div
        id='loader'
        className='flex items-center justify-center h-screen bg-black text-white'>
        <div className='loader-content text-center space-y-2'>
          <h1 className='animate-text text-3xl font-bold'>
            Muhammad Aleem Irfan
          </h1>
          <p className='text-zinc-400 text-xl animate-des'>
            A Meta Ad Expert, Website Optimization and Landing Page
          </p>
        </div>
      </div>
    )
  );
};

export default Loader;
