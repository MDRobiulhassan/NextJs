"use client";

import { useCallback, useEffect, useState } from "react";

type Note = {
  _id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export default function Home() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [notes, setNotes] = useState<Note[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const fetchNotes = useCallback(async () => {
    try {
      const res = await fetch("/api/notes");
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Unable to fetch notes.");
      }

      setNotes(data.notes);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to fetch notes.");
    } finally {
      setIsFetching(false);
    }
  }, []);

  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  const handleCreate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!title.trim() || !content.trim()) {
      setError("Please fill in both title and content.");
      return;
    }

    try {
      setIsLoading(true);

      const res = await fetch("/api/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to create note.");
      }

      setTitle("");
      setContent("");
      setMessage("Note created successfully.");

      await fetchNotes();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create note.");
    } finally {
      setIsLoading(false);
    }
  };

  const startEditing = (note: Note) => {
    setEditingId(note._id);
    setEditTitle(note.title);
    setEditContent(note.content);
    setMessage("");
    setError("");
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditTitle("");
    setEditContent("");
  };

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!editingId) return;

    setMessage("");
    setError("");

    if (!editTitle.trim() || !editContent.trim()) {
      setError("Please fill in both title and content.");
      return;
    }

    const id = editingId;

    try {
      setActionLoading(id);

      const res = await fetch(`/api/notes/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: editTitle,
          content: editContent,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to update note.");
      }

      setNotes((currentNotes) =>
        currentNotes.map((note) => (note._id === id ? data.note : note)),
      );

      cancelEditing();
      setMessage("Note updated successfully.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update note.");
    } finally {
      setActionLoading(null);
    }
  };

  const handleDelete = async (id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this note?",
    );

    if (!confirmed) return;

    setMessage("");
    setError("");

    try {
      setActionLoading(id);

      const res = await fetch(`/api/notes/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to delete note.");
      }

      setNotes((currentNotes) =>
        currentNotes.filter((note) => note._id !== id),
      );

      if (editingId === id) {
        cancelEditing();
      }

      setMessage("Note deleted successfully.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete note.");
    } finally {
      setActionLoading(null);
    }
  };

  return (
    <main className="min-h-screen bg-gray-950 px-4 py-10 text-white sm:p-8">
      <div className="mx-auto max-w-4xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold sm:text-4xl">
            Welcome to the Notes App
          </h1>
          <p className="mt-2 text-gray-400">
            Create, view, update, and delete your notes.
          </p>
        </header>

        {error && (
          <p
            role="alert"
            className="mb-4 rounded-md border border-red-800 bg-red-950/40 p-3 text-sm text-red-300"
          >
            {error}
          </p>
        )}

        {message && (
          <p
            role="status"
            className="mb-4 rounded-md border border-green-800 bg-green-950/40 p-3 text-sm text-green-300"
          >
            {message}
          </p>
        )}

        {/* CREATE NOTE */}
        <section className="mb-10 rounded-lg border border-gray-700 bg-gray-900 p-5 shadow-md sm:p-6">
          <h2 className="mb-6 text-xl font-semibold">Create a New Note</h2>

          <form onSubmit={handleCreate} className="space-y-5">
            <div>
              <label
                htmlFor="title"
                className="mb-2 block text-sm text-gray-300"
              >
                Note Title
              </label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter note title"
                maxLength={150}
                required
                disabled={isLoading}
                className="w-full rounded-md border border-gray-700 bg-gray-800 p-3 outline-none focus:border-blue-500 disabled:opacity-60"
              />
            </div>

            <div>
              <label
                htmlFor="content"
                className="mb-2 block text-sm text-gray-300"
              >
                Note Content
              </label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your note here..."
                rows={5}
                maxLength={10000}
                required
                disabled={isLoading}
                className="w-full resize-y rounded-md border border-gray-700 bg-gray-800 p-3 outline-none focus:border-blue-500 disabled:opacity-60"
              />
              <p className="mt-1 text-right text-xs text-gray-500">
                {content.length}/10000 characters
              </p>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-md bg-blue-600 px-4 py-3 font-medium hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoading ? "Creating..." : "Create Note"}
            </button>
          </form>
        </section>

        {/* READ NOTES */}
        <section>
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Your Notes</h2>
            <span className="text-sm text-gray-400">
              {notes.length} {notes.length === 1 ? "note" : "notes"}
            </span>
          </div>

          {isFetching ? (
            <p className="text-gray-400">Loading notes...</p>
          ) : notes.length === 0 ? (
            <div className="rounded-lg border border-dashed border-gray-700 p-8 text-center text-gray-400">
              No notes yet. Create your first note above.
            </div>
          ) : (
            <div className="space-y-4">
              {notes.map((note) => {
                const isEditing = editingId === note._id;
                const isBusy = actionLoading === note._id;

                return (
                  <article
                    key={note._id}
                    className="rounded-lg border border-gray-700 bg-gray-900 p-5"
                  >
                    {isEditing ? (
                      <form onSubmit={handleUpdate} className="space-y-4">
                        <div>
                          <label
                            htmlFor={`edit-title-${note._id}`}
                            className="mb-2 block text-sm text-gray-300"
                          >
                            Title
                          </label>
                          <input
                            id={`edit-title-${note._id}`}
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                            maxLength={150}
                            required
                            disabled={isBusy}
                            className="w-full rounded-md border border-gray-700 bg-gray-800 p-3 outline-none focus:border-blue-500"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor={`edit-content-${note._id}`}
                            className="mb-2 block text-sm text-gray-300"
                          >
                            Content
                          </label>
                          <textarea
                            id={`edit-content-${note._id}`}
                            value={editContent}
                            onChange={(e) => setEditContent(e.target.value)}
                            rows={5}
                            maxLength={10000}
                            required
                            disabled={isBusy}
                            className="w-full resize-y rounded-md border border-gray-700 bg-gray-800 p-3 outline-none focus:border-blue-500"
                          />
                        </div>

                        <div className="flex flex-wrap gap-3">
                          <button
                            type="submit"
                            disabled={isBusy}
                            className="rounded-md bg-green-600 px-4 py-2 font-medium hover:bg-green-700 disabled:opacity-60"
                          >
                            {isBusy ? "Saving..." : "Save Changes"}
                          </button>
                          <button
                            type="button"
                            onClick={cancelEditing}
                            disabled={isBusy}
                            className="rounded-md bg-gray-700 px-4 py-2 hover:bg-gray-600 disabled:opacity-60"
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    ) : (
                      <>
                        <h3 className="break-words text-xl font-semibold">
                          {note.title}
                        </h3>

                        <p className="mt-3 whitespace-pre-wrap break-words text-gray-300">
                          {note.content}
                        </p>

                        <p className="mt-4 text-xs text-gray-500">
                          Created: {new Date(note.createdAt).toLocaleString()}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-3">
                          <button
                            type="button"
                            onClick={() => startEditing(note)}
                            disabled={actionLoading !== null}
                            className="rounded-md bg-blue-600 px-4 py-2 hover:bg-blue-700 disabled:opacity-60"
                          >
                            Edit
                          </button>

                          <button
                            type="button"
                            onClick={() => handleDelete(note._id)}
                            disabled={actionLoading !== null}
                            className="rounded-md bg-red-600 px-4 py-2 hover:bg-red-700 disabled:opacity-60"
                          >
                            {isBusy ? "Deleting..." : "Delete"}
                          </button>
                        </div>
                      </>
                    )}
                  </article>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
