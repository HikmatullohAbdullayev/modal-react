
import HeartIcon from "../assets/icon/HeartIcon";

import React from "react";

function Setting(props) {
const data = [
    {
      id: "1",
      title: "Appereance",
      text: "Dark and Light mode, Font size",
    },
    {
      id: "2",
      title: "Your Restaurant",
      text: "Dark and Light mode, Font size",
    },
    {
      id: "3",
      title: "Products Management",
      text: "Dark and Light mode, Font size",
    },
    {
      id: "4",
      title: "Notifications",
      text: "Manage your product, pricing, etc",
    },
    {
      id: "5",
      title: "Security",
      text: "Configure Password, PIN, etc",
    },
    {
      id: "6",
      title: "Security",
      text: "Configure Password, PIN, etc",
    },
    {
      id: "7",
      title: "About Us",
      text: "Configure Password, PIN, etc",
    },
  ];
return( 
    <div className="w-[275px] rounded-2xl mr-6" >
   {data.map((item) =>(
        <ul key={item.id} className=" gap-1 p-6 bg-[#1F1D2B] hover:bg-[#EA7C69] hover:text-[#EA7C69] ">
            <li className="font-medium text-white text-start text-[14px] " ><p>{item.title}</p></li>
            <li className="font-normal text-xs text-[#ABBBC2]">{item.text}</li>
        </ul>
    ))}
    </div>
)


}

export default Setting;

