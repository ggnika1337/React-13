import React from "react";
import { Link } from "react-router";

function Transfers({
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
      <div className="opacity-50 uppercase font-[700] text-[15px] flex gap-[33px] max-[600px]:hidden">
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
    </>
  );
}

export default Transfers;
