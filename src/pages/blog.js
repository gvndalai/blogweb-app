import React from "react";
import { Tolgoi } from "@/components/Tolgoi";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/Card";
import Head from "next/head";
const Blog = () => {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <div className=" bg-white flex flex-col items-center gap-[100px]">
        <Tolgoi />
        <div className="">
          <Card />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Blog;
