import React from "react";
import { BlueButton } from "@/components/BlueButton";
import { Header, Tolgoi } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Head from "next/head";
import { useRouter } from "next/router";
const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <div className="flex flex-col items-center mb-[100px] sm:w-[1920px] w-[390px] bg-white flex flex-col items-center gap-[100px]">
        <Header />
        <div className="flex flex-col items-center mt-[100px]">
          <div className="flex flex-col gap-[20px] items-center w-[769px] h-[389px] p-[14px] px-[10px] pt-[0px] pb-[10px] flex-shrink-0">
            <div className="flex flex-col gap-[20px] w-[624px] ">
              <div className="font-work-sans text-2xl font-semibold leading-10 text-black">
                Contact Us
              </div>
              <div className="w-[624px] font-plus-jakarta-sans text-base font-normal leading-6 text-secondary-500 text-slate-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam
              </div>
            </div>
            <div className="flex gap-[50px] justify-center ">
              <div className="flex flex-col items-start gap-[10px] w-[294px] h-[133px] p-4 rounded-[12px] border border-solid border-1 border-gray-200">
                <div className="font-work-sans text-xl font-semibold leading-10 text-black">
                  Address
                </div>
                <div className="font-plus-jakarta-sans text-[16px] text-slate-500">
                  1328 Oak Ridge Drive, Saint <br />
                  Louis, Missouri
                </div>
              </div>
              <div className="flex flex-col items-start gap-[10px] w-[294px] h-[133px] p-4 rounded-[12px] border border-solid border-1 border-gray-200">
                <div className="font-work-sans text-xl font-semibold leading-10 text-black">
                  Contact
                </div>
                <div className="font-plus-jakarta-sans text-[16px] text-slate-500">
                  313-332-8662
                  <br />
                  info@email.com
                </div>
              </div>
            </div>
          </div>
          <div className="p-[29px] px-[130px] pb-[26px] pl-[35px] rounded-[10px] bg-gray-100 flex flex-col items-start gap-[20px] w-[624px]">
            <div className="text-black font-worksans text-xl font-semibold leading-26  ">
              Leave a message
            </div>
            <div className="w-full flex flex-col gap-[20px]">
              <div className="flex justify-between">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="rounded-[5px]"
                />
                <input
                  type="text"
                  placeholder="Your Email"
                  className="rounded-[5px]"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="pl-[20px] pt-[14px] pr-[14px] pb-[14px] w-full rounded-[5px]"
              ></input>
              <input
                type="text"
                placeholder="Write a message"
                className="w-full  h-[134px] rounded-[5px] flex items-start p-[20px]"
              />
            </div>
            <BlueButton text="Send message" />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Contact;
