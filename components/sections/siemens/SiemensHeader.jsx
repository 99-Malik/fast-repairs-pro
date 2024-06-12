"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import TextCallButton from "@/components/TextCallButton";
import { chevron } from "@/utils/svgs";

const SiemensHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [header, setHeader] = useState(false);

  const scrollHeader = () => {
    if (window.scrollY >= 0) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);

    return () => {
      window.addEventListener("scroll", scrollHeader);
    };
  }, []);

  const handleMenuToggle = () => {
    console.log("clicked");
    setShowMenu(!showMenu);
  };

  return (
    <header className="fixed z-50 flex w-full items-center justify-center bg-white drop-shadow-sm text-black">
      <div className=" flex h-20 w-full max-w-[78rem] items-center gap-12 px-5 sm:px-7 md:px-10 xl:px-0">
        <Link href="/" className="flex items-center">
          <Image
            src="/logos/siemens-logo-white.svg"
            width={130}
            height={22}
            alt="siemens logo"
            quality={100}
          />
        </Link>
        <div className=" hidden cursor-pointer items-center justify-center gap-12 md:flex ">
          <h1 className="hover:color">
            <a>Home</a>
          </h1>
          <h1>
            <a>Services</a>
          </h1>
          <h1>
            <a>Contact Us</a>
          </h1>
        </div>

        <div className="ml-auto flex gap-4">
          <button onClick={handleMenuToggle}>{menu}</button>
        </div>
      </div>

      <AnimatePresence>
        {showMenu && (
          <motion.div
            className="absolute inset-0 z-50 flex h-screen justify-center bg-white px-5 py-10 sm:px-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex w-full max-w-[78rem] flex-col">
              <div className="flex w-full justify-between">
                <Link
                  href="/"
                  className="flex items-center"
                >
                  <Image
                    src="/logos/siemens-logo-white.svg"
                    width={130}
                    height={22}
                    alt="siemens logo"
                    quality={100}
                  />
                </Link>
                <button onClick={() => setShowMenu(false)}>{cross}</button>
              </div>
              <motion.div
                initial={{ x: -500 }}
                animate={{ x: 0 }}
                exit={{ x: -500 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col px-7 py-16"
              >
                <Link
                  href="/"
                  className="flex items-center justify-between gap-x-3 px-10 py-3 hover:bg-white/5 sm:w-1/3"
                >
                  <span>Home</span>
                  {chevron}
                </Link>
                <Link
                  href="/"
                  className="flex items-center justify-between gap-x-3 px-10 py-3 hover:bg-white/5 sm:w-1/3"
                >
                  <span>Services</span>
                  {chevron}
                </Link>
                <TextCallButton />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
                className="flex w-full items-center gap-x-5 px-5 py-16 sm:px-16"
              >
                <Image
                  src="/bosch/globe.svg"
                  width={50}
                  height={50}
                  alt="globe icon"
                />
                <span className="text-xl font-extralight sm:text-2xl">
                  Services available in Dubai and Abu Dhabi
                </span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const menu = (
  <svg
    width="23"
    height="20"
    viewBox="0 0 23 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.16576 4.05908H21.4783C21.9098 4.05908 22.2595 3.70933 22.2595 3.27783V1.32471C22.2595 0.893213 21.9098 0.543457 21.4783 0.543457H1.16576C0.734262 0.543457 0.384506 0.893213 0.384506 1.32471V3.27783C0.384506 3.70933 0.734262 4.05908 1.16576 4.05908ZM1.16576 11.8716H21.4783C21.9098 11.8716 22.2595 11.5218 22.2595 11.0903V9.13721C22.2595 8.70571 21.9098 8.35596 21.4783 8.35596H1.16576C0.734262 8.35596 0.384506 8.70571 0.384506 9.13721V11.0903C0.384506 11.5218 0.734262 11.8716 1.16576 11.8716ZM1.16576 19.6841H21.4783C21.9098 19.6841 22.2595 19.3343 22.2595 18.9028V16.9497C22.2595 16.5182 21.9098 16.1685 21.4783 16.1685H1.16576C0.734262 16.1685 0.384506 16.5182 0.384506 16.9497V18.9028C0.384506 19.3343 0.734262 19.6841 1.16576 19.6841Z"
      fill="black"
    />
  </svg>
);

const cross = (
  <svg
    width="14"
    height="14"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.61526 1.61526C2.7868 0.443727 4.68633 0.443677 5.85791 1.61526L20 15.7574L34.1422 1.61526C35.3137 0.443687 37.2132 0.443667 38.3848 1.61526C39.5564 2.7868 39.5564 4.68629 38.3848 5.85787L24.2427 20L38.3848 34.1421C39.5564 35.3137 39.5564 37.2132 38.3848 38.3848C37.2132 39.5564 35.3137 39.5563 34.1422 38.3848L20 24.2426L5.85791 38.3848C4.68634 39.5563 2.78681 39.5563 1.61527 38.3848C0.443666 37.2132 0.443686 35.3137 1.61527 34.1421L15.7574 20L1.61527 5.85787C0.443696 4.6863 0.443656 2.78687 1.61526 1.61526Z"
      fill="black"
    />
  </svg>
);

export default SiemensHeader;
