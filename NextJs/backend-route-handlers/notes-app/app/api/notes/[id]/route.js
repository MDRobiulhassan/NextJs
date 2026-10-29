import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectToDB } from "@/lib/db";
import { Note } from "@/lib/models/Note";

export async function PATCH(request, { params }) {
  try {
    const { id } = await params;

    if (!mongoose.isValidObjectId(id)) {
      return NextResponse.json(
        { message: "Invalid note ID." },
        { status: 400 },
      );
    }

    const body = await request.json();
    const { title, content } = body;

    if (
      typeof title !== "string" ||
      typeof content !== "string" ||
      !title.trim() ||
      !content.trim()
    ) {
      return NextResponse.json(
        { message: "Title and content are required." },
        { status: 400 },
      );
    }

    if (title.trim().length > 150 || content.trim().length > 10000) {
      return NextResponse.json(
        { message: "Title or content exceeds the allowed length." },
        { status: 400 },
      );
    }

    await connectToDB();

    const note = await Note.findByIdAndUpdate(
      id,
      {
        title: title.trim(),
        content: content.trim(),
      },
      {
        new: true,
        runValidators: true,
      },
    );

    if (!note) {
      return NextResponse.json({ message: "Note not found." }, { status: 404 });
    }

    return NextResponse.json(
      {
        message: "Note updated successfully.",
        note,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("PATCH /api/notes/[id] failed:", error);

    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { message: "Invalid JSON request body." },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { message: "Unable to update note." },
      { status: 500 },
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;

    if (!mongoose.isValidObjectId(id)) {
      return NextResponse.json(
        { message: "Invalid note ID." },
        { status: 400 },
      );
    }

    await connectToDB();

    const note = await Note.findByIdAndDelete(id);

    if (!note) {
      return NextResponse.json({ message: "Note not found." }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Note deleted successfully." },
      { status: 200 },
    );
  } catch (error) {
    console.error("DELETE /api/notes/[id] failed:", error);

    return NextResponse.json(
      { message: "Unable to delete note." },
      { status: 500 },
    );
  }
}
