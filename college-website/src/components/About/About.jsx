import React from "react";
import AboutImg from "../../assets/AboutImage.jpg";

const About = () => {
  return (
    <div className="max-w-[1320px] md:py-[80] py-5 flex mx-auto md:flex-row flex-col">
      <div className="basis-[45%] pb-5 ">
        <img
          src={AboutImg}
          alt=""
          className="w-full "
        />
      </div>
      <div className="basis-[55%] px-5">
        <h1 className="text-4xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, ipsam.</h1>
        <p className="py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptatibus, quasi delectus eos, voluptatem repellat molestiae sapiente officiis corporis consequatur placeat a quo nostrum! Eligendi omnis et corrupti alias ullam quidem temporibus error .</p>
        <p className="py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptatibus, quasi delectus eos, voluptatem repellat molestiae sapiente officiis corporis consequatur placeat a quo nostrum! Eligendi omnis et corrupti alias ullam quidem temporibus error!</p>
        <p className="py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptatibus, quasi delectus eos, voluptatem repellat molestiae sapiente officiis corporis consequatur placeat a quo nostrum! Eligendi omnis et corrupti alias ullam quidem temporibus error!</p>
      </div>
    </div>
  );
};

export default About;
