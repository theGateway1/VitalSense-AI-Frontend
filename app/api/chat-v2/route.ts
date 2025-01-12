import { NextRequest, NextResponse } from "next/server";

const API_URL = process.env.API_URL || "http://localhost:8000";

export async function POST(req: NextRequest) {
  try {
    const { messages, llm_choice } = await req.json();
    console.log("Sending to backend:", { messages, llm_choice });

    const response = await fetch(`${API_URL}/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages,
        llm_choice,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to get response from backend");
    }

    const data = await response.json();
    console.log("Received from backend:", data);

    return NextResponse.json({
      role: "assistant",
      content: data.response || data.content,
    });
  } catch (error) {
    console.error("Error in chat API:", error);
    return NextResponse.json(
      { error: "An error occurred while processing your request" },
      { status: 500 }
    );
  }
}
