"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CourseListProps {
  onSelectCourse: (course: string) => void;
}

const courses = [
  {
    name: "Data Structures",
    code: "CS201",
    faculty: "Dr. Smith",
    email: "smith@rvce.edu.in",
    attendance: 85,
  },
  {
    name: "Computer Networks",
    code: "CS202",
    faculty: "Dr. Johnson",
    email: "johnson@rvce.edu.in",
    attendance: 90,
  },
  {
    name: "Operating Systems",
    code: "CS203",
    faculty: "Dr. Williams",
    email: "williams@rvce.edu.in",
    attendance: 75,
  },
  {
    name: "Database Systems",
    code: "CS204",
    faculty: "Dr. Brown",
    email: "brown@rvce.edu.in",
    attendance: 78,
  },
];

export function CourseList({ onSelectCourse }: CourseListProps) {
  return (
    <Card className="bg-white/10 border-white/20">
      <CardHeader>
        <CardTitle className="text-lg">Your Courses</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] pr-4">
          <div className="space-y-4">
            {courses.map((course) => (
              <Button
                key={course.code}
                variant="ghost"
                className="w-full justify-start text-left hover:bg-white/5 p-4 h-auto"
                onClick={() => onSelectCourse(course.name)}
              >
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{course.name}</span>
                    <span className={`text-sm ${
                      course.attendance < 80 ? "text-red-400" : "text-green-400"
                    }`}>
                      {course.attendance}%
                    </span>
                  </div>
                  <div className="text-sm text-gray-400">
                    <p>{course.faculty}</p>
                    <p>{course.email}</p>
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}