import React, { useState } from "react";

const Guest = () => {
  let [isGuestPresent, setIsGuestPresent] = useState(true);

  //   if (isGuestPresent) {
  //     return <h1 className="text-green-500 font-bold">Hi, How Are You</h1>;
  //   } else {
  //     return (
  //       <h1 className="text-red-500 font-bold">
  //         Thank you for visiting. Please come Again
  //       </h1>
  //     );
  //   }

  const handleMessage = () => {
    setIsGuestPresent(!isGuestPresent);
  };

  return (
    <div>
      {isGuestPresent ? (
        <h1 className="text-red-500">Hello How are you</h1>
      ) : (
        <h1 className="text-green-500">Please dont come again</h1>
      )}

      {isGuestPresent && (
        <h1 className="text-amber-400">Why did you come here</h1>
      )}
      <button onClick={handleMessage} className="border-2 bg-green">
        changeMessage
      </button>
    </div>
  );
};

export default Guest;
