import React from 'react'

const CommentIdPage = async ({ params }) => {
  const { userId, postId, commentId } = await params;
  return (
    <div>
      <h1>User ID: {userId}</h1>
      <h2>Post ID: {postId}</h2>
      <h3>Comment ID: {commentId}</h3>
    </div>
  )
}

export default CommentIdPage
