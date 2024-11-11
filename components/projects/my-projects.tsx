"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Users } from "lucide-react";

interface ProjectMember {
  name: string;
  usn: string;
  branch: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  cluster: string;
  members: ProjectMember[];
  tags: string[];
  status: "in_progress" | "completed";
}

const demoProjects: Project[] = [
  {
    id: "1",
    title: "AI-Powered Smart Campus",
    description: "Developing an AI system to optimize campus resources...",
    cluster: "A",
    members: [
      { name: "John Smith", usn: "1RV21CS100", branch: "CSE" },
      { name: "Jane Doe", usn: "1RV21EC101", branch: "ECE" },
    ],
    tags: ["AI/ML", "IoT"],
    status: "in_progress",
  },
  // Add more demo projects
];

export function MyProjects() {
  return (
    <Card className="bg-white/10 border-white/20">
      <CardHeader>
        <CardTitle>My Projects</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px]">
          <div className="space-y-4">
            {demoProjects.map((project) => (
              <div
                key={project.id}
                className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium">{project.title}</h3>
                      <p className="text-sm text-gray-400">
                        Cluster {project.cluster}
                      </p>
                    </div>
                    <Badge
                      variant={
                        project.status === "completed" ? "default" : "secondary"
                      }
                    >
                      {project.status === "completed"
                        ? "Completed"
                        : "In Progress"}
                    </Badge>
                  </div>
                  <p className="text-sm">{project.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span className="text-sm font-medium">Team Members</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {project.members.map((member) => (
                        <div
                          key={member.usn}
                          className="text-sm p-2 rounded bg-white/5"
                        >
                          <p className="font-medium">{member.name}</p>
                          <p className="text-gray-400">
                            {member.branch} · {member.usn}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}