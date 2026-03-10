import React, { useEffect, useState } from "react";
import Container from "../components/__organisms/Container/Container";
import { FetchData } from "../Services/API/API";
import NeptuneImg from "../assets/Images/Neptune/Neptune.png";
import Internal from "../assets/Images/Neptune/NeptuneInternal.png";
import Surface from "../assets/Images/Neptune/NeptuneSurface.png";

function Neptune() {
  const [mainColor, SetMainColor] = useState("rgba(45,104,240,1)");

  const [data, setData] = useState([]);

  const planet = data[7];
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
        PlanetImg={NeptuneImg}
        InternalImg={Internal}
        GeologyImg={Surface}
        PlanetWidth={"450px"}
        InternalHeight={"436px"}
        SaturnOvalDisplay={"none"}
      />
    </>
  );
}

export default Neptune;
