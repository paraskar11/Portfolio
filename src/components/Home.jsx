import React from "react";

import pic from "../../public/profile_photo.jpg";

import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28 bg-[#220E27] text-white"
      >
        <div className="flex flex-col md:flex-row ">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              {/* <span >Developer</span> */}
              <ReactTyped
                className="text-green-500 font-bold"
                strings={[" Developer", " Programmer", " Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
            👋 Hi, I'm Abhishek! I'm a Computer Science student passionate about Data Structures & Algorithms (DSA) and Web Development. I thrive on solving complex problems and building efficient, scalable solutions. Beyond my domain, I'm always eager to explore new technologies, whether it's AI, Open Source, or Full-Stack Development. I believe in continuous learning and innovation, always ready to take on new challenges and build something impactful. 🚀
            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0 ">
              <div className="  space-y-2">
                <h1 className="font-bold text-center ">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://github.com/paraskar11" target="_blank">
                    <IoLogoGithub className="text-2xl cursor-pointer " />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/abhishek-paraskar-5678a9257/" target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://leetcode.com/u/abhishekparaskar79/" target="_blank">
                    <SiLeetcode  className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/AbhishekPa14502" target="_blank">
                    <FaSquareXTwitter className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full cursor-pointer" />
                  <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full cursor-pointer" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full cursor-pointer" />
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[450px] border-2  border-blue-500 shadow-lg shadow-blue-500"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* <hr /> */}
    </>
  );
}

export default Home;
