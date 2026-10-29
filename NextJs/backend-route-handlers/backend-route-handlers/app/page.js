"use client";

import { useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, completed: false }),
    });

    const data = await res.json();

    if (data.success) {
      setMessage("TODO created successfully " + data.todo.title);
    } else {
      setMessage("Failed to create TODO");
    }
  };

  return (
    <div>
      <h2>Create Todo</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <button type="submit">Create</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}
