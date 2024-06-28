"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { phoneNumber } from "@/libs/phoneNumber";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  return (
    <div className="flex h-24 w-full items-center justify-center">
      <div className="flex w-full max-w-7xl items-center justify-between px-5">
        <div className="flex items-center gap-x-1">
          <Image src="/logo.svg" width={50} height={50} alt="LOGO" />
          <div className="flex flex-col justify-between px-2">
            <span className="text-3xl font-bold uppercase">Service</span>
            <span className="text-xs uppercase text-black/80">
            Center UAE
            </span>
          </div>
        </div>
        {/* Medium and larger screens */}
        <div className="hidden items-center gap-x-10 px-10 md:flex">
          <Link
            className="text-lg font-semibold text-blue-950 transition-all duration-200 ease-in-out hover:text-blue-500"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-lg font-semibold text-blue-950 transition-all duration-200 ease-in-out hover:text-blue-500"
            href="/"
          >
            About Us
          </Link>
          <Link
            className="text-lg font-semibold text-blue-950 transition-all duration-200 ease-in-out hover:text-blue-500"
            href="/"
          >
            Services
          </Link>
          <Link
            className="text-lg font-semibold text-blue-950 transition-all duration-200 ease-in-out hover:text-blue-500"
            href="/"
          >
            Contact Us
          </Link>
        </div>
        {/* Small screens */}
        <button
          className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400/50 p-1 md:hidden"
          onClick={() => setIsOpen(true)}
        >
          {barsIcon}
        </button>
        {/* Sidebar */}
        <AnimatePresence>
          {isOpen && (
            <div className="absolute inset-0 left-0 top-0 flex md:hidden">
              <motion.div
                className="flex h-full min-w-80 max-w-[80vw] flex-col gap-y-5 bg-blue-950 p-5 text-white"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.3 }}
              >
                {/* Logo and close button */}
                <div className="flex justify-between">
                  <div className="flex items-center gap-x-1">
                    <Image src="logo.svg" width={50} height={50} alt="LOGO" />
                    <div className="flex flex-col justify-between px-2">
                      <span className="text-3xl font-bold uppercase text-white">
                        Service
                      </span>
                      <span className="text-xs uppercase text-white/30">
                        Center UAE
                      </span>
                    </div>
                  </div>
                  <button
                    className="h-fit p-1"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    {closeIcon}
                  </button>
                </div>
                {/* Menu Options */}
                <div className="flex h-full flex-col justify-between">
                  <div className="flex flex-col py-10">
                    <Link
                      href="/"
                      className="flex justify-between border-t border-white/20 px-2 py-3 font-medium hover:font-bold"
                    >
                      Home
                    </Link>
                    <Link
                      href="/"
                      className="flex justify-between border-t border-white/20 px-2 py-3 font-medium hover:font-bold"
                    >
                      About Us
                    </Link>
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className={`flex items-center justify-between ${isServicesOpen ? "border-y" : "border-t"} border-white/20 px-2 py-3 font-medium hover:font-bold`}
                    >
                      Service Centers
                      <motion.div
                        animate={{
                          rotate: isServicesOpen ? 180 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {chevronUpIcon}
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          className="flex flex-col pl-3"
                          initial={{ x: "-100%", opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: "-100%", opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Link
                            href="/"
                            className="flex justify-between px-2 py-3 font-medium hover:font-bold"
                          >
                            Samsung Service Center
                          </Link>
                          <Link
                            href="/"
                            className="flex justify-between border-t border-white/20 px-2 py-3 font-medium hover:font-bold"
                          >
                            LG Service Center
                          </Link>
                          <Link
                            href="/"
                            className="flex justify-between border-t border-white/20 px-2 py-3 font-medium hover:font-bold"
                          >
                            Siemens Service Center
                          </Link>
                          <Link
                            href="/"
                            className="flex justify-between border-t border-white/20 px-2 py-3 font-medium hover:font-bold"
                          >
                            Bosch Service Center
                          </Link>
                                                  </motion.div>
                      )}
                    </AnimatePresence>
                    <Link
                      href="/"
                      className="flex justify-between border-y border-white/20 px-2 py-3 font-medium hover:font-bold"
                    >
                      Contact Us
                    </Link>
                  </div>
                  <div className="flex flex-col gap-y-3">
                    <div className="flex justify-between">
                      <span>Call Us:</span>
                      <span className="font-bold hover:underline">
                        {phoneNumber}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Whatsapp:</span>
                      <span className="font-bold hover:underline">
                        {phoneNumber}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3 }}
                className="h-full w-full bg-blue-500/25"
                onClick={() => setIsOpen(false)}
              ></motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const barsIcon = (
  <svg
    width="23"
    height="20"
    viewBox="0 0 23 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.43335 3.70428H21.7458C22.1773 3.70428 22.5271 3.35453 22.5271 2.92303V0.96991C22.5271 0.538416 22.1773 0.18866 21.7458 0.18866H1.43335C1.00186 0.18866 0.6521 0.538416 0.6521 0.96991V2.92303C0.6521 3.35453 1.00186 3.70428 1.43335 3.70428ZM1.43335 11.5168H21.7458C22.1773 11.5168 22.5271 11.167 22.5271 10.7355V8.78241C22.5271 8.35092 22.1773 8.00116 21.7458 8.00116H1.43335C1.00186 8.00116 0.6521 8.35092 0.6521 8.78241V10.7355C0.6521 11.167 1.00186 11.5168 1.43335 11.5168ZM1.43335 19.3293H21.7458C22.1773 19.3293 22.5271 18.9795 22.5271 18.548V16.5949C22.5271 16.1634 22.1773 15.8137 21.7458 15.8137H1.43335C1.00186 15.8137 0.6521 16.1634 0.6521 16.5949V18.548C0.6521 18.9795 1.00186 19.3293 1.43335 19.3293Z"
      fill="currentColor"
    />
  </svg>
);

