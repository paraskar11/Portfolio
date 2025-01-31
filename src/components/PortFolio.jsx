import React from "react";
import userms from "../../public/userms.png";
import cropcareAI from "../../public/cropcareAI.png";
import crud from "../../public/crud.png";
import gpt from "../../public/gpt.png";
import currency from "../../public/currency.png";
import clone from "../../public/clone.png";
import tictactoe from "../../public/tictactoe.png";
import calculator from "../../public/calculator.png";

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: userms,
      text: "A database-driven user management system .",
      source_code: "https://github.com/paraskar11/DBMS-User-Management-System",
      name: "User Management System",
    },
    {
      id: 2,
      logo: cropcareAI,
      text: "AI-based crop disease prediction system.",
      source_code: "https://github.com/paraskar11/crop_AI",
      name: "CropCareAI",
    },
    {
      id: 3,
      logo: crud,
      text: "A CRUD application using DBMS concepts.",
      source_code: "https://github.com/paraskar11/DBMS-CRUD-App",
      name: "CRUD App",
    },
    {
      id: 4,
      logo: gpt,
      text: "Differentiate GPT-generated and human text.",
      source_code: "https://github.com/paraskar11/Website",
      name: "GPT Text Classifier",
    },
    {
      id: 5,
      logo: currency,
      text: "A real-time currency converter built with JavaScript.",
      source_code: "https://github.com/paraskar11/currency_converter_1",
      name: "Currency Converter",
    },
    {
      id: 6,
      logo: clone,
      text: "A frontend clone of Amazon with a responsive UI.",
      source_code: "https://github.com/paraskar11/amazon_clone",
      name: "Amazon Clone (Frontend)",
    },
    {
      id: 7,
      logo: tictactoe,
      text: "A classic Tic Tac Toe game built using HTML, CSS, and JavaScript.",
      source_code: "https://replit.com/@AbhishekParaska/tictactoegame#index.html",
      name: "Tic Tac Toe",
    },
    {
      id: 8,
      logo: calculator,
      text: "A simple JavaScript-based calculator with basic operations.",
      source_code: "https://replit.com/@AbhishekParaska/scripting",
      name: "Calculator",
    },
  ];  
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 bg-[#220E27] text-white"
    >
      <div>
        <div><h1 className="text-3xl font-bold mb-5 text-blue-400 border-2 border-blue-500 rounded-lg p-2 inline-block shadow-lg shadow-blue-500">PortFolio</h1></div>
        <span className=" text-green-600 font-semibold text-xl ">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, text,source_code,name }) => (
            <div
              className="md:w-[310px] md:h-[350px]  bg-black  rounded-lg shadow-lg shadow-blue-500/50 p-1 cursor-pointer hover:scale-110 duration-300 mt-2"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px] mt-4 ml-4"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2 mt-2 ml-4">{name}</div>
                <p className="px-2 text-gray-700 mt-4 ml-4">
                {text}
                </p>
              </div>
              <div className=" px-6 py-4 space-x-3 justify-around  ">
                {/* <a href="video" target="_blank" ><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"> 
                  Video
                </button>
                </a> */}
                <a href={source_code} target="_blank" ><button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                  View
                </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
