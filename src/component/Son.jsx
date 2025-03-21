import React, { useContext } from "react";
import { GlobalState } from "./ContextAPi/GlobalState";

const Son = () => {
  let data = useContext(GlobalState);
  console.log(data);
  return (
    <div className="h-[200px] w-[200px] bg-yellow-500">
      <p>Name: {data.name}</p>
      <p>age: {data.age}</p>
    </div>
  );
};

export default Son;
