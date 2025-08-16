import React, { useState } from "react";

// import { Link } from "react-router-dom";

const Hero = ({ scrollToSearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <div className="container h-screen mx-auto px-8 sm:px-6 lg:px-4">
        {/* the entire parent */}
        <div className="flex  pt-4">
          <div className="w-[100%] flex justify-between md:basis-1/4 mb-[6rem]">
            <img
              src="/assets/images/logo.svg"
              className="w-[4.5rem] cursor-pointer"
            />
            <button>
              <img className="cursor-pointer md:hidden" src="/assets/images/icon-menu.svg" onClick={()=> setIsOpen(!isOpen)}/>
            </button>
          </div>

          {/* navigation links */}
          <nav className={`${ isOpen ? "block w-[90%] bg-violet  p-6 mx-auto text-center absolute top-[50px] rounded-lg" : "hidden p-0 text-left  bg-violet md:bg-transparent  md:relative basis-3/4  md:flex  text-sm"}`}>
            

            {/* first set */}
            <ul className=" basis-2/3 md:flex justify-start font-[600] text-grey">
              <li className={`${isOpen ? "mb-4" :"mr-4"}`}>
                <a href="#" >
                  Features
                </a>
              </li>
              <li className={`${isOpen ? "mb-4" :"mr-4"}`}>
                <a href="#">
                  Pricing
                </a>
              </li>
              <li className={`${isOpen ? "mb-4" :"mr-4"}`}>
                <a href="#" className="">
                  Resources
                </a>
              </li>
            </ul>
            <hr className="w-[100%] my-4 md:hidden"/>
            {/* second set */}
            <ul className=" basis-1/3 md:flex justify-end font-[600] text-grey">
              <li className={`${isOpen ? "mb-4" :"mr-4"}`}>
                <a href="#" className="">
                  Log in
                </a>
              </li>
              <li className={`${isOpen ? "mb-8" :"mr-4"}`}>
                <a
                  href="#"
                  className={`${isOpen ? "mb-4" :"mr-4 bg-cyan text-white p-[10px] rounded-2xl"}`}
                >
                  Sign Up
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <section className="flex flex-col-reverse items-center md:flex-row gap-[3rem] mb-6">
          <div className="hero-1 text-center md:text-left basis-2/5 md:basis-3/5 md:mt-12">
            <h1>More than just <br /> shorter links</h1>
            <p className="text-xs md:text-lg text-[grey] mb-6">
              Build your brand's recognition and get detailed insights on how
              your links are performing.{" "}
            </p>

            <button
              id="button"
              className="bg-cyan text-white p-[12px] rounded-2xl"
              onClick={scrollToSearch}
            >
              Get Started
            </button>
          </div>

          <div className="hero-2 ">
            <img
              className="w-[90%] md:w-[100%]"
              src="/assets/images/illustration-working.svg"
              alt="illustration"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
