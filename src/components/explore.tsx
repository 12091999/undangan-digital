import React from "react";
import { FaSearch, FaFilter, FaRegStar, FaRegClock } from "react-icons/fa";

const categories = [
    { name: "All", icon: <FaSearch /> },
    { name: "Popular", icon: <FaRegStar /> },
    { name: "Recent", icon: <FaRegClock /> },
    { name: "Filtered", icon: <FaFilter /> },
];

const items = [
    {
        id: 1,
        title: "Elegant Wedding",
        description: "A modern and elegant wedding invitation template.",
        image: "https://source.unsplash.com/400x200/?wedding,invitation",
        category: "Popular",
    },
    {
        id: 2,
        title: "Birthday Bash",
        description: "Colorful and fun birthday invitation.",
        image: "https://source.unsplash.com/400x200/?birthday,party",
        category: "Recent",
    },
    {
        id: 3,
        title: "Corporate Event",
        description: "Professional invitation for business events.",
        image: "https://source.unsplash.com/400x200/?corporate,event",
        category: "Filtered",
    },
    {
        id: 4,
        title: "Baby Shower",
        description: "Cute baby shower invitation template.",
        image: "https://source.unsplash.com/400x200/?baby,shower",
        category: "Popular",
    },
];

const Sidebar: React.FC<{
    selected: string;
    onSelect: (cat: string) => void;
}> = ({ selected, onSelect }) => (
    <aside className="w-60 bg-white border-r h-full p-6 flex flex-col gap-4">
        <h2 className="text-xl font-bold mb-4">Explore</h2>
        {categories.map((cat) => (
            <button
                key={cat.name}
                className={`flex items-center gap-3 px-3 py-2 rounded transition ${
                    selected === cat.name
                        ? "bg-blue-100 text-blue-700 font-semibold"
                        : "hover:bg-gray-100"
                }`}
                onClick={() => onSelect(cat.name)}
            >
                {cat.icon}
                {cat.name}
            </button>
        ))}
    </aside>
);

const ExploreCard: React.FC<{
    title: string;
    description: string;
    image: string;
}> = ({ title, description, image }) => (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
        <img src={image} alt={title} className="w-full h-36 object-cover" />
        <div className="p-4">
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="text-gray-600 text-sm mt-1">{description}</p>
            <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm">
                Preview
            </button>
        </div>
    </div>
);

const Explore: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = React.useState("All");

    const filteredItems =
        selectedCategory === "All"
            ? items
            : items.filter((item) => item.category === selectedCategory);

    return (
        <div className="flex h-screen bg-gray-50">
            <Sidebar selected={selectedCategory} onSelect={setSelectedCategory} />
            <main className="flex-1 p-8 overflow-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold">Templates</h1>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            placeholder="Search templates..."
                            className="border rounded px-3 py-2"
                        />
                        <button className="bg-gray-200 px-3 py-2 rounded hover:bg-gray-300">
                            <FaSearch />
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {filteredItems.map((item) => (
                        <ExploreCard
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                        />
                    ))}
                </div>
                {filteredItems.length === 0 && (
                    <div className="text-center text-gray-500 mt-16">
                        No templates found.
                    </div>
                )}
            </main>
        </div>
    );
};

export default Explore;