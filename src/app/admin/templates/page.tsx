import React from "react";
import Link from "next/link";

type Template = {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
};

const templates: Template[] = [
    {
        id: 1,
        name: "Elegant Wedding",
        description: "A sophisticated template for weddings.",
        imageUrl: "/images/template1.jpg",
    },
    {
        id: 2,
        name: "Birthday Bash",
        description: "Fun and colorful birthday invitation.",
        imageUrl: "/images/template2.jpg",
    },
    {
        id: 3,
        name: "Corporate Event",
        description: "Professional template for business events.",
        imageUrl: "/images/template3.jpg",
    },
    {
        id: 4,
        name: "Fall Event",
        description: "Professional template for business events.",
        imageUrl: "/images/template3.jpg",
    },
    {
        id: 5,
        name: "Bride Event",
        description: "Professional template for business events.",
        imageUrl: "/images/template3.jpg",
    },
    {
        id: 6,
        name: "Groom Event",
        description: "Professional template for business events.",
        imageUrl: "/images/template3.jpg",
    },
    // Add more templates as needed
];

const TemplateCard: React.FC<{ template: Template }> = ({ template }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <img
            src={template.imageUrl}
            alt={template.name}
            className="w-full h-48 object-cover"
        />
        <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">{template.name}</h2>
            <p className="text-gray-600 text-sm">{template.description}</p>
        </div>
    </div>
);

const TemplatesPage: React.FC = () => {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-6">Template Collection</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {templates.map((template) => (
                    <TemplateCard key={template.id} template={template} />
                ))}
                {/* Button Previous */}
                <div className="fixed bottom-6 right-6">
                <Link href="/admin">
                    <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded text-end">
                        ← Back to Home
                    </button>
                </Link>
            </div>
        </div>
    </div>
    );
};

export default TemplatesPage;