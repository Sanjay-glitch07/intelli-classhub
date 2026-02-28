"use client";

import { useState } from "react";

const WEBHOOK_URL = "https://shiv4.app.n8n.cloud/webhook/elearning-master";

export default function AskPage() {
  const [studentName, setStudentName] = useState("");
  const [level, setLevel] = useState("");
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResponse("");

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          role: "student",
          action: "ask_tutor",
          teacher_name: "Demo Teacher",
          student_name: studentName,
          email: "demo@test.com",
          course: "Artificial Intelligence",
          level: Number(level),
          notes_content:
            "Artificial Intelligence is the simulation of human intelligence in machines.",
          question: question,
          quiz_request: "Generate 3 MCQ questions with answers",
        }),
      });

      if (!res.ok) {
        throw new Error("Server error");
      }

      const data = await res.json();
      setResponse(data.ai_response || JSON.stringify(data, null, 2));
    } catch (err) {
      setError("Failed to connect to AI server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Ask AI Tutor</h1>

      <div className="bg-white p-6 rounded-xl shadow max-w-xl">
        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            placeholder="Student Name"
            className="w-full border p-2 rounded"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            required
          />

          <input
            type="number"
            placeholder="Level"
            className="w-full border p-2 rounded"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            required
          />

          <textarea
            className="w-full border p-3 rounded"
            placeholder="Type your question..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full p-2 rounded text-white ${
              loading ? "bg-gray-400" : "bg-blue-600"
            }`}
          >
            {loading ? "Processing..." : "Ask AI"}
          </button>

        </form>

        {error && <div className="mt-4 text-red-600">{error}</div>}

        {response && (
          <div className="mt-6 bg-gray-800 p-4 rounded whitespace-pre-wrap">
            {response}
          </div>
        )}
      </div>
    </div>
  );
}