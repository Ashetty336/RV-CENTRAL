import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  BookOpen, 
  Calendar, 
  Users, 
  Mail, 
  MapPin, 
  MessageSquare 
} from "lucide-react";

const navItems = [
  {
    title: "Academic",
    items: [
      { name: "Attendance", icon: Calendar, href: "/dashboard" },
      { name: "Courses", icon: BookOpen, href: "/dashboard/courses" },
      { name: "EL Projects", icon: Users, href: "/dashboard/projects" },
    ],
  },
  {
    title: "Communication",
    items: [
      { name: "Email Updates", icon: Mail, href: "/dashboard/email" },
      { name: "Chat", icon: MessageSquare, href: "/dashboard/chat" },
    ],
  },
  {
    title: "Campus",
    items: [
      { name: "Locations", icon: MapPin, href: "/dashboard/locations" },
    ],
  },
];

export function DashboardNav() {
  const pathname = usePathname();

  return (
    <nav className="w-64 hidden lg:block">
      <ScrollArea className="h-[calc(100vh-4rem)] py-4">
        <div className="space-y-6 px-2">
          {navItems.map((section) => (
            <div key={section.title} className="space-y-2">
              <h3 className="text-sm font-medium text-gray-400 px-2">
                {section.title}
              </h3>
              <div className="space-y-1">
                {section.items.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <Button
                      variant="ghost"
                      className={`w-full justify-start text-left hover:bg-white/5 ${
                        pathname === item.href ? "bg-white/10" : ""
                      }`}
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.name}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </nav>
  );
}