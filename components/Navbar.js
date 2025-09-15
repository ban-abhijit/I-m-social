"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import (usePathname) from "next/navigation"

function Navbar() {
  const pathname = usePathname();
  const showNavbar = ["/", "/generate"].includes(pathname);
  return (
    <>
      {showNavbar && (
        <nav className="bg-gradient-to-r from-lime-400 to-green-400 w-[80vw] mx-auto p-4 rounded-full fixed right-[10vw] top-6 flex items-center justify-between">
          <div className="logo  text-white font-bold flex mr-6 ">
            <Link href={"/"}>
              <h2 className="text-3xl">I'm Social</h2>
            </Link>
            <Image
              alt="loading"
              src="/icons8-handshake-heart-50.jpeg"
              width={30}
              height={20}
              className="mr-6"
            ></Image>
            {/* <div className="text-l flex items-center">
              <ul className="flex gap-2 text-white text-l items-center justify-center">
                <li>Template</li>
                <li>MarketPLace</li>
                <li>Discover</li>
                <li>Pricing</li>
                <li>Learn</li>
              </ul>
            </div> */}
          </div>

          {/* <div className=" flex justify-between items-center">
            <button className="login text-sm p-2 mx-1 bg-green-700 rounded-xl">
              Log in
            </button>
            <button className="signup text-sm p-2 bg-green-700 rounded-full">
              Sign up free{" "}
            </button>
          </div> */}
        </nav>
      )}
    </>
  );
}

export default Navbar;
