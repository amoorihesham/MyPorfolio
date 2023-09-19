import BackArrow from "@/app/components/BackArrow";
import FeaturesCards from "@/app/components/featuresCard/FeaturesCards";
import React, { Fragment } from "react";

const page = () => {
  return (
    <Fragment>
      <BackArrow />
      <FeaturesCards />
    </Fragment>
  );
};

export default page;
