import React from "react";
import Navbar from "../components/layout/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1 className="text-5xl text-center absolute top-1/2 right-1/2 translate-x-1/2 translate-y-1/2">
          Home Page
        </h1>
      </div>
    </>
  );
};

export default Home;
