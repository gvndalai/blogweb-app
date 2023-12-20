import React, { useEffect, useState } from "react";

export const Card = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);

  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-4 p-4 grid grid-cols-3">
        {articles.map((article) => (
          <div className="w-[392px]">
            <button className="bg-blue-500 rounded-[6px] px-[10px] py-[4px] text-white font-worksans text-sm font-medium leading-5">
              Technology
            </button>
            <p className="text-secondary-800 font-worksans text-xl font-semibold leading-7">
              {article.description}
            </p>
            <p className="text-secondary-400 font-worksans text-base font-normal leading-6">
              {article.readable_publish_date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
