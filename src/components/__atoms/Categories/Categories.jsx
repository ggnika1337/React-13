import React, { useState } from "react";

function Categories({
  OnClickOne,
  OnClickTwo,
  OnClickThree,
  MainColor,
  TextOne,
  TextTwo,
  TextThree,
}) {
  const [BgOne, setBgOne] = useState(MainColor);
  const [BgTwo, setBgTwo] = useState("transparent");
  const [BgThree, setBgThree] = useState("transparent");

  return (
    <div className="flex flex-col w-full gap-[16px] font-[600] max-[600px]:h-[50px] flex  text-[15px] opacity-50 text-white max-md:justify-center max-[600px]:flex-row max-[600px]:border-b max-[600px]:border-[rgba(255,255,255,0.2)] max-[600px]:absolute max-[600px]:top-[86px] max-[600px]:left-0">
      <div
        className={`hover:bg-[rgba(216,216,216,0.2)] max-[600px]:hover:bg-transparent max-[600px]:border-b-[4px] max-[600px]:border-${BgOne}`}
      >
        <div
          className="w-full h-[40px] border border-[rgba(255,255,255,0.2)] max-[600px]:justify-center max-[600px]:!bg-transparent max-[600px]:w-[80px]  pl-[28px] py-[12px] flex gap-[25px] items-center cursor-pointer max-[600px]:border-transparent max-[600px]:pl-[0] max-[600px]:py-[0] max-[600px]:min-w-[80px]"
          style={{ backgroundColor: BgOne }}
          onClick={() => {
            setBgOne(MainColor);
            setBgTwo("transparent");
            setBgThree("transparent");
            OnClickOne && OnClickOne();
          }}
        >
          <h1 className="opacity-50 max-[600px]:hidden">01</h1>
          <span>{TextOne}</span>
        </div>
      </div>

      <div
        className={`hover:bg-[rgba(216,216,216,0.2)] max-[600px]:hover:bg-transparent max-[600px]:!bg-transparent max-[600px]:border-b-[4px] max-[600px]:border-${BgTwo}`}
      >
        <div
          className="w-full h-[40px] border border-[rgba(255,255,255,0.2)] max-[600px]:!bg-transparent max-[600px]:justify-center max-[600px]:w-[80px]  pl-[28px] py-[12px] max-[600px]:pl-[0] max-[600px]:py-[0] flex gap-[25px] items-center cursor-pointer max-[600px]:border-transparent max-[600px]:min-w-[80px]"
          style={{ backgroundColor: BgTwo }}
          onClick={() => {
            setBgOne("transparent");
            setBgTwo(MainColor);
            setBgThree("transparent");
            OnClickTwo && OnClickTwo();
          }}
        >
          <h1 className="opacity-50 max-[600px]:hidden">02</h1>
          <span>{TextTwo}</span>
        </div>
      </div>

      <div
        className={`hover:bg-[rgba(216,216,216,0.2)] max-[600px]:hover:bg-transparent max-[600px]:border-b-[4px] max-[600px]:border-${BgThree}`}
      >
        <div
          className="w-full h-[40px] border border-[rgba(255,255,255,0.2)] max-[600px]:!bg-transparent max-[600px]:justify-center max-[600px]:w-[80px] max-[600px]:pl-[0] max-[600px]:py-[0] pl-[28px] py-[12px] flex gap-[25px] items-center cursor-pointer max-[600px]:border-transparent max-[600px]:min-w-[80px]"
          style={{ backgroundColor: BgThree }}
          onClick={() => {
            setBgOne("transparent");
            setBgTwo("transparent");
            setBgThree(MainColor);
            OnClickThree && OnClickThree();
          }}
        >
          <h1 className="opacity-50 max-[600px]:hidden">03</h1>
          <span>{TextThree}</span>
        </div>
      </div>
    </div>
  );
}

export default Categories;
