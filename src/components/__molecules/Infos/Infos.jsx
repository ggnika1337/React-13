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
  Wiki,
}) {
  return (
    <>
      <div className="flex flex-col gap-[20px] text-white  relative max-md:flex-row max-md:w-full px-[20px] pb-[10px] max-md:gap-[35px] max-[600px]:items-center max-[600px]:justify-center">
        <div className="flex flex-col gap-[20px] max-w-[350px] max-md:w-full max-[600px]:items-center max-[600px]:justify-center max-md:gap-[10px]">
          <h1 className="font-[400] text-[80px] uppercase max-md:text-[30px]">
            {Name}
          </h1>
          <div className="text-[13px] h-[100px] w-[350px] max-md:w-full max-[600px]:justify-center max-[600px]:flex  max-[600px]:text-center">
            <span
              className="absolute w-[350px] max-md:w-[280px]"
              style={{
                opacity: visibilityOne,
              }}
            >
              {Description}
            </span>
            <span
              className="absolute  w-[350px] max-md:w-[280px]"
              style={{
                opacity: visibilityTwo,
              }}
            >
              {DescriptionTwo}
            </span>
            <span
              className="absolute w-[350px] max-md:w-[280px]"
              style={{
                opacity: visibilityThree,
              }}
            >
              {DescriptionThree}
            </span>
          </div>
          <a href={Wiki} className="flex gap-2 opacity-50">
            <span className="font-[400] text-[12px]">
              Source: <span className="font-[700] text-[15px]">Wikipedia</span>
            </span>
            <img className="size-[16px]" src={Arrow} />
          </a>
        </div>

        <div className="max-[600px]:hidden flex max-md:items-end w-full">
          <Categories
            MainColor={MainColor}
            OnClickOne={OnClickOne}
            OnClickTwo={OnClickTwo}
            OnClickThree={OnClickThree}
            TextOne={"OVERVIEW"}
            TextTwo={"INTERNAL STRUCTURE"}
            TextThree={"SURFACE GEOLOGY"}
          />
        </div>
      </div>
    </>
  );
}

export default Infos;
