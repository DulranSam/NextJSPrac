import React from "react";
import Link from "next/link";
import Navbar from "../Components/Navbar";
import Search from "../Components/Search";

const HomePage = () => {
  const port = process.env.PORT;

  return (
    <div>
      <Navbar></Navbar>
      <Search></Search>
      <h1>Hello how are you?</h1>

      <Link href="/">HomePage</Link>
    </div>
  );
};

export default HomePage;
