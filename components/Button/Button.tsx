import React from "react";
import "./Button.scss";
interface Props {
  Title: string;
}

const Button = ({ Title }: Props) => {
  return (
    <div className="first_btn">
      <div>{Title}</div>
    </div>
  );
};

export default Button;
