import React from "react";
import Image from "next/image";
import Button from "../Button/Button";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="flex nowrap justify-between flex-row items-center mb-12">
      <div className="flex items-center">
        <Image
          src="/logo.svg"
          alt="logo"
          height={30}
          width={150}
          className="cursor-pointer"
        />
        {/* <h1 className="text-lg font-bold ml-1">CryptoScince</h1> */}
      </div>
      <div className="flex flex-row justify-between">
        <p className="mx-16 font-extralight cursor-pointer text-sm">Home</p>
        <p className="mx-16  font-extralight cursor-pointer text-sm">About</p>
        <p className="mx-16  font-extralight cursor-pointer text-sm">Prices</p>
      </div>

      <Button Title="Write" />
    </div>
  );
};

export default Header;
