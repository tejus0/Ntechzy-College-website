import React from "react";
import AboutImg from "../../assets/AboutImage.jpg";

const About = () => {
  return (
    <div className="max-w-[1320px] md:py-[80] py-5 flex mx-auto">
      <div className="basis-[45%] border-8 border-indigo-600">
        <img
          src={AboutImg}
          alt=""
          className="w-full "
        />
      </div>
      <div className="basis-[55%]"></div>
    </div>
  );
};

export default About;
