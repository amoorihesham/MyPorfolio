import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";

const BackArrow = () => {
  return (
    <div>
      <Link href="/">
        <ArrowBackIcon className="text-white rounded-full text-3xl border hover:animate-pulse" />
      </Link>
    </div>
  );
};

export default BackArrow;
