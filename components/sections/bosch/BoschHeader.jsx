"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import TextCallButton from "@/components/TextCallButton";
import { chevron } from "@/utils/svgs";

const BoschHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenuToggle = () => {
    console.log("clicked");
    setShowMenu(!showMenu);
  };

  return (
    <header className="fixed z-50 flex w-full items-center justify-center bg-white drop-shadow-sm  ">
      <div className=" flex h-20 w-full max-w-[78rem] items-center gap-12 px-5 sm:px-7 md:px-10 xl:px-0">
        <Link
          href="/services-centers/bosch"
          className="flex max-h-11 max-w-28 items-center"
        >
          {logo}
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

export default BoschHeader;

const logo = (
  <svg>
    <svg version="1.1" viewBox="0 0 561 224" xmlns="http://www.w3.org/2000/svg">
      <title>Bosch Logo_master</title>
      <g fill="none" fill-rule="evenodd">
        <rect width="109" height="44"></rect>
        <path
          id="Shape"
          d="m239.71 110.32c6.8777-2.6718 11.38-9.3537 11.294-16.761 0-15.085-10.653-22.563-25.284-22.563h-38.375v82h41.712c12.834 0 25.412-9.0252 25.412-22.821 0-16.374-14.76-19.726-14.76-19.855zm-32.327-22.311h15.178c2.1188-0.12391 4.1908 0.63828 5.6917 2.0937s2.2869 3.4646 2.1591 5.5191c-0.041114 2.0511-0.94461 3.997-2.5011 5.3865-1.5565 1.3895-3.6308 2.1021-5.7423 1.9726h-14.786v-14.972zm15.802 46.987h-14.8v-16h14.421c7.2103 0 10.626 3.2 10.626 7.936 0 5.888-4.3009 8.064-10.246 8.064z"
          fill="#ED0007"
        ></path>
        <path
          id="Shape"
          d="m299.05 68c-23.674 0-37.569 18.982-37.569 43 0 24.147 13.895 43 37.569 43 23.802 0 37.569-18.853 37.569-43 0-24.018-13.767-43-37.569-43zm-0.064695 66c-11.645 0-17.468-10.321-17.468-23.064 0-12.742 5.8225-22.936 17.468-22.936 11.645 0 17.597 10.321 17.597 22.936 0 12.87-5.9519 23.064-17.597 23.064z"
          fill="#ED0007"
        ></path>
        <path
          id="Path"
          d="m380.75 102.8-2.8351-0.64315c-6.9589-1.4149-12.5-3.2158-12.5-8.2324 0-5.4025 5.2836-7.5892 9.9229-7.5892 6.3973 0.10038 12.465 2.8492 16.753 7.5892l12.758-12.606c-5.7991-6.5602-15.206-12.863-29.897-12.863-17.268 0-30.413 9.6473-30.413 25.726 0 14.664 10.567 21.867 23.454 24.568l2.8351 0.64315c10.696 2.1867 14.691 3.8589 14.691 9.0041 0 4.888-4.3815 8.1037-11.083 8.1037-7.9898 0-15.206-3.473-20.748-10.548l-13.016 12.863c7.2166 8.6183 16.366 15.307 34.021 15.307 15.335 0 31.702-8.7469 31.702-26.627 0.25774-18.651-13.918-22.253-25.645-24.697z"
          fill="#ED0007"
        ></path>
        <path
          id="a"
          d="m452.27 134.7c-9.0208 0-18.428-7.4606-18.428-23.797 0-14.535 8.763-22.639 17.913-22.639 7.2166 0 11.469 3.3444 14.82 9.1328l16.495-10.934c-8.2476-12.477-18.042-17.751-31.573-17.751-24.743 0-38.145 19.166-38.145 42.32 0 24.311 14.82 43.349 37.887 43.349 16.237 0 23.97-5.6598 32.346-17.751l-16.624-11.191c-3.3506 5.4025-6.9589 9.2614-14.691 9.2614z"
          fill="#ED0007"
        ></path>
        <polygon
          points="538.09 70.638 538.09 100.74 513.22 100.74 513.22 70.638 491.7 70.638 491.7 152.45 513.22 152.45 513.22 120.16 538.09 120.16 538.09 152.45 559.61 152.45 559.61 70.638"
          fill="#ED0007"
        ></polygon>
        <path
          id="b"
          d="m64.115 50c-34.305 0-62.115 27.758-62.115 62 0 34.242 27.81 62 62.115 62 34.305 0 62.115-27.758 62.115-62-0.018486-34.234-27.817-61.982-62.115-62zm0 118c-30.985 0-56.103-25.072-56.103-56s25.118-56 56.103-56c30.985 0 56.103 25.072 56.103 56-0.031844 30.915-25.132 55.968-56.103 56z"
          fill="#000"
          fill-rule="nonzero"
        ></path>
        <path
          d="m89.295 73h-4.2585v21.105h-42.714v-21.105h-4.3876c-13.052 8.5369-20.906 23-20.906 38.5 0 15.5 7.8538 29.963 20.906 38.5h4.3876v-21.105h42.714v21.105h4.2585c13.052-8.5369 20.906-23 20.906-38.5 0-15.5-7.8538-29.963-20.906-38.5zm-52.229 69c-8.9213-7.7431-14.026-18.843-14.026-30.5 0-11.657 5.1046-22.757 14.026-30.5v61zm48.089-19h-43.079v-23h43.079v23zm6.0111 19v-12.951-35.098-12.951c8.927 7.7767 14.026 18.864 14.026 30.5 0 11.636-5.0988 22.723-14.026 30.5z"
          fill="#000"
          fill-rule="nonzero"
        ></path>
      </g>
    </svg>
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
