import React from "react";
import Base from "./base";
import serviceSection from "./HomeComponents/serviceSection";
import aboutSection from "./HomeComponents/aboutSection";
import featuredSection from "./HomeComponents/featuredSection";
import workSection from "./HomeComponents/workSection";
import teamSection from "./HomeComponents/teamSection";
import contactSection from "./HomeComponents/contactSection";
import testimonialSection from "./HomeComponents/testimonialSection";
import bannerSection from "./HomeComponents/bannerSection";

export default function Home() {
  return (
    <Base>
      {bannerSection()}
      {serviceSection()}
      {aboutSection()}
      {featuredSection()}
      {workSection()}
      {teamSection()}
      {testimonialSection()}
      {contactSection()}
    </Base>
  );
}
