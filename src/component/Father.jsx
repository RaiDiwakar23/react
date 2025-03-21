import React from "react";
import Son from "./Son";

const Father = () => {
  return (
    <div className="h-[400px] w-[400px] bg-blue-500 flex justify-center items-center">
      <Son />
    </div>
  );
};

export default Father;
