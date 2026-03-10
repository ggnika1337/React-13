import React, { useEffect, useState } from "react";
import Container from "../components/__organisms/Container/Container";
import { FetchData } from "../Services/API/API";

import EarthImg from "../assets/Images/Earth/Earth.png";
import Internal from "../assets/Images/Earth/EarthInternal.png";
import Surface from "../assets/Images/Earth/EarthSurface.png";
function Earth() {
  const [mainColor, SetMainColor] = useState("rgba(109,46,213,1)");

  const [data, setData] = useState([]);

  const planet = data[2];
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
        Wiki={planet?.geology.source}
        PlanetImg={EarthImg}
        InternalImg={Internal}
        GeologyImg={Surface}
        PlanetWidth={"450px"}
        InternalHeight={"436px"}
      />
    </>
  );
}

export default Earth;
