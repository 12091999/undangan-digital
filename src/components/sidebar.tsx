"use client"

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Wand2, X, Search, ChevronDown, Settings, Bookmark, BookOpen, FileSearch, FileText, Layers, Users, LayoutGrid } from 'lucide-react'
import { Input } from './ui/input'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

const sidebarItems = [
  {
    title: "Home",
    icon: <LayoutGrid />,
    isActive: true,
  },
  {
    title: "Templates",
    icon: <FileSearch />,
  },
  {
    title: "Files",
    icon: <FileText />,
    items: [
      { title: "Upload Your Data", url: "#" },
      { title: "Foto", url: "#", badge: "5" },
      { title: "Music", url: "#" },
      { title: "Calendar", url: "#" },
    ],
  },
  {
    title: "About",
    icon: <Layers />,
    badge: "Pro",
    items: [
      { title: "My Portfolio", url: "/portfolio", badge: "Updated" },
      { title: "Team", url: "#" },
      { title: "Address", url: "#" },
    ],
  },
  {
    title: "Contact",
    icon: <BookOpen />,
    items: [
      { title: "CV", url: "#" },
      { title: "Website", url: "#" },
      { title: "Office", url: "#" },
      { title: "Maps", url: "#" },
    ],
  },
  {
    title: "Community",
    icon: <Users />,
    items: [
      { title: "Explore", url: "#" },
      { title: "Following", url: "#" },
      { title: "Challenges", url: "#" },
      { title: "Events", url: "#" },
    ],
  },
  {
    title: "Resources",
    icon: <Bookmark />,
    items: [
      { title: "Stock Photos", url: "#" },
      { title: "Fonts", url: "#" },
      { title: "Icons", url: "#" },
      { title: "Templates", url: "#" },
    ],
  },
];

interface SidebarProps {
  sidebarOpen: boolean;
  mobileMenuOpen: boolean;
  onMobileMenuToggle: (isOpen: boolean) => void;
}

export default function Sidebar({
  sidebarOpen,
  mobileMenuOpen,
  onMobileMenuToggle
}: SidebarProps) {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  // Toggle expanded state for a specific item
  const toggleExpanded = (title: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const renderSidebarContent = () => (
    <>
      <div className="p-4">
        <div className="flex items-center gap-3">
          <div className="flex aspect-square size-10 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 text-white">
            <Wand2 className="size-5" />
          </div>
          <div>
            <h2 className="font-semibold">Wedding Invitation</h2>
            <p className="text-xs text-muted-foreground">The WO APP</p>
          </div>
        </div>
      </div>

      <div className="px-3 py-2">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input 
            type="search" 
            placeholder="Search..." 
            className="w-full rounded-2xl bg-muted pl-9 pr-4 py-2" 
          />
        </div>
      </div>

      <ScrollArea className="flex-1 px-3 py-2">
        <div className="space-y-1">
          {sidebarItems.map((data) => (
            <div key={data.title} className="mb-2">
              <button
                className={cn(
                  "flex w-full items-center justify-between rounded-2xl px-3 py-2 text-sm font-medium transition-colors",
                  data.isActive 
                    ? "bg-primary/10 text-primary" 
                    : "hover:bg-muted text-muted-foreground hover:text-foreground",
                )}
                onClick={() => data.items && toggleExpanded(data.title)}
              >
                <div className="flex items-center gap-3">
                  {data.icon}
                  <span>{data.title}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  {data.badge && (
                    <Badge variant="outline" className="rounded-full px-2 py-0.5 text-xs">
                      {data.badge}
                    </Badge>
                  )}
                  {data.items && (
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform",
                        expandedItems[data.title] ? "rotate-180" : "",
                      )}
                    />
                  )}
                </div>
              </button>

              {data.items && expandedItems[data.title] && (
                <div className="mt-1 ml-6 space-y-1 border-l border-border pl-3">
                  {data.items.map((subItem) => (
                    <div key={subItem.title}>
                      <a
                        href={subItem.url}
                        className="flex items-center justify-between rounded-2xl px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                      >
                        <span>{subItem.title}</span>
                        {/* {subItem.badge && (
                          <Badge variant="outline" className="rounded-full px-2 py-0.5 text-xs">
                            {subItem.badge}
                          </Badge>
                        )} */}
                      </a>
                      
                      {/* Render nested items if they exist */}
                      {/* {subItem.items && (
                        <div className="ml-4 mt-1 space-y-1 border-l border-border pl-3">
                          {subItem.items.map((nestedItem) => (
                            <a
                              key={nestedItem.title}
                              href={nestedItem.url}
                              className="block rounded-2xl px-3 py-1.5 text-xs text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                            >
                              {nestedItem.title}
                            </a>
                          ))}
                        </div>
                      )} */}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="border-t p-3">
        <div className="space-y-1">
          <button className="flex w-full items-center gap-3 rounded-2xl px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </button>
          
          <button className="flex w-full items-center justify-between rounded-2xl px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
            <div className="flex items-center gap-3">
              <Avatar className="h-6 w-6">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                <AvatarFallback>WO</AvatarFallback>
              </Avatar>
              <span>W.O</span>
            </div>
            <Badge variant="outline" className="text-xs">
              Pro
            </Badge>
          </button>
        </div>
      </div>
    </>
  );

  return (
    <div>
      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 md:hidden" 
          onClick={() => onMobileMenuToggle(false)} 
        />
      )}

      {/* Sidebar - Mobile */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 transform bg-background transition-transform duration-300 ease-in-out md:hidden",
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-full flex-col border-r">
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-3">
              <div className="flex aspect-square size-10 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 text-white">
                <Wand2 className="size-5" />
              </div>
              <div>
                <h2 className="font-semibold">Wedding Invitation</h2>
                <p className="text-xs text-muted-foreground">The WO APP</p>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => onMobileMenuToggle(false)}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex-1 flex flex-col">
            {renderSidebarContent()}
          </div>
        </div>
      </div>

      {/* Sidebar - Desktop */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-30 hidden w-64 transform border-r bg-background transition-transform duration-300 ease-in-out md:block",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-full flex-col">
          {renderSidebarContent()}
        </div>
      </div>
    </div>
  )
}
