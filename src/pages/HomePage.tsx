import React, { useEffect, useState } from "react";
import circle from "../assets/circle-star.svg";
import view from "../assets/project.png";
import { MoveRight } from "lucide-react";
// import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  const lines = ["Meta Ad Expert", "CEO of Socdia Agency"];
  const [currentText, setCurrentText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handletyping = () => {
      const currentLine = lines[lineIndex];
      if (isDeleting) {
        setCurrentText((prev) => prev.slice(0, -1));
        setSpeed(100);
      } else {
        setCurrentText((prev) => currentLine.slice(0, prev.length + 1));
      }
      if (!isDeleting && currentText === currentLine) {
        setIsDeleting(true);
        setSpeed(1000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setLineIndex((prev) => (prev + 1) % lines.length);
        setSpeed(150);
      }
    };

    const timer = setTimeout(handletyping, speed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, lineIndex, lines, speed]);

  return (
    <>
      <section className='px-6 md:px-16 lg:px-28 py-6 md:py-10 relative'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='pt-6 md:pt-10'>
            <h1 className='text-xl md:text-2xl mb-1 md:mb-2'>Hello I'm</h1>
            <h1 className='text-3xl md:text-5xl font-bold'>Muhammad Aleem</h1>
            <h1 className='text-2xl md:text-4xl mt-2 text-[#3768E1] mb-3'>
              I Am {currentText}
            </h1>
            <p className='text-zinc-300 text-sm md:text-base leading-relaxed sm:w-full md:w-2/3'>
              At Socdia Agency, we help businesses grow through smart, creative,
              and result-driven Meta Ads and Website Optimization. Whether
              you’re a small business, a startup, or an online store, we focus
              on turning your clicks into real customers.
            </p>
            <Link
              to={"/projects"}
              className='inline-block mt-5 relative btn-view'>
              <img
                src={circle}
                className='w-[145px] md:w-[185px] h-[145px] md:h-[185px]'
                alt=''
              />
              <div
                id='view'
                className='absolute'
                style={{
                  width: "120px", // Adjusted width
                  height: "120px", // Adjusted height
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}>
                <img
                  src={view}
                  alt=''
                  className='w-full h-full object-contain view'
                />
              </div>
              <span
                className='absolute'
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}>
                <MoveRight size={24} />
              </span>
            </Link>
          </div>
        </div>
        {/* Hide spans for mobile */}
        <span
          className='hidden md:inline-block w-[200px] animated-circle -z-10 span1 h-[200px] bg-[#3768E1] absolute top-[10%] left-[70%]'
          style={{ filter: "blur(60px)" }}></span>
        <span
          className='hidden md:inline-block w-[200px] animated-circle -z-10 span2 h-[200px] bg-[#3768E1] absolute top-[60%] left-[65%]'
          style={{ filter: "blur(60px)" }}></span>
        <span
          className='hidden md:inline-block w-[200px] animated-circle -z-10 span3 h-[200px] bg-[#3768E1] absolute top-[40%] left-[74%]'
          style={{ filter: "blur(60px)" }}></span>
      </section>
      {/* <Navbar /> */}
    </>
  );
};

export default HomePage;
