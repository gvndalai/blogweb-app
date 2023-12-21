import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Card } from "@/components/Card";
export default function Home() {
  return (
    <>
      <div className="sm:w-[1920px] w-[390px] bg-white flex flex-col items-center gap-[100px]">
        <Header />
        <Hero />
        <Card />
      </div>
    </>
  );
}
