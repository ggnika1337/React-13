import React from "react";
import { Link } from "react-router";

function Bar({
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
      <div className="absolute w-full border-b border-b-[rgba(255,255,255,0.2)]">
        <div className="justify-self-center w-full max-w-[1440px] h-[85px]  p-[25px] text-white flex justify-between items-center top-0 left-0 whitespace-nowrap max-md:h-[160px] max-md:flex-col">
          <h1 className="tracking-[-1px] font-[800] text-[28px]">
            THE PLANETS
          </h1>
          <div className="opacity-50 uppercase font-[700] text-[15px] flex gap-[33px]">
            <span onClick={MercuryClick} className="cursor-pointer">
              <Link to={"/Mercury"}>MERCURY</Link>
            </span>
            <span onClick={VenusClick} className="cursor-pointer">
              <Link to={"/Venus"}>VENUS</Link>
            </span>
            <span onClick={EarthClick} className="cursor-pointer">
              <Link to={"/Earth"}>EARTH</Link>
            </span>
            <span onClick={MarsClick} className="cursor-pointer">
              <Link to={"/Mars"}>MARS</Link>
            </span>
            <span onClick={JupiterClick} className="cursor-pointer">
              <Link to={"/Jupiter"}>JUPITER</Link>
            </span>
            <span onClick={SaturnClick} className="cursor-pointer">
              <Link to={"/Saturn"}>SATURN</Link>
            </span>
            <span onClick={UranusClick} className="cursor-pointer">
              <Link to={"/Uranus"}>URANUS</Link>
            </span>
            <span onClick={NeptuneClick} className="cursor-pointer">
              <Link to={"/Neptune"}>NEPTUNE</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bar;
