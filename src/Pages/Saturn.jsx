import React, { useEffect, useState } from "react";
import Container from "../components/__organisms/Container/Container";
import { FetchData } from "../Services/API/API";
import SaturnImg from "../assets/Images/Saturn/Saturn.png";
import Internal from "../assets/Images/Saturn/SaturnInternal.png";
import Surface from "../assets/Images/Saturn/SaturnSurface.png";

function Saturn() {
  const [mainColor, SetMainColor] = useState("rgba(205,81,32,1)");

  const [data, setData] = useState([]);

  const planet = data[5];
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
        PlanetImg={SaturnImg}
        InternalImg={Internal}
        GeologyImg={Surface}
        Wiki={planet?.geology.source}
        PlanetWidth={"216px"}
        InternalHeight={"416px"}
      />
    </>
  );
}

export default Saturn;
