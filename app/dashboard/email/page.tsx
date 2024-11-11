"use client";

import { useEffect } from 'react';

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EmailList } from "@/components/email/email-list";
import { EmailFilters } from "@/components/email/email-filters";
import { ExamVenues } from "@/components/email/exam-venues";

export default function EmailPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeTab, setActiveTab] = useState("updates");  // Add this line

  useEffect(() => {
    console.log('EmailPage mounted');
  }, []);

  useEffect(() => {
    console.log('Filter changed:', activeFilter);
  }, [activeFilter]);
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Email Updates</h2>
        <span className="text-sm text-gray-400">Page Loaded at: {new Date().toLocaleTimeString()}</span>
      </div>

      <Tabs 
      defaultValue="updates"
      value={activeTab}  // Add this line
      onValueChange={setActiveTab}  // Add this line
       className="space-y-6">
        <TabsList className="bg-white/10">
          <TabsTrigger value="updates">Updates</TabsTrigger>
          <TabsTrigger value="exams">Exam Venues</TabsTrigger>
          <TabsTrigger value="placements">Placements</TabsTrigger>
        </TabsList>

        <TabsContent value="updates" className="space-y-6">
        {activeTab === "updates" && (  // Add this condition
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <EmailList filter={activeFilter} />
            </div>
            <div>
              <EmailFilters 
                activeFilter={activeFilter} 
                onFilterChange={setActiveFilter} 
              />
            </div>
          </div>
        )}
        </TabsContent>

        <TabsContent value="exams">
          <ExamVenues />
        </TabsContent>

        <TabsContent value="placements">
          <Card className="bg-white/10 border-white/20">
            <CardHeader>
              <CardTitle>Placement Updates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Placement content will be implemented here */}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}