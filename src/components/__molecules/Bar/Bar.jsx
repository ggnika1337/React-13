import React, { useState } from "react";
import { Link, useSearchParams } from "react-router";
import Categories from "../../__atoms/Categories/Categories";
import Burger from "../../../assets/Images/Other/Burger.png";
import BurgerMenu from "../../__organisms/Burger/BurgerMenu";
import Transfers from "../../__atoms/Transfers/Transfers";

function Bar({
  MercuryClick,
  VenusClick,
  EarthClick,
  MarsClick,
  JupiterClick,
  SaturnClick,
  UranusClick,
  NeptuneClick,
  MainColor,
  OnClickOne,
  OnClickTwo,
  OnClickThree,
}) {
  const [burgerOpacity, setBurgerOpacity] = useState(1);
  const [door, setDoor] = useState(false);
  const [barOpacity, setBarOpacity] = useState(1);
  return (
    <>
      <div className="w-full border-b border-b-[rgba(255,255,255,0.2)] max-[600px]:h-[68px] z-30 fixed">
        <div className="justify-self-center w-full max-w-[1440px] h-[85px]  p-[25px] text-white flex justify-between items-center top-0 left-0 whitespace-nowrap max-md:h-[160px] max-md:flex-col">
          <h1 className="tracking-[-1px] font-[800] text-[28px] max-[600px]:absolute max-[600px]:left-[24px] max-[600px]:top-[12px]">
            <Link to={"/Mercury"}>THE PLANETS</Link>
          </h1>

          <Transfers
            MercuryClick={MercuryClick}
            VenusClick={VenusClick}
            VenusClick={VenusClick}
            MarsClick={MarsClick}
            JupiterClick={JupiterClick}
            SaturnClick={SaturnClick}
            UranusClick={UranusClick}
            NeptuneClick={NeptuneClick}
          />
          <img
            src={Burger}
            className="absolute right-[24px] z-50 hidden max-[600px]:flex"
            style={{
              opacity: burgerOpacity,
            }}
            onClick={() => {
              if (door === false) {
                setDoor(true);
                setBurgerOpacity(0.2);
                setBarOpacity(0);
              } else {
                setDoor(false);
                setBurgerOpacity(1);
                setBarOpacity(1);
              }
            }}
          />
          <div
            style={{
              opacity: barOpacity,
            }}
            className="hidden max-[600px]:flex z-1"
          >
            <Categories
              MainColor={MainColor}
              OnClickOne={OnClickOne}
              OnClickTwo={OnClickTwo}
              OnClickThree={OnClickThree}
              TextOne={"OVERVIEW"}
              TextTwo={"STRUCTURE"}
              TextThree={"SURFACE"}
            />
          </div>
        </div>
      </div>
      <BurgerMenu isOpen={door} />
    </>
  );
}

export default Bar;
