"use client";
import { useState } from "react";

const WEBHOOK_URL = process.env.NEXT_PUBLIC_WEBHOOK_URL!;
export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Welcome to Academic Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-6">

        <div className="bg-red p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold">Total Courses</h2>
          <p className="text-2xl font-bold mt-2 text-blue-600">5</p>
        </div>

        <div className="bg-yellow p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold">Completed Lessons</h2>
          <p className="text-2xl font-bold mt-2 text-green-600">12</p>
        </div>

        <div className="bg-green p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold">AI Interactions</h2>
          <p className="text-2xl font-bold mt-2 text-purple-600">34</p>
        </div>

      </div>
    </div>
  );
}