import React, { useState } from "react";
import Arrow from "../../../assets/Images/Arrow.svg";
import Categories from "../../__atoms/Categories/Categories";

function Infos({ Name, Description }) {
  const [mainColor, SetMainColor] = useState("rgba(65,158,187,1)");
  return (
    <>
      <div className="flex flex-col gap-[30px] text-white w-[350px]">
        <h1 className="font-[400] text-[80px] uppercase">{Name}</h1>
        <span>{Description}</span>
        <div className="flex gap-2 opacity-50">
          <span>Source: Wikipedia</span>
          <img src={Arrow} />
        </div>
        <Categories MainColor={mainColor} />
      </div>
    </>
  );
}

export default Infos;
