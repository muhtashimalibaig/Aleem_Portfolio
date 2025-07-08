import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Loader from "./Components/Loader";
const Layout: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header />
          <Outlet />
          <Navbar />
        </div>
      )}
    </>
  );
};

export default Layout;
