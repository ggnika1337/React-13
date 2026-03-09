import React, { useState } from "react";
import Infos from "../../__molecules/Infos/Infos";
import Bar from "../../__molecules/Bar/Bar";
import Stats from "../../__atoms/Stats/Stats";
import StatsGroup from "../../__molecules/StatsGroup/StatsGroup";
import Mercury from "../../../assets/Images/Mercury.png";

function Container() {
  const [Name, setName] = useState("Mercury");
  return (
    <>
      <Bar
        VenusClick={() => {
          setName("Venus");
        }}
      />
      <div className="max-w-[1050px] w-full flex-col flex justify-between gap-30 self-center justify-self-center">
        <div className="flex justify-between">
          <img src={Mercury} className="size-[290px]" />
          <Infos
            Name={Name}
            Description={
              "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth."
            }
          />
        </div>
        <StatsGroup />
      </div>
    </>
  );
}

export default Container;
