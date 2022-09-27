import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          My name is Vicky , I'm a web application developer with 3+ years of
          experience to create and developing web applications. i able to work
          with full-stack JavaScript (MERN), Laravel, writing frontend and
          back-end code integrated with framework and APIs, Utilizing and
          implementing attractive, responsive, and mobilefriendly website
          contexts and elements.
        </p>

        <br />
{/* 
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          qui fugit numquam! Cum vitae temporibus molestiae dicta illum
          laboriosam similique at mollitia nihil iusto repellat numquam eos illo
          perspiciatis a unde minima commodi id cupiditate laborum iste, beatae
          maiores. Voluptatum quisquam dignissimos tempore asperiores sit
          ratione officiis officia alias vitae.
        </p> */}
      </div>
    </div>
  );
};

export default About;
