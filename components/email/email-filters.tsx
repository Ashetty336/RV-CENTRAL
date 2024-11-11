"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CreditCard, 
  Briefcase, 
  GraduationCap,
  Bell,
  Star
} from "lucide-react";

const filters = [
  { id: "all", label: "All Updates", icon: Bell, count: 12 },
  { id: "fees", label: "Fee Updates", icon: CreditCard, count: 3 },
  { id: "internship", label: "Internships", icon: Briefcase, count: 5 },
  { id: "academic", label: "Academic", icon: GraduationCap, count: 4 },
  { id: "starred", label: "Starred", icon: Star, count: 2 },
];

interface EmailFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export function EmailFilters({ activeFilter, onFilterChange }: EmailFiltersProps) {
  return (
    <Card className="bg-white/10 border-white/20">
      <CardHeader>
        <CardTitle>Filters</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {filters.map((filter) => {
            const Icon = filter.icon;
            return (
              <Button
                key={filter.id}
                variant="ghost"
                className={`w-full justify-start ${
                  activeFilter === filter.id ? "bg-white/10" : ""
                }`}
                onClick={() => onFilterChange(filter.id)}
              >
                <Icon className="mr-2 h-4 w-4" />
                <span className="flex-1 text-left">{filter.label}</span>
                <Badge variant="secondary" className="ml-auto">
                  {filter.count}
                </Badge>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}