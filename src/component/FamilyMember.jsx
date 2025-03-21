import React from "react";

const FamilyMember = props => {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h2>Room: {props.room}</h2>
      <img src={props.image} alt="" height={100} width={100} />
    </div>
  );
};

export default FamilyMember;
