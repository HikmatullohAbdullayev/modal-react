import React from "react";
import LogoIcon from "../assets/icon/LogoIcon";
import HomeIcon from "../assets/icon/HomeIcon";
import DiscountIcon from "../assets/icon/DiscountIcon";
import DashboardIcon from "../assets/icon/DashboardIcon";
import NotificationIcon from "../assets/icon/NotificationIcon";
import MessaageIcon from "../assets/icon/MessageIcon";
import SettingIcon from "../assets/icon/SettingIcon";
import LogOutIcon from "../assets/icon/LogOutIcon";

function Sidebar(props) {
  return (
    <>
      <div className="bg-[#1F1D2B] flex  flex-col items-center  h-full ">
        <a className="mx-6" href="#">
          <span className="m-2">
            <LogoIcon />
          </span>
        </a>
        <div className="flex justify-between flex-col items-center  fill-[#EA7C69">
          <span
            className=" bg-transparent fill-[#EA7C69]  border transition-[0.2ms] duration-[ease-in-out] cursor-pointer ml-3 mr-[30px,] mt-[15px] mb-[12px] p-3.5 rounded-lg border-solid border-[#EA7C69]
            hover:bg-[#EA7C69] hover:fill-white
"
          >
            <HomeIcon />
          </span>
          <span
            className="  bg-transparent fill-[#EA7C69]  border transition-[0.2ms] duration-[ease-in-out] cursor-pointer ml-3 mr-[30px,] mt-[15px] mb-[12px] p-3.5 rounded-lg border-solid border-[#EA7C69]
            hover:bg-[#EA7C69] hover:fill-white
"
          >
            <DiscountIcon />
          </span>
          <span
            className="  bg-transparent fill-[#EA7C69]  border transition-[0.2ms] duration-[ease-in-out] cursor-pointer ml-3 mr-[30px,] mt-[15px] mb-[12px] p-3.5 rounded-lg border-solid border-[#EA7C69]
            hover:bg-[#EA7C69] hover:fill-white
"
          >
            <DashboardIcon />
          </span>
          <span
            className="  bg-transparent fill-[#EA7C69]  border transition-[0.2ms] duration-[ease-in-out] cursor-pointer ml-3 mr-[30px,] mt-[15px] mb-[12px] p-3.5 rounded-lg border-solid border-[#EA7C69]
            hover:bg-[#EA7C69] hover:fill-white
"
          >
            <MessaageIcon />
          </span>
          <span
            className=" bg-transparent fill-[#EA7C69]  border transition-[0.2ms] duration-[ease-in-out] cursor-pointer ml-3 mr-[30px,] mt-[15px] mb-[12px] p-3.5 rounded-lg border-solid border-[#EA7C69]
            hover:bg-[#EA7C69] hover:fill-white
"
          >
            <NotificationIcon />
          </span>
          <span
            className="  bg-transparent fill-[#EA7C69]  border transition-[0.2ms] duration-[ease-in-out] cursor-pointer ml-3 mr-[30px,] mt-[15px] mb-[12px] p-3.5 rounded-lg border-solid border-[#EA7C69]
            hover:bg-[#EA7C69] hover:fill-white
"
          >
            <SettingIcon />
          </span>
        </div>
        <button
          className="  bg-transparent fill-[#EA7C69]  border transition-[0.2ms] duration-[ease-in-out] cursor-pointer ml-3 mr-[30px,] mt-[25px] mb-[12px] p-3.5 rounded-lg border-solid border-[#EA7C69]
          hover:bg-[#EA7C69] hover:fill-white 
"
        >
          <LogOutIcon />
        </button>
      </div>
    </>
  );
}

export default Sidebar;
