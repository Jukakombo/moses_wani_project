import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Home from "../homePage/Home";
const Index = () => {
  return (
    <div className=" m-auto flex flex-col h-screen justify-between">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default Index;
