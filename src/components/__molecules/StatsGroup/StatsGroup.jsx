import React from "react";
import Stats from "../../__atoms/Stats/Stats";

function StatsGroup() {
  return (
    <>
      <div className="flex bottom-20 w-[100%] gap-[11px] justify-self-center">
        <Stats /> <Stats /> <Stats /> <Stats />
      </div>
    </>
  );
}

export default StatsGroup;
