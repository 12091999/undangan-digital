"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Bell, Cloud, Menu, MessageSquare, PanelLeft } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import Sidebar from "@/components/sidebar"

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [notifications, setNotifications] = useState(5)
    const [sidebarOpen, setSidebarOpen] = useState(true)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [loading, setLoading] = useState(false)

    // Handle mobile menu toggle
    const handleMobileMenuToggle = (isOpen: boolean) => {
        setMobileMenuOpen(isOpen)
    }

    // Handle sidebar toggle for desktop
    const handleSidebarToggle = () => {
        setSidebarOpen(!sidebarOpen)
    }

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-2">
                <div className="relative w-20 h-20">
                    {/* Loading spinner */}
                    <div className="w-full h-full rounded-full border-2 border-gray-200 dark:border-gray-700 border-t-primary animate-spin"></div>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Loading...</span>
            </div>
        );
    }


    return (
        <div className="relative min-h-screen overflow-hidden bg-background">
            {/* Animated gradient background */}
            <motion.div
                className="absolute inset-0 -z-10 opacity-20"
                animate={{
                    background: [
                        "radial-gradient(circle at 50% 50%, rgba(120, 41, 190, 0.5) 0%, rgba(53, 71, 125, 0.5) 50%, rgba(0, 0, 0, 0) 100%)",
                        "radial-gradient(circle at 30% 70%, rgba(233, 30, 99, 0.5) 0%, rgba(81, 45, 168, 0.5) 50%, rgba(0, 0, 0, 0) 100%)",
                        "radial-gradient(circle at 70% 30%, rgba(76, 175, 80, 0.5) 0%, rgba(32, 119, 188, 0.5) 50%, rgba(0, 0, 0, 0) 100%)",
                        "radial-gradient(circle at 50% 50%, rgba(120, 41, 190, 0.5) 0%, rgba(53, 71, 125, 0.5) 50%, rgba(0, 0, 0, 0) 100%)",
                    ],
                }}
                transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />

            {/* Sidebar Component */}
            <Sidebar sidebarOpen={sidebarOpen} mobileMenuOpen={mobileMenuOpen} onMobileMenuToggle={handleMobileMenuToggle} role="Admin" />

            {/* Main Content */}
            <div className={cn("min-h-screen transition-all duration-300 ease-in-out", sidebarOpen ? "md:pl-64" : "md:pl-0")}>
                <header className="sticky top-0 z-10 flex h-16 items-center gap-3 border-b bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                    {/* Mobile menu button */}
                    <Button variant="ghost" size="icon" className="md:hidden" onClick={() => handleMobileMenuToggle(true)}>
                        <Menu className="h-5 w-5" />
                    </Button>

                    {/* Desktop sidebar toggle */}
                    <Button variant="ghost" size="icon" className="hidden md:flex" onClick={handleSidebarToggle}>
                        <PanelLeft className="h-5 w-5" />
                    </Button>

                    <div className="flex flex-1 items-center justify-between">
                        <h1 className="text-xl font-semibold">Wedding Invitation</h1>

                        <div className="flex items-center gap-2">
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="ghost" size="icon" className="rounded-2xl">
                                            <Cloud className="h-5 w-5" />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>Cloud Storage</TooltipContent>
                                </Tooltip>
                            </TooltipProvider>

                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="ghost" size="icon" className="rounded-2xl">
                                            <MessageSquare className="h-5 w-5" />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>Messages</TooltipContent>
                                </Tooltip>
                            </TooltipProvider>

                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="ghost" size="icon" className="rounded-2xl relative">
                                            <Bell className="h-5 w-5" />
                                            {notifications > 0 && (
                                                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                                                    {notifications}
                                                </span>
                                            )}
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>Notifications {notifications > 0 && `(${notifications})`}</TooltipContent>
                                </Tooltip>
                            </TooltipProvider>

                            <Avatar className="h-9 w-9 border-2 border-primary">
                                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                                <AvatarFallback>LI</AvatarFallback>
                            </Avatar>
                        </div>
                    </div>
                </header>

                <main className="flex-1 p-4 md:p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}
