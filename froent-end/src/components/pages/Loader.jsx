import React from "react";

const Loader = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="flex items-center">
        <img src="/loading.gif" alt="Loading" className="h-[60px] w-[60px]" />
        <h1 className="ml-2 font-bold text-xl text-white">Loading ...</h1>
      </div>
    </div>
  );
};

export default Loader;
