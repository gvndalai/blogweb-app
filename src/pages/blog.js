import React from "react";
import { Tolgoi } from "@/components/Tolgoi";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/Card";
const Blog = () => {
  return (
    <>
      <Tolgoi />
      <div className=" bg-white flex flex-col items-center gap-[100px]">
        <div className="">
          <Card />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Blog;
