import React, { useEffect, useState } from "react";
import Container from "../components/__organisms/Container/Container";
import { FetchData } from "../Services/API/API";
import MercuryImg from "../assets/Images/Mercury/Mercury.png";
import Internal from "../assets/Images/Mercury/MercuryInternal.png";
import Surface from "../assets/Images/Mercury/MercurySurface.png";

function Mercury() {
  const [mainColor, SetMainColor] = useState("rgba(65,158,187,1)");

  const [data, setData] = useState([]);

  const planet = data[0];
  useEffect(() => {
    FetchData(setData);
  }, []);
  console.log(data);
  return (
    <>
      <Container
        MainColor={mainColor}
        StatOne={planet?.rotation}
        StatTwo={planet?.revolution}
        StatThree={planet?.radius}
        StatFour={planet?.temperature}
        Name={planet?.name}
        Description={planet?.geology.content}
        DescriptionTwo={planet?.overview.content}
        DescriptionThree={planet?.structure.content}
        PlanetImg={MercuryImg}
        InternalImg={Internal}
        GeologyImg={Surface}
        PlanetWidth={"290px"}
        InternalHeight={"278px"}
        SaturnOvalDisplay={"none"}
      />
    </>
  );
}

export default Mercury;
