"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Users } from "lucide-react";
import { useState } from "react";
import { ProjectChat } from "@/components/projects/project-chat";

interface Project {
  id: string;
  title: string;
  description: string;
  leader: {
    name: string;
    usn: string;
    branch: string;
  };
  requiredMembers: number;
  currentMembers: number;
  cluster: string;
  tags: string[];
}

const demoProjects: Project[] = [
  {
    id: "1",
    title: "AI-Powered Smart Campus",
    description: "Developing an AI system to optimize campus resources and improve student experience",
    leader: {
      name: "John Smith",
      usn: "1RV21CS100",
      branch: "CSE",
    },
    requiredMembers: 4,
    currentMembers: 2,
    cluster: "A",
    tags: ["AI/ML", "IoT", "Web Development"],
  },
  // Add more demo projects
];

export function ProjectList() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="bg-white/10 border-white/20">
        <CardHeader>
          <CardTitle>Available Teams</CardTitle>
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
                          Led by {project.leader.name} ({project.leader.branch})
                        </p>
                      </div>
                      <Badge variant="secondary">
                        Cluster {project.cluster}
                      </Badge>
                    </div>
                    <p className="text-sm">{project.description}</p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center text-sm text-gray-400">
                        <Users className="mr-1 h-4 w-4" />
                        {project.currentMembers}/{project.requiredMembers} members
                      </div>
                      <div className="flex gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="outline">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="default"
                        className="w-full"
                        onClick={() => {
                          setSelectedProject(project);
                          setShowChat(true);
                        }}
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Chat with Team
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      {showChat && selectedProject && (
        <ProjectChat
          project={selectedProject}
          onClose={() => {
            setShowChat(false);
            setSelectedProject(null);
          }}
        />
      )}
    </div>
  );
}