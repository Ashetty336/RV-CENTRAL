"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X, Send } from "lucide-react";
import { useState } from "react";

interface Message {
  id: string;
  sender: string;
  content: string;
  timestamp: Date;
}

interface ProjectChatProps {
  project: {
    id: string;
    title: string;
    leader: {
      name: string;
    };
  };
  onClose: () => void;
}

const demoMessages: Message[] = [
  {
    id: "1",
    sender: "John Smith",
    content: "Hi! Thanks for your interest in our project.",
    timestamp: new Date("2024-03-20T10:00:00"),
  },
  {
    id: "2",
    sender: "You",
    content: "Hello! I'd like to know more about the required skills.",
    timestamp: new Date("2024-03-20T10:01:00"),
  },
  // Add more demo messages
];

export function ProjectChat({ project, onClose }: ProjectChatProps) {
  const [messages, setMessages] = useState<Message[]>(demoMessages);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (!newMessage.trim()) return;

    const message: Message = {
      id: Date.now().toString(),
      sender: "You",
      content: newMessage,
      timestamp: new Date(),
    };

    setMessages([...messages, message]);
    setNewMessage("");
  };

  return (
    <Card className="bg-white/10 border-white/20">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg">Chat with {project.leader.name}</CardTitle>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="hover:bg-white/10"
        >
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col h-[600px]">
          <ScrollArea className="flex-1 mb-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex flex-col ${
                    message.sender === "You" ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.sender === "You"
                        ? "bg-blue-500/20"
                        : "bg-white/10"
                    }`}
                  >
                    <p className="text-sm font-medium mb-1">{message.sender}</p>
                    <p className="text-sm">{message.content}</p>
                    <p className="text-xs text-gray-400 mt-1">
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          <div className="flex gap-2">
            <Input
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              className="bg-white/5 border-white/10"
            />
            <Button onClick={handleSend}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}