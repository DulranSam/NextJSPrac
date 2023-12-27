import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-600 p-4 flex justify-between flex-colmd:flex-row sticky top-0 drop-shadow-xl ">
      <ul>
        <Link href="/home">home</Link>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
