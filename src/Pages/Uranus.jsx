import React, { useEffect, useState } from "react";
import Container from "../components/__organisms/Container/Container";
import { FetchData } from "../Services/API/API";
import UranusImg from "../assets/Images/Uranus/Uranus.png";
import Internal from "../assets/Images/Uranus/UranusInternal.png";
import Surface from "../assets/Images/Uranus/UranusSurface.png";

function Uranus() {
  const [mainColor, SetMainColor] = useState("rgba(30,193,162,1)");

  const [data, setData] = useState([]);

  const planet = data[6];
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
        PlanetImg={UranusImg}
        InternalImg={Internal}
        GeologyImg={Surface}
        Wiki={planet?.geology.source}
        PlanetWidth={"458px"}
        InternalHeight={"458px"}
      />
    </>
  );
}

export default Uranus;
