import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";
import { Note } from "@/lib/models/Note";

export async function GET() {
  try {
    await connectToDB();

    const notes = await Note.find().sort({ createdAt: -1 });

    return NextResponse.json({ notes }, { status: 200 });
  } catch (error) {
    console.error("GET /api/notes failed:", error);

    return NextResponse.json(
      { message: "Unable to fetch notes." },
      { status: 500 },
    );
  }
}

export async function POST(request) {
  try {
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

    const note = await Note.create({
      title: title.trim(),
      content: content.trim(),
    });

    return NextResponse.json(
      {
        message: "Note created successfully.",
        note,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("POST /api/notes failed:", error);

    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { message: "Invalid JSON request body." },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { message: "Unable to create note." },
      { status: 500 },
    );
  }
}
