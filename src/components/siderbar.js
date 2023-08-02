import React, {useState} from "react";
import { FaTachometerAlt,FaRegSun, FaChevronCircleRight, FaChevronLeft } from "react-icons/fa";
import myImage from "../assets/images/logo.png"; 
import { Link } from "react-router-dom";

const Sidebar = () => {
  
  return (
    <div className="bg-[#253124] h-screen px-[25px]">
      <div className="px-[15px] py-[30px] flex items-center justify-center border-b-[1px] border-[#EDeded]/[0.3]">
        <h1 className="text-white text-[20px] leading-[24px] font-extrabold cursor-pointer">
          <img src={myImage} alt="Sped Image"/>
        </h1>
      </div>

      <div className="flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3]">
        <FaTachometerAlt color="white" />
          <p className="text-[14px] leading-[20px] font-bold text-white">
             <Link to="/dashboard">Dashboard </Link>
          </p>
      </div>

      <div className="pt-[15px] border-b[1px] border-[]">
          <p className="text-[10px] font-extrabold leading-[16px] text-white/[0.4]">Uploads</p>
          <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
              <div className="flex items-center gap-[10px]">
                  <FaRegSun color="white"/>
                  <p className="text-[14px] leading-[20px] font-normal text-white">
                    <Link to="/uploads">Uploads</Link>
                  </p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Sidebar;
