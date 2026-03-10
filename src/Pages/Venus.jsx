import React, { useEffect, useState } from "react";
import Container from "../components/__organisms/Container/Container";
import { FetchData } from "../Services/API/API";

import VenusImg from "../assets/Images/Venus/Venus.png";
import Internal from "../assets/Images/Venus/VenusInternal.png";
import Surface from "../assets/Images/Venus/VenusSurface.png";
function Venus() {
  const [mainColor, SetMainColor] = useState("rgba(237,162,73,1)");

  const [data, setData] = useState([]);

  const planet = data[1];
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
        PlanetImg={VenusImg}
        InternalImg={Internal}
        GeologyImg={Surface}
        PlanetWidth={"400px"}
        InternalHeight={"386px"}
        SaturnOvalDisplay={"none"}
      />
    </>
  );
}

export default Venus;
