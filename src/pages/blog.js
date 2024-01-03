import React from "react";
import { Header, Tolgoi } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/Card";
import Head from "next/head";
const Blog = () => {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <div className="flex flex-col items-center mb-[100px] sm:w-[1920px] w-[390px] bg-white flex flex-col items-center gap-[100px]">
        <Header />
        <div className="">
          <Card />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Blog;
