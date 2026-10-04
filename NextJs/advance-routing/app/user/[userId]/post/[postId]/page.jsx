import React from "react";

const PostIdPage = async ({ params }) => {
  const { userId, postId } = await params;
  return (
    <div>
      <h1>User ID: {userId}</h1>
      <h2>Post ID: {postId}</h2>
    </div>
  );
};

export default PostIdPage;
