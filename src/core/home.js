import React from "react";
import Base from "./base";
import serviceSection from "./HomeComponents/serviceSection";
import aboutSection from "./HomeComponents/aboutSection";
import featuredSection from "./HomeComponents/featuredSection";
import workSection from "./HomeComponents/workSection";

export default function Home() {
  return (
    <Base>
      {serviceSection()}
      {aboutSection()}
      {featuredSection()}
      {workSection()}
    </Base>
  );
}
