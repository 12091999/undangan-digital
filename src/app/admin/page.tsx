import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function AdminHome() {
    return (
        <div className="mx-auto max-w-7xl space-y-6 p-6">
            <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 p-8 text-white">
                <h2 className="text-3xl font-bold tracking-tight">Welcome to Wedding Invitation</h2>
                <p className="text-muted-foreground mt-2 text-white">
                    Create beautiful wedding invitations with our professional templates.
                </p>
            </div>

            {/* Content area */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-card text-card-foreground rounded-lg border p-6">
                    <h3 className="font-semibold mb-2">Templates</h3>
                    <p className="text-sm text-muted-foreground">
                        Choose from our collection of beautiful wedding invitation templates.
                        <Link href="/admin/templates" className="block mt-2">
                            <Button variant="secondary" className="w-full rounded-2xl">
                                See Template
                            </Button>
                            </Link>
                    </p>
                </div>

                <div className="bg-card text-card-foreground rounded-lg border p-6">
                    <h3 className="font-semibold mb-2">Customization</h3>
                    <p className="text-sm text-muted-foreground">
                        Personalize your invitations with custom colors, fonts, and images.
                        <Button variant="secondary" className="w-full rounded-2xl">
                            Customize Now
                        </Button>
                    </p>
                </div>

                <div className="bg-card text-card-foreground rounded-lg border p-6">
                    <h3 className="font-semibold mb-2">Share & Print</h3>
                    <p className="text-sm text-muted-foreground">
                        Share digitally or print high-quality invitations for your guests.
                        <Button variant="secondary" className="w-full rounded-2xl">
                            Click
                        </Button>
                    </p>
                </div>
            </div>
        </div>
    )
}
