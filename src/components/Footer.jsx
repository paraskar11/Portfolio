import React from "react";

import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
function Footer() {
  return (
    <>
      {/* <hr/> */}
      <footer className="py-12 bg-[#342638] text-white">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <IoLogoGithub size={24} />
              <FaLinkedin size={24} />
              <SiLeetcode size={24} />
              <FaSquareXTwitter size={24} />
            </div>
            <div className="mt-8 border-t border-white-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2024 Made by Abhishek. All rights reserved.
              </p>
              <p className="text-sm">JSPM RSCOE</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
