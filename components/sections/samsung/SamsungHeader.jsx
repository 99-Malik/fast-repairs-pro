"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import TextCallButton from "@/components/TextCallButton";

const SamsungHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenuToggle = () => {
    console.log("clicked");
    setShowMenu(!showMenu);
  };

  return (
    <header className="fixed z-50 flex w-full items-center justify-center bg-white drop-shadow-sm">
      <div className=" flex h-16 w-full max-w-[78rem] items-center gap-12 px-5 sm:px-7 md:px-10 xl:px-0">
        <Link
          href="/"
          className="flex max-h-11 max-w-28 items-center"
        >
          {logo}
        </Link>
        <div className="hidden w-full cursor-pointer items-center justify-center gap-12 md:flex ">
          <h1 className="hover:color">
            <Link href="/">Home</Link>
          </h1>
          <h1>
            <Link href="/"> Services</Link>
          </h1>
          <h1>
            <Link href="/">Contact Us</Link>
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
                  className="flex max-h-11 max-w-28 items-center"
                >
                  {logo}
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

export default SamsungHeader;

const logo = (
  <svg
    class="icon"
    xmlns="http://www.w3.org/2000/svg"
    width="120"
    height="32"
    viewBox="0 0 120 32"
  >
    <rect id="Clear_space" width="120" height="32" fill="none"></rect>
    <path
      id="Logo_ratio"
      d="M0,11.651V10.511H3.994v1.45a1.334,1.334,0,0,0,1.494,1.346A1.3,1.3,0,0,0,6.932,12.3a1.833,1.833,0,0,0-.026-1.113C6.133,9.243.851,8.363.18,5.333a5.347,5.347,0,0,1-.025-2.02C.567.88,2.705,0,5.359,0c2.113,0,5.025.492,5.025,3.754V4.816H6.674V3.884A1.275,1.275,0,0,0,5.282,2.537a1.25,1.25,0,0,0-1.365,1.01,2.021,2.021,0,0,0,.026.777c.437,1.734,6.081,2.667,6.7,5.8a6.943,6.943,0,0,1,.025,2.46C10.307,15.068,8.091,16,5.412,16,2.6,16,0,14.99,0,11.651ZM48.392,11.6V10.46h3.943v1.424A1.312,1.312,0,0,0,53.8,13.23a1.286,1.286,0,0,0,1.443-.984,1.759,1.759,0,0,0-.025-1.088c-.748-1.915-5.979-2.8-6.648-5.825a5.215,5.215,0,0,1-.026-1.994C48.959.932,51.1.052,53.7.052c2.088,0,4.973.518,4.973,3.728V4.816H54.989V3.91a1.268,1.268,0,0,0-1.365-1.346,1.2,1.2,0,0,0-1.34.984,2.017,2.017,0,0,0,.025.777c.412,1.734,6,2.641,6.623,5.747a6.806,6.806,0,0,1,.025,2.434c-.361,2.486-2.551,3.392-5.2,3.392C50.97,15.9,48.392,14.887,48.392,11.6Zm14.121.545a5.876,5.876,0,0,1-.025-.985V.44H66.25V11.495a4.111,4.111,0,0,0,.025.57,1.468,1.468,0,0,0,2.835,0,3.97,3.97,0,0,0,.026-.57V.44H72.9V11.158c0,.285-.026.829-.026.985-.257,2.8-2.448,3.7-5.179,3.7S62.771,14.938,62.513,12.143Zm30.974-.156A7.808,7.808,0,0,1,93.435,11V4.712c0-.259.025-.725.051-.985C93.821.932,96.063.052,98.717.052c2.629,0,4.947.88,5.206,3.676a7.185,7.185,0,0,1,.025.985V5.2h-3.762V4.376a3.1,3.1,0,0,0-.051-.57,1.553,1.553,0,0,0-2.964,0,3.088,3.088,0,0,0-.051.7V11.34a4.17,4.17,0,0,0,.026.57A1.472,1.472,0,0,0,98.717,13a1.406,1.406,0,0,0,1.52-1.087,2.09,2.09,0,0,0,.026-.57V9.165h-1.52V6.99H104V11a7.674,7.674,0,0,1-.052.984c-.257,2.718-2.6,3.676-5.231,3.676S93.744,14.705,93.487,11.987ZM41.049,15.378l-.1-13.825L38.369,15.378H34.607L32.055,1.553l-.1,13.825H28.242L28.551.466h6.056l1.881,11.651L38.369.466h6.055l.335,14.912Zm-19.79,0L19.249,1.553,17.187,15.378H13.168L15.9.466h6.623l2.732,14.912Zm62.977-.155L80.5,2.822l.206,12.4H77.046V.466h5.514l3.5,12.013L85.859.466h3.685V15.224Z"
      transform="translate(8 8)"
    ></path>
  </svg>
);
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
const chevron = (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.999939 22C0.868332 22.0008 0.73787 21.9755 0.616033 21.9258C0.494195 21.876 0.383379 21.8027 0.289939 21.71C0.19621 21.617 0.121816 21.5064 0.0710478 21.3846C0.0202791 21.2627 -0.00585938 21.132 -0.00585938 21C-0.00585938 20.868 0.0202791 20.7373 0.0710478 20.6154C0.121816 20.4936 0.19621 20.383 0.289939 20.29L9.58994 11L0.289939 1.71C0.101635 1.5217 -0.00415278 1.2663 -0.00415277 1C-0.00415277 0.733701 0.101635 0.478306 0.289939 0.290002C0.478243 0.101699 0.733637 -0.00408935 0.999939 -0.00408936C1.26624 -0.00408936 1.52164 0.101699 1.70994 0.290002L11.7099 10.29C11.8037 10.383 11.8781 10.4936 11.9288 10.6154C11.9796 10.7373 12.0057 10.868 12.0057 11C12.0057 11.132 11.9796 11.2627 11.9288 11.3846C11.8781 11.5064 11.8037 11.617 11.7099 11.71L1.70994 21.71C1.6165 21.8027 1.50568 21.876 1.38385 21.9258C1.26201 21.9755 1.13155 22.0008 0.999939 22Z"
      fill="black"
    />
  </svg>
);
