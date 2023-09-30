import Image from "next/image";
import React from "react";
import ButtonSecond from "../Button/ButtonSecond";
import "./Card.scss";

interface IProps {
  Title: string;
  Icon: string;
  Text: string;
  ButtonTitle: string;
}

const Card = ({ Title, Icon, Text, ButtonTitle }: IProps) => {
  return (
    <div className="card_style">
      <div className="h-[7.5rem]">
        <Image src={Icon} width={100} height={100} alt="icon" />
      </div>
      <div className="mb-[1rem] text-center font-semibold text-[24px] h-[1rem]">
        {Title}
      </div>
      <div className="mb-[1rem] text-[#717171] font-light h-[3rem]">{Text}</div>
      <div>
        <ButtonSecond Title={ButtonTitle} />
      </div>
    </div>
  );
};

export default Card;
