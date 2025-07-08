import React, { useState } from "react";
import HeaderImg from "../assets/top.webp";
// import "../stylesheets/Header.css";
import { Link } from "react-router-dom";
import Video from "../assets/PortfolioV.mp4";
import { Facebook, Instagram, Play } from "lucide-react";
import Modal from "./Modal";

const Header: React.FC = () => {
  const [open, setOpened] = useState(false);
  const handleOpenModal = () => {
    setOpened(!open);
  };
  return (
    <>
      <header className='px-6 md:px-20 lg:px-28 py-4 md:py-6 relative'>
        <div className='flex flex-row flex-wrap justify-between items-center gap-4'>
          <Link
            to={"/home"}
            className='text-2xl md:text-3xl lg:text-4xl font-[900] tracking-tighter'>
            Socdia Agency
            <span className='text-[#3768E1]'>.</span>
          </Link>
          <div className='flex items-center gap-6 md:gap-10'>
            {/* Hide icons for mobile */}
            <div className='hidden md:flex gap-5 lg:gap-7'>
              <a
                href='https://www.facebook.com/share/1BhyjcKDrZ/'
                target='_blank'
                className='hover:text-[#3768E1]'>
                <Facebook />
              </a>
              <a
                href='https://www.instagram.com/socdia.agency?igsh=bGgzcGtidWh4NWV0'
                className='hover:text-[#3768E1]'
                target='_blank'
                rel='noopener noreferrer'>
                <Instagram />
              </a>
            </div>
            <button
              onClick={handleOpenModal}
              id='btn'
              className='bg-[#3768E1] px-6 md:px-10 py-2 md:py-3 rounded-full border text-sm md:text-base relative'>
              <span>View Portfolio</span>
              <span
                className='absolute'
                id='upload'
                style={{
                  top: "50%",
                  left: "50%",
                  opacity: "0",
                  transform: "translate(-50%, -50%)",
                }}>
                <Play size={32} />
              </span>
            </button>
          </div>
        </div>
        {/* Background Image */}
        <div
          className='fixed top-0 left-0 -z-10'
          style={{ mixBlendMode: "color-dodge", opacity: "0.5" }}>
          <img src={HeaderImg} alt='' className='w-full h-auto' />
        </div>
      </header>
      {open && <Modal source={Video} onClose={handleOpenModal} />}
    </>
  );
};

export default Header;
