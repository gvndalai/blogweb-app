import React from "react";
import { BlueButton } from "./BlueButton";
import { useState, useEffect } from "react";
export const Hero = () => {
  const [articles, setArticles] = useState([]);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);
  function rightButton() {
    setIndex(index + 1);
  }
  function leftButton() {
    setIndex(index - 1);
  }

  let article = articles[index];
  return (
    <div className="flex flex-col gap-[11px]">
      <div className="relative">
        <div>
          <img
            src={
              article?.cover_image
                ? article?.cover_image
                : "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
            }
            className="w-[1216px] h-[600px] rounded-[12px] transition-opacity duration-500 ease-in-out"
          />
        </div>

        <div className="w-[598px] p-[40px] absolute left-[13px] bottom-[13px] bg-white rounded-[12px] flex flex-col items-start gap-[24px]">
          {" "}
          <div className="flex flex-col gap-[16px]">
            <BlueButton text="Technology" />
            <h1 className="text-secondary-800 font-worksans text-4xl font-semibold leading-10">
              {" "}
              <p>{article ? article.description : ""}</p>
            </h1>
          </div>
          <p className="text-gray-500 font-worksans text-base font-normal leading-6">
            August 20, 2022
          </p>
        </div>
      </div>
      <div className="flex justify-end gap-[9px]">
        <div className="hover:bg-slate-200" onClick={() => leftButton()}>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="39"
              height="39"
              rx="5.5"
              stroke="#696A75"
            />
            <path
              d="M23.5 27L16 19.5L23.5 12"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="hover:bg-slate-200" onClick={() => rightButton()}>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="39"
              height="39"
              rx="5.5"
              stroke="#696A75"
            />
            <path
              d="M16 12L23.5 19.5L16 27"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
