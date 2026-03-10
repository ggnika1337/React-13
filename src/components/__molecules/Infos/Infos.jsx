import React, { useState } from "react";
import Arrow from "../../../assets/Images/Other/Arrow.svg";
import Categories from "../../__atoms/Categories/Categories";

function Infos({
  Name,
  MainColor,
  OnClickOne,
  OnClickTwo,
  OnClickThree,
  Description,
  DescriptionTwo,
  DescriptionThree,
  visibilityOne,
  visibilityTwo,
  visibilityThree,
}) {
  return (
    <>
      <div className="flex flex-col gap-[30px] text-white w-[350px] relative">
        <h1 className="font-[400] text-[80px] uppercase">{Name}</h1>
        <div className="h-[120px] w-[350px]">
          <span
            style={{
              opacity: visibilityOne,
              position: "absolute",
            }}
          >
            {Description}
          </span>
          <span
            style={{
              opacity: visibilityTwo,
              position: "absolute",
            }}
          >
            {DescriptionTwo}
          </span>
          <span
            style={{
              opacity: visibilityThree,
              position: "absolute",
            }}
          >
            {DescriptionThree}
          </span>
        </div>
        <div className="flex gap-2 opacity-50">
          <span>Source: Wikipedia</span>
          <img src={Arrow} />
        </div>
        <Categories
          MainColor={MainColor}
          OnClickOne={OnClickOne}
          OnClickTwo={OnClickTwo}
          OnClickThree={OnClickThree}
        />
      </div>
    </>
  );
}

export default Infos;
