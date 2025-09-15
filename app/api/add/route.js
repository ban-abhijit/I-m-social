import { prismaC } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { handle, links, pic } = await req.json();

    const existing = await prismaC.user.findFirst({
      where: { handle },
    });

    if (existing) {
      return NextResponse.json(
        { message: "Handle exists", success: false },
        { status: 409 }
      );
    }

    const newLink = await prismaC.user.create({
      data: { handle, links, pic },
    });

    return NextResponse.json(
      { message: "Created successfully", success: true, data: newLink },
      { status: 201 }
    );
  } catch (err) {
    console.error("API Error:", err); // <-- log full error
    return NextResponse.json(
      { message: "Server error", success: false, error: err.message },
      { status: 500 }
    );
  }
}
