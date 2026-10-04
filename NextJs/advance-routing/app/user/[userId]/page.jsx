import React from "react";

const UserIdPage = async ({ params }) => {
  const { userId } = await params;
  return (
    <div>
      <h1>User ID: {userId}</h1>
    </div>
  );
};

export default UserIdPage;
