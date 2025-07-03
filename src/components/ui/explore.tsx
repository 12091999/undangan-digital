import React from "react";
import { Link } from "react-router-dom";
import { FaCompass, FaStar, FaChartBar, FaUsers } from "react-icons/fa";

interface ExploreItem {
    label: string;
    icon: React.ReactNode;
    path: string;
    description: string;
}

const exploreItems: ExploreItem[] = [
    {
        label: "Discover",
        icon: <FaCompass />,
        path: "/admin/explore/discover",
        description: "Find new features and updates.",
    },
    {
        label: "Popular",
        icon: <FaStar />,
        path: "/admin/explore/popular",
        description: "See what's trending among users.",
    },
    {
        label: "Analytics",
        icon: <FaChartBar />,
        path: "/admin/explore/analytics",
        description: "View usage statistics and reports.",
    },
    {
        label: "Community",
        icon: <FaUsers />,
        path: "/admin/explore/community",
        description: "Connect with other administrators.",
    },
];

const Explore: React.FC = () => {
    return (
        <section className="explore-section p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <FaCompass className="text-blue-500" />
                Explore
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {exploreItems.map((item) => (
                    <li key={item.label}>
                        <Link
                            to={item.path}
                            className="flex items-center gap-4 p-4 border rounded-lg hover:bg-blue-50 transition"
                        >
                            <span className="text-2xl text-blue-600">{item.icon}</span>
                            <div>
                                <div className="font-semibold">{item.label}</div>
                                <div className="text-sm text-gray-500">{item.description}</div>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Explore;