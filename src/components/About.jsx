import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 bg-[#220E27] text-white"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5 text-blue-400 border-2 border-blue-500 rounded-lg p-2 inline-block shadow-lg shadow-blue-500">About</h1>
        <p>
          Hello, I'm Abhishek, a passionate Web developer with a keen eye for
          MERN Stack . With a background in IT, I strive to create impactful and
          visually stunning Software solutions that leave a lasting impression.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <span>
          B.Tech in Computer Science & Engineering, JSPM Rajarshi Shahu College
          of Engineering, Pune (Autonomous Institute Affiliated to SPPU), Expected 2026
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <span>
          Proficient in: C++, Python(Intermediate), Java(Intermediate), SQL,
          JavaScript <br />
          Experienced with: Data Structures & Algorithms (DSA), MERN Stack,
          Full-Stack Web Development, MongoDB, Flask <br />
          Strong grasp of: Object-Oriented Programming (OOP), Web Development
          Principles, Database Management Systems (DBMS) <br />
          Excellent problem-solving skills with a focus on optimization and
          efficiency <br />
          Effective communicator and collaborator, with experience working in
          teams on diverse projects
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Professional Experience
        </h1>
        <span>
          Looking for Opportunities as a Fresher | Currently seeking roles in
          Web Development, Data Science, or Software Engineering
          <br />
          Freelance Web Developer, Self-Employed, [2024]
          <br />
          - Designed and developed several web applications using MERN Stack
          (MongoDB, Express.js, React, Node.js)
          <br />
          - Built dynamic websites and integrated them with databases to enhance
          functionality and user experience
          <br />
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Achievements & Awards
        </h1>
        <span>Codecraft Finalist, Apptware Ltd, Pune, 2025</span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
          My mission is to leverage my skills and creativity to deliver
          innovative <b>web development and software solutions</b> that exceed
          client expectations and contribute positively to the digital
          landscape. I am committed to continuous learning and growth, always
          seeking new challenges and opportunities to expand my horizons in the
          fields of <b>Data Structures & Algorithms, Full-Stack Web Development,
          and AI</b>.
        </p>
      </div>
    </div>
  );
}

export default About;
