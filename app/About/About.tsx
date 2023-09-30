import React from "react";
import Card from "@/components/Card/Card";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="flex flex-row justify-between items-center mt-[4rem]  flex-wrap">
      <div className="mr-[2rem] flex-1">
        <Card
          Icon="/rocet.svg"
          Title="Fast As A Rocket"
          Text="Our Application Is Fast And Convenient"
          ButtonTitle="write"
        />
      </div>
      <div className="mr-[2rem] flex-1">
        <Card
          Icon="/scheme.svg"
          Title="Only Advanced Technology"
          Text="We Use The Most Modern Technologies"
          ButtonTitle="write"
        />
      </div>
      <div className="flex-1">
        <Card
          Icon="/download.svg"
          Title="Easy And Fast Download"
          Text="Anyone Can Handle Downloading The Application"
          ButtonTitle="write"
        />
      </div>
    </div>
  );
};

export default About;
