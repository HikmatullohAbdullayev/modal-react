import React from "react";
import OptionIcon from "../../assets/icon/OptionIcon"
import ProductMain from "../product-main/Product_main";

const style = "relative text-white text-sm font-semibold leading-[140%] transition-[0.5ms] duration-[ease-in-out] after:absolute after:hidden after:content-[''] after:w-[37px] after:h-0.5 after:bg-[#EA7C69] after:rounded-[5px] after:top-[31.5px] hover:text-[#EA7C69] hover:after:block hover:after:text-[#EA7C69] "

function ProductHeader(props) {
  return (
    <>
  <div className="flex flex-col w-[750px]  ">
  <div className="flex justify-between p-8  ">
      <h1 className="text-white text-xl font-medium ">Product Management</h1>
      <div className="flex p-3 rounded-lg  border-[color:var(--Base-Dark-Line,#393C49)] shadow-[0px_8px_24px_0px_rgba(146,136,224,0.30)] border-solid; cursor-pointer">
        <span><OptionIcon/></span>
        <p className="ml-2 font-medium leading-5 text-white ">Manage Categories</p>
      </div>
    </div>
      <div className="flex items-center gap-8 pl-8 pb-[13px];">
        <a
          className={style}
          href="#"
        >
          Hot Dishes
        </a>
        <a
          className={style}
          href="#"
        >
          Cold Dishes
        </a>
        <a
          className={style}
          href="#"
        >
          Soup
        </a>
        <a
          className={style}
          href="#"
        >
          Grill
        </a>
        <a
          className={style}
          href="#"
        >
          Appetizer
        </a>
        <a
          className={style}
          href="#"
        >
          Dessert
        </a>
      </div>
  </div>
    </>
  );
}

export default ProductHeader;
