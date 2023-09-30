import React from "react";
import "./Button.scss";
interface Props {
  Title: string;
}

const ButtonSecond = ({ Title }: Props) => {
  return (
    <div className="second_btn">
      <div>{Title}</div>
    </div>
  );
};

export default ButtonSecond;
