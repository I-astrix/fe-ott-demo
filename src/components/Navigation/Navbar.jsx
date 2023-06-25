"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const navlinks = [
  { id: "1b3f", name: "home", path: "/" },
  { id: "4ga1", name: "tv shows", path: "/" },
  { id: "gfs3", name: "movies", path: "/" },
  { id: "42gs", name: "watchlist", path: "/" },
];

const Navbar = () => {
  const [smNavActive, setSmNav] = useState(false);

  const router = useRouter();

  return (
    <div className="flex border-b border-white border-opacity-20  fixed w-full navbar-gradient backdrop-blur-lg z-20 justify-between items-center p-3 px-8 lg:px-20">
      <div
        className={`${
          smNavActive ? "right-0" : "-right-full"
        } transition-300 absolute z-30 top-0 h-screen w-full bg-black grid place-content-center gap-5 p-8`}
      >
        <div className="flex flex-col items-center gap-4">
          {navlinks?.map((navlink) => {
            return (
              <Link
                className={` ${
                  navlink?.path === router.pathname ? " active " : ""
                } nav-link text-center w-max text-white uppercase p-4 py-3 border border-transparent border-dotted focus:border-white`}
                key={navlink?.id}
                href={navlink?.path}
                onClick={() => setSmNav(false)}
              >
                <p className="text-lg">{navlink?.name}</p>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="flex items-center gap-8">
        <Link href={"/"} className="z-30">
          <Image
            src={"/logo.png"}
            width={300}
            height={300}
            alt="one-flank-music"
            className="h-12 w-20 object-contain "
          />
        </Link>
        <div className="gap-4 hidden lg:flex">
          {navlinks?.map((navlink) => {
            return (
              <Link
                className={`${
                  navlink?.path === router.pathname ? " active " : ""
                } nav-link text-white uppercase p-3 py-2 border border-transparent border-dotted focus:border-white`}
                key={navlink?.id}
                href={navlink?.path}
              >
                <p className="text-xs">{navlink?.name}</p>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex items-center gap-8">
        <div className="h-8 rounded-sm w-8 overflow-hidden">
          <Image src={'/avatar.avif'} height={30} width={30} alt="avatar"/>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          fill="none"
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>

        <div
          className="lg:hidden z-30"
          onClick={() => setSmNav((prev) => !prev)}
        >
          <div className={`${smNavActive ? "active" : ""} ham-menu`}></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
