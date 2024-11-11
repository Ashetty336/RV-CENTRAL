"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Check, X } from "lucide-react";
import { AttendanceCalendar } from "@/components/attendance/calendar";
import { CourseList } from "@/components/attendance/course-list";

export function AttendanceTracker() {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Attendance Tracker</h2>
        <Button variant="outline" className="bg-white/5">
          Download Report
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-white/10 border-white/20">
          <CardHeader>
            <CardTitle className="text-lg">Overall Attendance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Progress value={85} className="h-2" />
              <p className="text-2xl font-bold">85%</p>
              <p className="text-sm text-gray-400">
                102 of 120 classes attended
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 border-white/20">
          <CardHeader>
            <CardTitle className="text-lg">Today&apos;s Classes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Data Structures</span>
                <div className="space-x-2">
                  <Button size="sm" variant="ghost" className="hover:bg-green-500/20">
                    <Check className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="hover:bg-red-500/20">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>Computer Networks</span>
                <div className="space-x-2">
                  <Button size="sm" variant="ghost" className="hover:bg-green-500/20">
                    <Check className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="hover:bg-red-500/20">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 border-white/20">
          <CardHeader>
            <CardTitle className="text-lg">Critical Subjects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span>Operating Systems</span>
                  <span className="text-red-400">75%</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span>Database Systems</span>
                  <span className="text-yellow-400">78%</span>
                </div>
                <Progress value={78} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <CourseList onSelectCourse={setSelectedCourse} />
        <AttendanceCalendar selectedCourse={selectedCourse} />
      </div>
    </div>
  );
}