import React, { useState, useEffect } from "react";
import { BlueButton } from "./BlueButton";

export const TrendingCard = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => {
        const sortedArticles = data.sort(
          (a, b) => b.comments_count - a.comments_count
        );
        setArticles(sortedArticles);
        console.log(sortedArticles);
      })
      .catch((error) => {
        console.log(error, "error");
      });
  }, []);
  //   for (let j = 0; j < 4; j++) {
  //     let highFour = filteredCommentCount[j];
  //   }
  return (
    <div className="flex flex-col gap-[30px]">
      <div>Trending</div>
      <div className="flex gap-[20px]">
        {articles.slice(0, 4).map((article) => (
          <div className="flex w-[289px] h-[320px] flex-col relative items-center justify-end">
            <div className="bg">
              <img
                src={article.cover_image}
                className="w-[289px] h-[320px] rounded-[12px] "
              ></img>
            </div>
            <div className="bg-black opacity-50 absolute top-0 w-[289px] h-[320px] rounded-[12px]"></div>

            <div className="text-white absolute mb-[28px] font-worksans text-lg font-semibold leading-7">
              <BlueButton text={article.tag_list[0]} />
              <div className="w-[230px] flex justify-center">
                {article.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
