import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  document.title = "NotFound | codewithdp";
  return (
    <>
      <div className="text-center absolute top-1/2 right-1/2 translate-1/2">
        <h1 className="text-5xl"> NotFound Page</h1>
        <div className="text-2xl ">
          Go to{" "}
          <Link to={"/"} className="underline text-blue-400">
            Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
