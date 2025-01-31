import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import c_image from "../../public/c_image.png";
import cpp_image from "../../public/cpp_image.png";
import javascript from "../../public/javascript.png";
import mongodb from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import node from "../../public/node.png";
import bootstrap from "../../public/bootstrap.png";
import talwindcss from "../../public/talwindcss.png";
import mysql from "../../public/mysql.png";

function Experiance() {
  const cardItem = [
    {
      id: 1,
      logo: c_image,
      name: "C",
    },
    {
      id: 2,
      logo: cpp_image,
      name: "CPP",
    },
    {
      id: 3,
      logo: html,
      name: "HTML",
    },
    {
      id: 4,
      logo: css,
      name: "CSS",
    },
    {
      id: 5,
      logo: javascript,
      name: "JavaScript",
      
    },
    {
      id: 6,
      logo: mongodb,
      name: "MongoDB",
    },
    {
      id: 7,
      logo: express,
      name: "ExpressJS",
    },
    {
      id: 8,
      logo: reactjs,
      name: "ReactJs",
    },
    {
      id: 9,
      logo: node,
      name: "NodeJS",
    },
    {
      id: 10,
      logo: bootstrap,
      name: "Bootstrap",
    },
    {
      id: 11,
      logo: talwindcss,
      name: "TalwindCSS",
    },
    {
      id: 12,
      logo: mysql,
      name: "MySQL",
    },
   
  ];
  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 bg-[#220E27] text-white"
    >
      <div>
        <div><h1 className="text-3xl font-bold mb-5 text-blue-400 border-2 border-blue-500 rounded-lg p-2 inline-block shadow-lg shadow-blue-500">Experiance</h1></div>
        <p className="text-white">
          I've 0-1 years of experiance in below technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center shadow-lg shadow-blue-500/50 rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
