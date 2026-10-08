"use client";

import React, { useState } from "react";

const ClientComp = () => {
  const [userName, setUserName] = useState("John Doe");

  return (
    <div>
      {userName}
      <button onClick={() => setUserName("Jane Doe")}>Change Name</button>
    </div>
  );
};

export default ClientComp;
