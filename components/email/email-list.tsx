"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Mail, Star, StarOff } from "lucide-react";

interface Email {
  id: string;
  subject: string;
  sender: string;
  preview: string;
  category: string;
  date: Date;
  isStarred: boolean;
  isRead: boolean;
}

const demoEmails: Email[] = [
  {
    id: "1",
    subject: "Fee Payment Reminder - Semester 6",
    sender: "accounts@rvce.edu.in",
    preview: "This is a reminder that the last date for fee payment...",
    category: "fees",
    date: new Date("2024-03-20"),
    isStarred: true,
    isRead: false,
  },
  {
    id: "2",
    subject: "Internship Opportunity - Microsoft",
    sender: "placements@rvce.edu.in",
    preview: "Microsoft is looking for interns in the following roles...",
    category: "internship",
    date: new Date("2024-03-19"),
    isStarred: false,
    isRead: true,
  },
];

interface EmailListProps {
  filter: string;
}

function getRelativeTimeString(date: Date): string {
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInMinutes < 60) {
    return `${diffInMinutes} minutes ago`;
  } else if (diffInHours < 24) {
    return `${diffInHours} hours ago`;
  } else if (diffInDays === 1) {
    return 'yesterday';
  } else if (diffInDays < 7) {
    return `${diffInDays} days ago`;
  } else {
    return date.toLocaleDateString();
  }
}

export function EmailList({ filter }: EmailListProps) {
  console.log('EmailList rendering with filter:', filter);
  const filteredEmails = demoEmails.filter(email => 
    filter === "all" ? true : 
    filter === "starred" ? email.isStarred : 
    email.category === filter
  );

  return (
    <Card className="bg-white/10 border-white/20">
      <CardHeader>
        <CardTitle>Recent Updates</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px]">
          <div className="space-y-4">
            {filteredEmails.map((email) => (
              <div
                key={email.id}
                className={`p-4 rounded-lg transition-colors ${
                  email.isRead ? "bg-white/5" : "bg-white/10"
                } hover:bg-white/15`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      <span className="font-medium">{email.subject}</span>
                      {!email.isRead && (
                        <Badge variant="default" className="bg-blue-500">New</Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-400">{email.sender}</p>
                    <p className="text-sm">{email.preview}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="text-gray-400 hover:text-yellow-400">
                      {email.isStarred ? (
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ) : (
                        <StarOff className="h-4 w-4" />
                      )}
                    </button>
                    <span className="text-xs text-gray-400">
                      {getRelativeTimeString(email.date)}
                    </span>
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

