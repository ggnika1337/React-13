import React, { useEffect, useState } from "react";
import Container from "../components/__organisms/Container/Container";
import { FetchData } from "../Services/API/API";
import JupiterImg from "../assets/Images/Jupiter/Jupiter.png";
import Internal from "../assets/Images/Jupiter/JupiterInternal.png";
import Surface from "../assets/Images/Jupiter/JupiterSurface.png";

function Jupiter() {
  const [mainColor, SetMainColor] = useState("rgba(209,76,50,1)");

  const [data, setData] = useState([]);

  const planet = data[4];
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
        PlanetImg={JupiterImg}
        InternalImg={Internal}
        GeologyImg={Surface}
        PlanetWidth={"582px"}
        InternalHeight={"572px"}
        SaturnOvalDisplay={"none"}
      />
    </>
  );
}

export default Jupiter;
