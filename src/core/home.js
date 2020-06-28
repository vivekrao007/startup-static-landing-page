import React from "react";
import Base from "./base";
import serviceSection from "./HomeComponents/serviceSection";
import aboutSection from "./HomeComponents/aboutSection";

export default function Home() {
  return (
    <Base>
      {serviceSection()}
      {aboutSection()}
    </Base>
  );
}
