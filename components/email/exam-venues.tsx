"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search } from "lucide-react";
import { useState } from "react";

interface ExamVenue {
  subject: string;
  date: string;
  time: string;
  venue: string;
  block: string;
  seatNumber: string;
}

const demoVenues: ExamVenue[] = [
  {
    subject: "Data Structures",
    date: "2024-04-15",
    time: "9:30 AM",
    venue: "Main Block",
    block: "M-101",
    seatNumber: "15",
  },
  {
    subject: "Computer Networks",
    date: "2024-04-17",
    time: "2:00 PM",
    venue: "CSE Block",
    block: "C-201",
    seatNumber: "22",
  },
  // Add more demo venues
];

export function ExamVenues() {
  const [usn, setUsn] = useState("");
  const [venues, setVenues] = useState<ExamVenue[]>([]);
  const [isSearched, setIsSearched] = useState(false);

  const handleSearch = () => {
    // In a real app, this would make an API call
    setVenues(demoVenues);
    setIsSearched(true);
  };

  return (
    <div className="space-y-6">
      <Card className="bg-white/10 border-white/20">
        <CardHeader>
          <CardTitle>Find Your Exam Venues</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <Input
              placeholder="Enter your USN (e.g., 1RV21CS000)"
              value={usn}
              onChange={(e) => setUsn(e.target.value)}
              className="bg-white/5 border-white/10"
            />
            <Button onClick={handleSearch}>
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
        </CardContent>
      </Card>

      {isSearched && (
        <Card className="bg-white/10 border-white/20">
          <CardHeader>
            <CardTitle>Your Exam Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[400px]">
              <div className="space-y-4">
                {venues.map((venue, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium">{venue.subject}</h4>
                        <p className="text-sm text-gray-400">
                          {new Date(venue.date).toLocaleDateString()} at {venue.time}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{venue.venue}</p>
                        <p className="text-sm text-gray-400">
                          Block: {venue.block}, Seat: {venue.seatNumber}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      )}
    </div>
  );
}