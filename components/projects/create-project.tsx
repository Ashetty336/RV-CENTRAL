"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export function CreateProject() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    cluster: "",
    requiredMembers: "3",
    tags: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <Card className="bg-white/10 border-white/20">
      <CardHeader>
        <CardTitle>Create New Project Team</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Project Title</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="bg-white/5 border-white/10"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="bg-white/5 border-white/10"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="cluster">Cluster</Label>
              <Select
                value={formData.cluster}
                onValueChange={(value) =>
                  setFormData({ ...formData, cluster: value })
                }
              >
                <SelectTrigger className="bg-white/5 border-white/10">
                  <SelectValue placeholder="Select cluster" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="A">Cluster A</SelectItem>
                  <SelectItem value="B">Cluster B</SelectItem>
                  <SelectItem value="C">Cluster C</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="members">Required Members</Label>
              <Select
                value={formData.requiredMembers}
                onValueChange={(value) =>
                  setFormData({ ...formData, requiredMembers: value })
                }
              >
                <SelectTrigger className="bg-white/5 border-white/10">
                  <SelectValue placeholder="Select number" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2">2 Members</SelectItem>
                  <SelectItem value="3">3 Members</SelectItem>
                  <SelectItem value="4">4 Members</SelectItem>
                  <SelectItem value="5">5 Members</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="tags">
              Tags (comma-separated)
            </Label>
            <Input
              id="tags"
              value={formData.tags}
              onChange={(e) =>
                setFormData({ ...formData, tags: e.target.value })
              }
              placeholder="e.g., AI/ML, Web Development, IoT"
              className="bg-white/5 border-white/10"
            />
          </div>

          <Button type="submit" className="w-full">
            Create Project Team
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}