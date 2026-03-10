import React from "react";

function Stats({ Stat, Name }) {
  return (
    <>
      <div className="max-w-[255px] w-full h-[128px] border border-[rgba(255,255,255,0.2)] bg-transparent p-[23px] gap-[15px] flex flex-col max-[600px]:max-w-full max-[600px]:flex-row max-[600px]:justify-between max-[600px]:items-center max-[600px]:px-[24px] max-[600px]:h-[48px]">
        <span className="text-[rgba(255,255,255,0.5)] font-[700] text-[16px] uppercase whitespace-nowrap">
          {Name}
        </span>
        <h1 className="text-white font-[400] text-[35px] uppercase max-md:text-[24px] whitespace-nowrap max-[600px]:text-[20px]">
          {Stat}
        </h1>
      </div>
    </>
  );
}

export default Stats;
