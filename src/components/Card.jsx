import React, { useEffect, useState } from "react";

export const Card = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => {
        console.log(error, "error");
      });
  }, []);

  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-4 p-4 grid grid-cols-3 ">
        {articles.map((article) => (
          <div className="w-[392px] border border-gray-200 p-[16px] gap-[16px] rounded-[6px]">
            <img src={article.social_image} className="w-full h-[210px]"></img>
            <div className="p-2 flex flex-col gap-5">
              <div className="flex flex-col gap-4">
                <button className="text-blue-500 font-worksans text-base font-medium leading-5 bg-gray-100 flex items-center justify-center gap-1 p-1 rounded-[6px] w-fit">
                  Technology
                </button>

                <p className="text-secondary-800 font-worksans font-semibold leading-7 text-2xl">
                  {article.description}
                </p>
              </div>
              <div className="text-secondary-400 font-worksans text-base font-normal leading-6 text-gray-600 flex gap-[20px]">
                <p>{article.user.twitter_username}</p>
                <p>{article.readable_publish_date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
