import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="h-20 bg-purple-900 flex justify-between text-white px-10 items-center">
      <div className="logo font-bold text-2xl">
        LinkTrim
      </div>
      <ul className="flex justify-center items-center gap-8">
        <Link href="/"><li>Home</li></Link>
        <Link href="/"><li>About</li></Link>
       <Link href="shorten"> <li>Shorten</li></Link>
        <Link href="/"><li>Contact Us</li></Link>
        <div className="flex gap-3">
          <Link href="/"><button className="bg-purple-500 rounded lg p-2 shadow-lg">Try Now</button></Link>
          <Link href="/"><button className="bg-purple-500 rounded lg p-2 shadow-lg">GitHub</button></Link>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar
