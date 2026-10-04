import React from "react";

const Adminlayout = ({ children, analytics, team }) => {
  return (
    <div>
      {children}
      {analytics}
      {team}
    </div>
  );
};

export default Adminlayout;