const closeIcon = (
  <svg
    width="18"
    height="19"
    viewBox="0 0 18 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.1914 9.44299L17.0776 4.55676C17.6772 3.95715 17.6772 2.98499 17.0776 2.38489L15.9917 1.29895C15.3921 0.699341 14.4199 0.699341 13.8198 1.29895L8.93359 6.18518L4.04736 1.29895C3.44775 0.699341 2.47559 0.699341 1.87549 1.29895L0.789551 2.38489C0.189941 2.9845 0.189941 3.95666 0.789551 4.55676L5.67578 9.44299L0.789551 14.3292C0.189941 14.9288 0.189941 15.901 0.789551 16.5011L1.87549 17.587C2.4751 18.1866 3.44775 18.1866 4.04736 17.587L8.93359 12.7008L13.8198 17.587C14.4194 18.1866 15.3921 18.1866 15.9917 17.587L17.0776 16.5011C17.6772 15.9015 17.6772 14.9293 17.0776 14.3292L12.1914 9.44299Z"
      fill="white"
    />
  </svg>
);

const whatsappIcon = (
  <svg
    width="512"
    height="512"
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_111_4)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M256 0C397.29 0 512 114.71 512 256C512 397.29 397.29 512 256 512C114.71 512 0 397.29 0 256C0 114.71 114.71 0 256 0ZM377.527 134.844C346.881 104.172 306.126 87.273 262.705 87.256C173.237 87.256 100.421 160.044 100.386 249.512C100.374 278.111 107.848 306.028 122.052 330.634L99.024 414.72L185.072 392.156C208.78 405.083 235.473 411.895 262.64 411.907H262.707C352.166 411.907 424.988 339.11 425.024 249.641C425.041 206.283 408.173 165.514 377.527 134.844ZM262.706 384.501H262.652C238.443 384.491 214.699 377.99 193.985 365.702L189.058 362.778L137.997 376.169L151.626 326.4L148.418 321.298C134.913 299.825 127.781 275.005 127.791 249.522C127.821 175.16 188.343 114.661 262.76 114.661C298.795 114.675 332.668 128.723 358.14 154.215C383.612 179.708 397.632 213.594 397.618 249.631C397.588 323.998 337.067 384.5 262.706 384.501ZM336.709 283.491C332.653 281.462 312.713 271.653 308.994 270.3C305.277 268.947 302.574 268.27 299.87 272.329C297.166 276.388 289.393 285.521 287.027 288.227C284.662 290.932 282.296 291.272 278.24 289.241C274.184 287.213 261.116 282.931 245.625 269.117C233.568 258.367 225.428 245.088 223.062 241.03C220.697 236.971 222.81 234.777 224.841 232.755C226.665 230.939 228.896 228.02 230.924 225.652C232.952 223.284 233.628 221.593 234.98 218.888C236.332 216.181 235.656 213.814 234.642 211.784C233.628 209.755 225.517 189.798 222.137 181.68C218.846 173.774 215.502 174.844 213.012 174.72C210.649 174.602 207.943 174.577 205.239 174.577C202.535 174.577 198.142 175.592 194.423 179.651C190.706 183.71 180.229 193.519 180.229 213.475C180.229 233.432 194.762 252.711 196.79 255.418C198.818 258.124 225.389 299.077 266.074 316.639C275.75 320.816 283.305 323.311 289.195 325.18C298.911 328.265 307.752 327.83 314.741 326.786C322.533 325.622 338.737 316.977 342.116 307.507C345.495 298.036 345.495 289.918 344.482 288.227C343.468 286.536 340.764 285.521 336.709 283.491Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_111_4">
        <rect width="512" height="512" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const chevronUpIcon = (
  <svg
    width="12"
    height="6"
    viewBox="0 0 12 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.0828 5.1172C0.83082 5.3692 1.00928 5.8 1.36565 5.8H10.6343C10.9907 5.8 11.1691 5.3692 10.9172 5.1172L6.28276 0.48288C6.12656 0.32667 5.87336 0.32667 5.71716 0.48288L1.0828 5.1172Z"
      fill="white"
    />
  </svg>
);

export default Header;
