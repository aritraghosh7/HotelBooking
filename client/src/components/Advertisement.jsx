import React from "react";
import backgroundImage from "../assets/Rectangle 18.png";
import smartphoneImage from "../assets/Isolated_right_hand_with_smartphone 2.png";

const Advertisement = () => {
  return (
    <div
      className="relative w-[94%] mx-auto h-64 md:h-[18rem] flex items-center justify-between mt-14 px-6 rounded-xl overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Text + Button */}
      <div className="flex flex-col space-y-4 z-10 max-w-[50%]">
        <h2 className="text-xl md:text-3xl font-bold text-white leading-tight">
          Download the mobile application for <br />
          bonus coupons and travel codes
        </h2>
        <button className="w-[14rem] py-2 md:px-6 md:py-3 bg-blue-500 hover:bg-blue-600 transition text-white rounded-md font-semibold">
          Download mobile app
        </button>
      </div>

      {/* Smartphone Image */}
      <img
        src={smartphoneImage}
        alt="Smartphone"
        className="hidden md:block w-[40rem] object-contain scale-125" //h-auto object-contain translate-x-8 scale-125
      />
    </div>
  );
};

export default Advertisement;

