import React from "react";
import Father from "./Father";

const GrandFather = () => {
  let remote = "TV Remote";
  return (
    <div className="h-[500px] bg-red-500 w-[500px] flex justify-center items-center">
      <Father remote={remote} />
    </div>
  );
};

export default GrandFather;
