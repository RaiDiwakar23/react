import React from "react";
import FamilyMember from "./FamilyMember";

const House = () => {
  return (
    <div>
      <FamilyMember
        name="Mom"
        room="The biggest room"
        image="https://images.unsplash.com/photo-1560707857-b897819e06fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9tfGVufDB8fDB8fHww"
      />

      <FamilyMember
        name="Sister"
        room="Not my room"
        image="https://images.unsplash.com/photo-1592621385612-4d7129426394?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9tfGVufDB8fDB8fHww"
      />
    </div>
  );
};

export default House;
