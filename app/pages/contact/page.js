import React, { Fragment } from "react";
import "../../globals.css";
import BackArrow from "@/app/components/BackArrow";
import Form from "@/app/components/Form";
import Contactways from "@/app/components/Contactways";

const page = () => {
  return (
    <Fragment>
      <BackArrow />
      <Contactways />
      <Form />
    </Fragment>
  );
};

export default page;
