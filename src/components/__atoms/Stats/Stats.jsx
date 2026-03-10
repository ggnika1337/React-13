import React from "react";

function Stats({ Stat, Name }) {
  return (
    <>
      <div className="max-w-[255px] w-full h-[128px] border border-[rgba(255,255,255,0.2)] bg-transparent p-[23px]">
        <span className="text-[rgba(255,255,255,0.5)] font-[700] text-[16 px] uppercase">
          {Name}
        </span>
        <h1 className="text-white font-[400] text-[35px] uppercase">{Stat}</h1>
      </div>
    </>
  );
}

export default Stats;
