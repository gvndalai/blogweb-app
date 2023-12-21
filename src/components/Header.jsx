import React from "react";
import { MetaBlogIcon } from "@/icons/MetaBlogIcon";
import { SearchIcon } from "@/icons/SearchIcon";
import { Menu } from "@/icons/Menu";
export const Header = () => {
  return (
    <div className="sm:px-[350px] p-5 sm:py-8 flex sm:gap-[118px] items-center justify-between w-full">
      <MetaBlogIcon />
      <Menu responsive="sm:hidden block" />
      <div className=" sm:block hidden sm:flex sm:items-center sm:gap-[21px]">
        {" "}
        <div className="flex items-center gap-10 w-[667px] text-gray-700 font-work-sans text-base font-normal leading-6 justify-center">
          <div>Home</div>
          <div>Blog</div>
          <div>Contact</div>
        </div>
        <div className="flex items-center gap-[12px] p-2 pl-4 w-[166px] justify-between bg-gray-100 rounded-[5px] ">
          <div className="flex justify-start text-gray-400">Search</div>
          <SearchIcon />
        </div>
      </div>
    </div>
  );
};
