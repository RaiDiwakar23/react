import React from "react";

const Child = ({ name, age }) => {
  //   let { name, age } = props;
  return (
    <div className="border-2 rounded m-2 p-2">
      <p>Name of Cousin: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default Child;
