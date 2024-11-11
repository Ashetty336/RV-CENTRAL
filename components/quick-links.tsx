import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ExternalLink, Instagram, MessageCircle, Mail, MapPin, BookOpen } from 'lucide-react';

const linkGroups = [
  {
    title: 'Official Links',
    links: [
      { name: 'SAP Portal', url: '#', icon: ExternalLink },
      { name: 'RVCE Website', url: '#', icon: ExternalLink },
    ]
  },
  {
    title: 'Social',
    links: [
      { name: 'Instagram', url: '#', icon: Instagram },
      { name: 'WhatsApp Groups', url: '#', icon: MessageCircle },
    ]
  },
  {
    title: 'Academic',
    links: [
      { name: 'Classroom Groups', url: '#', icon: BookOpen },
      { name: 'Attendance Portal', url: '#', icon: Mail },
    ]
  }
];

export function QuickLinks() {
  return (
    <Card className="w-full max-w-md mx-auto backdrop-blur-lg bg-white/10 border-white/20">
      <CardHeader>
        <CardTitle className="text-xl">Quick Links</CardTitle>
        <CardDescription className="text-gray-400">
          Access frequently used resources
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[200px] pr-4">
          <div className="space-y-6">
            {linkGroups.map((group) => (
              <div key={group.title} className="space-y-2">
                <h3 className="text-sm font-medium text-gray-400">{group.title}</h3>
                <div className="grid grid-cols-2 gap-2">
                  {group.links.map((link) => {
                    const Icon = link.icon;
                    return (
                      <Button
                        key={link.name}
                        variant="ghost"
                        className="w-full justify-start text-left hover:bg-white/5"
                      >
                        <Icon className="mr-2 h-4 w-4" />
                        {link.name}
                      </Button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}