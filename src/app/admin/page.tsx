import React from 'react'

export default function AdminHome() {
    return (
        <div className="mx-auto max-w-7xl">
            <div className="mb-8">
                <h2 className="text-3xl font-bold tracking-tight">Welcome to Wedding Invitation</h2>
                <p className="text-muted-foreground mt-2">
                    Create beautiful wedding invitations with our professional templates.
                </p>
            </div>

            {/* Content area */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-card text-card-foreground rounded-lg border p-6">
                    <h3 className="font-semibold mb-2">Templates</h3>
                    <p className="text-sm text-muted-foreground">
                        Choose from our collection of beautiful wedding invitation templates.
                    </p>
                </div>

                <div className="bg-card text-card-foreground rounded-lg border p-6">
                    <h3 className="font-semibold mb-2">Customization</h3>
                    <p className="text-sm text-muted-foreground">
                        Personalize your invitations with custom colors, fonts, and images.
                    </p>
                </div>

                <div className="bg-card text-card-foreground rounded-lg border p-6">
                    <h3 className="font-semibold mb-2">Share & Print</h3>
                    <p className="text-sm text-muted-foreground">
                        Share digitally or print high-quality invitations for your guests.
                    </p>
                </div>
            </div>
        </div>
    )
}
