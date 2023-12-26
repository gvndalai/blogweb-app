import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Card } from "@/components/Card";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Blog Page</title>
        <meta
          description="Check out our blog page"
          content="Check my first blog web page"
        ></meta>
      </Head>
      <div className="sm:w-[1920px] w-[390px] bg-white flex flex-col items-center gap-[100px]">
        <Header />
        <Hero />
        <Card />
      </div>
    </>
  );
}
