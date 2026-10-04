import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {children}
      <h1 className="text-2xl font-bold mb-4 text-indigo-500">Auth Layout</h1>
    </div>
  );
};

export default AuthLayout;
