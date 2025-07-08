import {
  // BriefcaseBusiness,
  Code,
  FolderOpenDot,
  House,
  Mail,
  Star,
  UserRound,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
// import "../stylesheets/Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className='fixed md:top-[20%] md:left-[93%] sm:top-[70vh] sm:left-[23%] bg-gray-500/20 backdrop-blur-lg rounded-full p-6 z-10'>
      <aside className='flex md:flex-col sm:row gap-10'>
        <Link
          to={"/Home"}
          className='text-white hover:text-[#3768E1] transition-all'
          title='Home'>
          <House />
        </Link>
        <Link
          to={"/skills"}
          className='text-white hover:text-[#3768E1] transition-all'
          title='Skills'>
          <Code />
        </Link>
        <Link
          to={"/projects"}
          className='text-white hover:text-[#3768E1] transition-all'
          title='Projects'>
          <FolderOpenDot />
        </Link>
        <Link
          to={"/reviews"}
          className='text-white hover:text-[#3768E1] transition-all'
          title='Projects'>
          <Star />
        </Link>
        {/* <Link
          to={"/service"}
          className='text-white hover:text-[#3768E1] transition-all'
          title='Work Experience'>
          <BriefcaseBusiness />
        </Link> */}
        <Link
          to={"/about"}
          className='text-white hover:text-[#3768E1] transition-all'
          title='About'>
          <UserRound />
        </Link>
        <Link
          to={"/contact"}
          className='text-white hover:text-[#3768E1] transition-all'
          title='Contact'>
          <Mail />
        </Link>
      </aside>
    </nav>
  );
};

export default Navbar;
