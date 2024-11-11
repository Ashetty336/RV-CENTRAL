"use client";

import { DashboardHeader } from "@/components/dashboard/header";
import { DashboardNav } from "@/components/dashboard/nav";
import { AttendanceTracker } from "@/components/attendance/tracker";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1f3c] to-[#0f1225] text-white">
      <DashboardHeader />
      <div className="container mx-auto px-4 py-6 flex gap-6">
        <DashboardNav />
        <main className="flex-1">
          <AttendanceTracker />
        </main>
      </div>
    </div>
  );
}