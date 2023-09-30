import Image from "next/image";
import React from "react";

type Props = {};

const Prices = (props: Props) => {
  return (
    <div className="mt-[4rem] flex flex-row justify-between ">
      <div className="flex flex-0.8 mr-[4rem]">
        <Image src="/phone2.svg" alt="phone" width={400} height={500} />
      </div>
      <div className="flex justify-start flex-1 flex-col ">
        <div className="pt-[2rem] mb-[2rem] font-extrabold text-[60px] leading-[70px]">
          <span className="text-[#f620c4]">Flexible</span> parameter setting
        </div>
        <div className="mb-[2rem] text-[#717171] font-light">
          You can customize trading for yourself based on your own goals. Each
          transaction is a smear of malbert Be the artist of your career
        </div>
        <div>
          <div></div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Prices;
