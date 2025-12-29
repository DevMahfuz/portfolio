import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function GET() {
  try {
    const jsonPath = path.join(process.cwd(), "data", "projects.json");
    const fileContents = await fs.readFile(jsonPath, "utf-8");
    const projects = JSON.parse(fileContents);

    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    console.error("Error reading projects.json:", error);
    return NextResponse.json(
      { error: "Failed to load projects data" },
      { status: 500 }
    );
  }
}
