import React from "react";

function Stats() {
  return (
    <div className="w-[100%] py-[2.5rem] bg-light-grey">
      {/* header part */}
      <div className="max-w-xl mx-auto mb-12 text-center">
        <h2 className="text-3xl font-[700] mb-2">Advanced Statistics </h2>
        <p className="text-sm md:text-lg">
          Track how your links are performing across teh web with our advanced
          statistics dashboard.
        </p>
      </div>

      {/*  brand recognition and the likes*/}
      <div className="flex flex-col md:flex-row w-[80%] mx-auto mb-10 gap-4">
        {/* 1 */}
        <div className=" bg-white p-4 rounded-md mt-4 md:mt-0 shadow md:translate-y-0 relative ">
          <div className="bg-violet w-[50px] h-[50px] flex justify-center items-center rounded-full absolute top-[-20px]">
            <img
              src="./src/assets/images/icon-brand-recognition.svg"
              alt="brand recognition"
              className="w-[30px] h-[30px]"
            />
          </div>
          <h3 className="text-lg font-[600] mt-8 mb-4">Brand Recognition</h3>
          <p className="text-grey text-sm">
            Boost your brand recongition with each click. Generic links don't
            eman a thing. Branded links help instil confidence in your content.
          </p>
          <span className="after:content-[''] after:bg-cyan-500 after:w-[5px] md:after:w-[20px] after:h-[35px] md:after:h-[5px] after:absolute after:right-[50%] md:after:right-[-20px] after:bottom-[-23%] md:after:bottom-[28%]"/>
        </div>

        {/* 2 */}
        <div className="bg-white p-6 rounded-md mt-4 md:mt-6 shadow md:translate-y-4 relative">
          <div className="bg-violet w-[50px] h-[50px] flex justify-center items-center rounded-full absolute top-[-20px]">
            <img
              src="./src/assets/images/icon-detailed-records.svg"
              alt="detailed records"
              className="w-[30px] h-[30px]"
            />
          </div>
          <h3 className="text-lg font-[600] mt-8 mb-4">Detailed Records</h3>
          <p className="text-grey text-sm">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
          <span className="after:content-[''] after:bg-cyan-500 after:w-[5px] md:after:w-[20px] after:h-[40px] md:after:h-[5px] after:absolute after:right-[50%] md:after:right-[-20px] after:bottom-[-23%] md:after:bottom-[28%]"/>

        </div>

        {/* 3 */}
        <div className="bg-white p-8 rounded-md mt-4 md:mt-10 shadow md:translate-y-8 relative">
          <div className="bg-violet w-[50px] h-[50px] flex justify-center items-center rounded-full absolute top-[-20px]">
            <img
              src="./src/assets/images/icon-fully-customizable.svg"
              alt="fully customizable"
              className="w-[30px] h-[30px]"
            />
          </div>
          <h3 className="text-lg font-[600] mt-8 mb-4">Fully Customizable</h3>
          <p className="text-grey text-sm">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement
          </p>
        </div>
      </div>
    </div>
  );
}

export default Stats;
