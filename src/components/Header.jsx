import React from "react";
import { MetaBlogIcon } from "@/icons/MetablogIcon";
import { SearchIcon } from "@/icons/SearchIcon";
export const Header = () => {
  return (
    <div className="px-[350px] py-8 flex gap-[118px] items-center">
      <MetaBlogIcon />
      <div className="flex items-center gap-[21px]">
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
