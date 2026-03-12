import React, { useEffect, useState } from "react";
import Infos from "../../__molecules/Infos/Infos";
import Bar from "../../__molecules/Bar/Bar";
import Stats from "../../__atoms/Stats/Stats";
import OvalOne from "../../../assets/Images/Saturn/SaturnOvalOne.png";
import OvalTwo from "../../../assets/Images/Saturn/SaturnOvalTwo.png";

function Container({
  Name,
  StatOne,
  StatTwo,
  StatThree,
  StatFour,
  VenusClick,
  PlanetImg,
  MainColor,
  Description,
  DescriptionTwo,
  DescriptionThree,
  InternalImg,
  GeologyImg,
  PlanetWidth,
  InternalHeight,
  Wiki,
}) {
  const [one, setOne] = useState(1);
  const [two, setTwo] = useState(0);
  const [three, setThree] = useState(0);
  const [ImgTwo, setImgTwo] = useState(0);
  const [ImgThree, setImgThree] = useState(0);
  return (
    <>
      <Bar
        VenusClick={VenusClick}
        MainColor={MainColor}
        OnClickOne={() => {
          setOne(1);
          setTwo(0);
          setThree(0);
          setImgThree(0);
          setImgTwo(0);
        }}
        OnClickTwo={() => {
          setOne(0);
          setTwo(1);
          setThree(0);
          setImgTwo(1);
          setImgThree(0);
        }}
        OnClickThree={() => {
          setOne(0);
          setTwo(0);
          setThree(1);
          setImgTwo(0);
          setImgThree(1);
        }}
      />
      <div className="w-full flex-col flex justify-end gap-[20px] self-center justify-self-center items-center max-md:gap-[5px] absolute bottom-3 max-md:overflow-hidden">
        <div className="flex justify-between w-full max-w-[1050px] items-center relative max-md:flex-col h-full justify-end">
          <div className="relative flex w-full justify-center h-full px-[70px] max-md:px-[clamp(10px,34vw,250px)]">
            <div className="relative">
              <img src={PlanetImg} className={`w-[${PlanetWidth}] z-2 `} />
              <div className="w-full h-full absolute top-0 flex justify-end">
                <img
                  src={InternalImg}
                  className={`h-[${InternalHeight}] top-2 self-center mr-[5px] `}
                  style={{
                    opacity: ImgTwo,
                    position: "absolute",
                  }}
                />
              </div>
            </div>
            <img
              src={GeologyImg}
              className={`h-[200px] flex self-center top-[226px]`}
              style={{
                opacity: ImgThree,
                position: "absolute",
              }}
            />
          </div>
          <Infos
            Wiki={Wiki}
            Name={Name}
            Description={Description}
            DescriptionTwo={DescriptionTwo}
            DescriptionThree={DescriptionThree}
            MainColor={MainColor}
            OnClickOne={() => {
              setOne(1);
              setTwo(0);
              setThree(0);
              setImgThree(0);
              setImgTwo(0);
            }}
            OnClickTwo={() => {
              setOne(0);
              setTwo(1);
              setThree(0);
              setImgTwo(1);
              setImgThree(0);
            }}
            OnClickThree={() => {
              setOne(0);
              setTwo(0);
              setThree(1);
              setImgTwo(0);
              setImgThree(1);
            }}
            visibilityOne={one}
            visibilityTwo={two}
            visibilityThree={three}
          />
        </div>
        <div className="flex bottom-20 w-full gap-[11px] justify-self-center justify-center max-md: px-[20px]  max-[600px]:flex-col">
          <Stats Name={"ROTATION TIME"} Stat={StatOne} />
          <Stats Name={"REVOLUTION TIME"} Stat={StatTwo} />
          <Stats Name={"RADIUS"} Stat={StatThree} />
          <Stats Name={"AVERAGE TEMP."} Stat={StatFour} />
        </div>
      </div>
    </>
  );
}

export default Container;
