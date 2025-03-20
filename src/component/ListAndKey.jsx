import React from "react";

const ListAndKey = () => {
  let handleClick = (event, name) => {
    console.log(name);
    console.log("You have clicked the box");
  };
  return (
    <>
      <section
        className="h-[200px] w-[200px] bg-red-400"
        // onClick={handleClick}
        // onClick={(e, name) => {
        //   console.log(e.target);
        //   console.log(name);
        //   console.log("You clicked the box");
        // }}
        onClick={event => handleClick(event, "Diwakar")}
      ></section>
    </>
  );
};

export default ListAndKey;

//! By default the first argument in an event handler function is the event object. This object holds the information regarding the event (what event, where the event occured, what triggered the event)

//! Inside the event object, we have a property called target which will give us the element which triggered the event

//! if we want to give multiple arguments to and event handler function, we have to wrap the entire event handler funtion into an arrow function so that automatic invoking of the function can be prevented
