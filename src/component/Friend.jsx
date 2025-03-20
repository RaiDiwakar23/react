import React, { useState } from "react";

const Friend = () => {
  let [user, setUser] = useState({
    name: "Rohith",
    favouriteFood: "chicken",
    favoriteSport: "cricket",
  });
  const handleFriendChange = () => {
    setUser({
      name: "Subhash",
      favouriteFood: "biryani",
      favouriteSport: "Cricket",
    });
  };
  return (
    <div>
      <h1>My friend {user.name}</h1>
      <p>
        {user.name}'s favourite food is {user.favouriteFood}
      </p>
      <p>
        {user.name}'s favourite sport is {user.favoriteSport}
      </p>
      <button className="text-white bg-red-400 " onClick={handleFriendChange}>
        Change Friend
      </button>
    </div>
  );
};

export default Friend;
