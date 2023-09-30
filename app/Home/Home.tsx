import React from "react";
import Image from "next/image";
import * as phone from "./../../public/phone.png";
import Button from "@/components/Button/Button";
import ButtonSecond from "@/components/Button/ButtonSecond";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div className="flex flex-row nowrap justify-between">
      <div className="flex-1 flex-col">
        <div className="pb-[2rem] text-[#717171] font-light tracking-[0.1rem]">
          CRYPTO TOKEN
        </div>
        <div className="mb-[2rem] font-extrabold text-[60px] leading-[70px]">
          Our Own New <span>Crypto Landing Page</span>
        </div>
        <div className="mb-[2rem] text-[#717171] font-light">
          Thousands and hundreds of thousands of new crypto projects are created
          on the Internet every day, we also decided to try our hand at creating
          our own crypto landing page
        </div>
        <div className="w-full h-[1px] bg-[#717171] mb-[2rem]"></div>
        <div className="w-full flex flex-row nowrap justify-between px-[3rem] py-[1rem] bg-[#0C1124] rounded-[15px] mb-[3rem] drop-shadow-2xl">
          <div className="flex flex-col">
            <h1 className="font-extrabold text-[40px]">30k+</h1>
            <p>Subscribers</p>
          </div>
          <div className="flex flex-col">
            <h1 className="font-extrabold text-[40px]">250k+</h1>
            <p>Downloads</p>
          </div>
          <div className="flex flex-col">
            <h1 className="font-extrabold text-[40px]">15k+</h1>
            <p>Dollars profit</p>
          </div>
        </div>
        <div className="flex flex-row justify-start">
          <div className="w-[10rem]">
            <Button Title="Write" />
          </div>
          <div className="w-[10rem] ml-[2rem]">
            <ButtonSecond Title="Write" />
          </div>
        </div>
      </div>
      <div className="flex 1">
        {" "}
        <Image
          src="/phone.svg"
          alt="phone"
          width={500}
          height={600}
          className="ml-[4rem]"
        />
      </div>
    </div>
  );
};

export default HomePage;
