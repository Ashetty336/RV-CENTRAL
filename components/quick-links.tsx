import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Instagram } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { HiOutlineExternalLink } from "react-icons/hi"

export function QuickLinks() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Quick Links</CardTitle>
        <CardDescription>Access frequently used resources</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="space-y-4">
          <h3 className="text-sm font-medium">Official Links</h3>
          <div className="grid grid-cols-2 gap-4">
            <a 
              href="#" 
              className="flex items-center gap-2 text-sm rounded-lg border p-3 hover:bg-accent transition-colors"
            >
              <HiOutlineExternalLink className="h-4 w-4" />
              SAP Portal
            </a>
            <a 
              href="#" 
              className="flex items-center gap-2 text-sm rounded-lg border p-3 hover:bg-accent transition-colors"
            >
              <HiOutlineExternalLink className="h-4 w-4" />
              RVCE Website
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium">Social</h3>
          <div className="grid grid-cols-2 gap-4">
            <a 
              href="#" 
              className="flex items-center gap-2 text-sm rounded-lg border p-3 hover:bg-accent transition-colors"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </a>
            <a 
              href="#" 
              className="flex items-center gap-2 text-sm rounded-lg border p-3 hover:bg-accent transition-colors"
            >
              <FaWhatsapp className="h-4 w-4" />
              WhatsApp Groups
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}