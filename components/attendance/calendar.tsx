"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";

interface AttendanceCalendarProps {
  selectedCourse: string | null;
}

export function AttendanceCalendar({ selectedCourse }: AttendanceCalendarProps) {
  return (
    <Card className="bg-white/10 border-white/20">
      <CardHeader>
        <CardTitle className="text-lg">
          {selectedCourse ? `${selectedCourse} Calendar` : "Select a course"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="multiple"
          selected={[]}
          className="rounded-md border border-white/10"
        />
      </CardContent>
    </Card>
  );
}