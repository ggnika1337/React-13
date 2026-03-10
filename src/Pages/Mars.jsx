import React, { useEffect, useState } from "react";
import Container from "../components/__organisms/Container/Container";
import { FetchData } from "../Services/API/API";
import MarsImg from "../assets/Images/Mars/Mars.png";
import Internal from "../assets/Images/Mars/MarsInternal.png";
import Surface from "../assets/Images/Mars/MarsSurface.png";

function Mars() {
  const [mainColor, SetMainColor] = useState("rgba(209,76,50,1)");

  const [data, setData] = useState([]);

  const planet = data[3];
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
        PlanetImg={MarsImg}
        InternalImg={Internal}
        GeologyImg={Surface}
        PlanetWidth={"336px"}
        InternalHeight={"322px"}
        SaturnOvalDisplay={"none"}
      />
    </>
  );
}

export default Mars;
