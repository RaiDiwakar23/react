import { useState } from "react";
const Count = () => {
  let [counter, setCounter] = useState(10);
  let handleIncrement = () => {
    setCounter(counter + 1);
  };
  let handleDecrement = () => {
    setCounter("Hello");
  };
  return (
    <div>
      <h1>number count : {counter}</h1>

      <button className="border p-2 bg-green-500" onClick={handleIncrement}>
        Increase
      </button>

      <button className="border p-2 bg-red-400" onClick={handleDecrement}>
        Decrease
      </button>
    </div>
  );
};

export default Count;
