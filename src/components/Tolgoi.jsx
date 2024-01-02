import React from "react";
import { MetaBlogIcon } from "@/icons/metaBlogIcon";
import { SearchIcon } from "@/icons/searchIcon";
import { Menu } from "@/icons/Menu";
import Link from "next/link";
export const Tolgoi = () => {
  return (
    <div className="sm:px-[350px] p-5 sm:py-8 flex sm:gap-[118px] items-center justify-between w-full">
      <MetaBlogIcon />
      <Menu responsive="sm:hidden block" />
      <div className=" sm:block hidden sm:flex sm:items-center sm:gap-[21px]">
        {" "}
        <div className="flex items-center gap-10 w-[667px] text-gray-700 font-work-sans text-base font-normal leading-6 justify-center">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="flex items-center gap-[12px] p-2 pl-4 w-[166px] justify-between bg-gray-100 rounded-[5px] ">
          <div className="flex justify-start text-gray-400">Search</div>
          <SearchIcon />
        </div>
      </div>
    </div>
  );
};
