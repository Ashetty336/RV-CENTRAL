"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectList } from "@/components/projects/project-list";
import { CreateProject } from "@/components/projects/create-project";
import { MyProjects } from "@/components/projects/my-projects";

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">EL Project Teams</h2>
      </div>

      <Tabs defaultValue="available" className="space-y-6">
        <TabsList className="bg-white/10">
          <TabsTrigger value="available">Available Teams</TabsTrigger>
          <TabsTrigger value="create">Create Team</TabsTrigger>
          <TabsTrigger value="my-projects">My Projects</TabsTrigger>
        </TabsList>

        <TabsContent value="available">
          <ProjectList />
        </TabsContent>

        <TabsContent value="create">
          <CreateProject />
        </TabsContent>

        <TabsContent value="my-projects">
          <MyProjects />
        </TabsContent>
      </Tabs>
    </div>
  );
}