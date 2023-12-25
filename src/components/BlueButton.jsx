import React from "react";
export const BlueButton = (button) => {
  return (
    <button
      className={`flex items-center justify-center gap-4 px-[10px] py-[4px] rounded-[6px] bg-blue-500 text-white font-worksans text-sm font-medium leading-5 w-fit`}
    >
      {" "}
      {button.text}{" "}
    </button>
  );
};
