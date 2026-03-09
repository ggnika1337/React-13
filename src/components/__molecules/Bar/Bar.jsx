import React from "react";

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
      <div className="absolute w-full h-[85px] border-b border-b-[rgba(255,255,255,0.2)] p-[25px] text-white flex justify-between items-center top-0 left-0 whitespace-nowrap max-md:h-[160px] max-md:flex-col">
        <h1 className="tracking-[-1px] font-[800] text-[28px]">THE PLANETS</h1>
        <div className="opacity-50 uppercase font-[700] text-[15px] flex gap-[33px]">
          <span onClick={MercuryClick} className="cursor-pointer">
            MERCURY
          </span>
          <span onClick={VenusClick} className="cursor-pointer">
            VENUS
          </span>
          <span onClick={EarthClick} className="cursor-pointer">
            EARTH
          </span>
          <span onClick={MarsClick} className="cursor-pointer">
            MARS
          </span>
          <span onClick={JupiterClick} className="cursor-pointer">
            JUPITER
          </span>
          <span onClick={SaturnClick} className="cursor-pointer">
            SATURN
          </span>
          <span onClick={UranusClick} className="cursor-pointer">
            URANUS
          </span>
          <span onClick={NeptuneClick} className="cursor-pointer">
            NEPTUNE
          </span>
        </div>
      </div>
    </>
  );
}

export default Bar;
