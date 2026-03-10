import React from "react";
import Transfers from "../../__atoms/Transfers/Transfers";
import { Link } from "react-router";
import Line from "../../__atoms/Line/Line";

function BurgerMenu({
  isOpen,
  MercuryClick,
  VenusClick,
  EarthClick,
  MarsClick,
  JupiterClick,
  SaturnClick,
  UranusClick,
  NeptuneClick,
}) {
  return (
    <>
      <div
        className="h-full w-full fixed bg-[#070724] transition-all duration-300 z-[25] text-white"
        style={{ top: isOpen ? "0%" : "-100%" }}
      >
        <div className="opacity-100 uppercase font-[700] text-[15px] flex flex-col py-[160px] px-[24px] gap-[20px]">
          <div>
            <div className="flex gap-[25px] items-center">
              <div className="size-[20px] bg-[#DEF4FC] rounded-[100%] "></div>
              <span onClick={MercuryClick} className="cursor-pointer">
                <Link to={"/Mercury"}>MERCURY</Link>
              </span>
            </div>
          </div>
          <Line />
          <div>
            <div className="flex gap-[25px] items-center">
              {" "}
              <div className="size-[20px] bg-[#F7CC7F] rounded-[100%] "></div>
              <span onClick={VenusClick} className="cursor-pointer">
                <Link to={"/Venus"}>VENUS</Link>
              </span>
            </div>
          </div>
          <Line />
          <div>
            <div className="flex gap-[25px] items-center">
              {" "}
              <div className="size-[20px] bg-[#545BFE] rounded-[100%] "></div>
              <span onClick={EarthClick} className="cursor-pointer">
                <Link to={"/Earth"}>EARTH</Link>
              </span>
            </div>
          </div>
          <Line />
          <div>
            <div className="flex gap-[25px] items-center">
              {" "}
              <div className="size-[20px] bg-[#FF6A45] rounded-[100%] "></div>
              <span onClick={MarsClick} className="cursor-pointer">
                <Link to={"/Mars"}>MARS</Link>
              </span>
            </div>
          </div>
          <Line />
          <div>
            <div className="flex gap-[25px] items-center">
              {" "}
              <div className="size-[20px] bg-[#ECAD7A] rounded-[100%] "></div>
              <span onClick={JupiterClick} className="cursor-pointer">
                <Link to={"/Jupiter"}>JUPITER</Link>
              </span>
            </div>
          </div>
          <Line />
          <div>
            <div className="flex gap-[25px] items-center">
              {" "}
              <div className="size-[20px] bg-[#FCCB6B] rounded-[100%] "></div>
              <span onClick={SaturnClick} className="cursor-pointer">
                <Link to={"/Saturn"}>SATURN</Link>
              </span>
            </div>
          </div>
          <Line />
          <div>
            <div className="flex gap-[25px] items-center">
              {" "}
              <div className="size-[20px] bg-[#65F0D5] rounded-[100%] "></div>
              <span onClick={UranusClick} className="cursor-pointer">
                <Link to={"/Uranus"}>URANUS</Link>
              </span>
            </div>
          </div>
          <Line />
          <div>
            <div className="flex gap-[25px] items-center">
              {" "}
              <div className="size-[20px] bg-[#497EFA] rounded-[100%] "></div>
              <span onClick={NeptuneClick} className="cursor-pointer">
                <Link to={"/Neptune"}>NEPTUNE</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BurgerMenu;
