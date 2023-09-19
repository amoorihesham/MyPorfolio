import "../../globals.css";
import BackArrow from "@/app/components/BackArrow";
import SkillsCards from "@/app/components/skillsCard/SkillsCards";
import React, { Fragment } from "react";

const page = () => {
  return (
    <Fragment>
      <BackArrow />
      <SkillsCards />
    </Fragment>
  );
};

export default page;
