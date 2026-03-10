import React, { useState } from "react";

function Categories({ OnClickOne, OnClickTwo, OnClickThree, MainColor }) {
  const [Color, setColor] = useState(MainColor);
  const [BgOne, setBgOne] = useState(Color);
  const [BgTwo, setBgTwo] = useState("transparent");
  const [BgThree, setBgThree] = useState("transparent");

  return (
    <>
      <div className="flex flex-col gap-[16px] font-[600] text-[15px] opacity-50 text-white">
        <div className="hover:bg-[rgba(216,216,216,0.2)]">
          <div
            style={{ backgroundColor: BgOne }}
            className={`w-full h-[40px] border border-[rgba(255,255,255,0.2)] pl-[28px] py-[12px] flex gap-[25px] items-center cursor-pointer`}
            onClick={() => {
              setBgOne(Color);
              setBgTwo("transparent");
              setBgThree("transparent");
              OnClickOne && OnClickOne();
            }}
          >
            <h1 className="opacity-50">01</h1>
            <span>OVERVIEW</span>
          </div>
        </div>

        <div className="hover:bg-[rgba(216,216,216,0.2)]">
          <div
            style={{ backgroundColor: BgTwo }}
            className={`w-full h-[40px] border border-[rgba(255,255,255,0.2)] pl-[28px] py-[12px]  flex gap-[25px] items-center cursor-pointer hover:bg-[rgba(216,216,216,0.2)]`}
            onClick={() => {
              setBgOne("transparent");
              setBgTwo(Color);
              setBgThree("transparent");
              OnClickTwo && OnClickTwo();
            }}
          >
            <h1 className="opacity-50">01</h1>
            <span>INTERNAL STRUCTURE</span>
          </div>
        </div>
        <div className="hover:bg-[rgba(216,216,216,0.2)]">
          <div
            style={{ backgroundColor: BgThree }}
            className={`w-full h-[40px] border border-[rgba(255,255,255,0.2)] pl-[28px] py-[12px] flex items-center gap-[25px] cursor-pointer hover:bg-[rgba(216,216,216,0.2)]`}
            onClick={() => {
              setBgOne("transparent");
              setBgTwo("transparent");
              setBgThree(Color);
              OnClickThree && OnClickThree();
            }}
          >
            <h1 className="opacity-50">01</h1>
            <span>SURFACE GEOLOGY</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
