import { Cpu, Rocket, BookOpen, BarChart3, LucideIcon } from "lucide-react";

export const CONTENT_BY_TAB = {
    whitepapers: [
        {
            globalInfo: {
                title: "Quantum Computing",
                description: "Provides technical specifications and requirements for implementing quantum computing systems.",
                icon: Cpu,
            },
            cards: [
                {
                    title: "Quantum Computing Whitepaper",
                    description: "An in-depth whitepaper exploring the principles, applications, and potential impact of quantum computing.",
                    image: "/resources/quantum-preview.png",
                    stats: [
                        { label: "Publication Date", value: "July 2023" },
                        { label: "Category", value: "Quantum" },
                        { label: "Author", value: "Dr. Quantum" }
                    ]
                }
            ]
        },
        {
            globalInfo: {
                title: "Space Exploration",
                description: "In-depth analysis of Mars colonization and infrastructure.",
                icon: Rocket,
            },
            cards: [
                {
                    title: "Space Logistics Whitepaper",
                    description: "Explores the technical requirements for asteroid mining and resource management.",
                    image: "/resources/quantum-preview2.png",
                    stats: [
                        { label: "Publication Date", value: "Sept 2023" },
                        { label: "Category", value: "Space" },
                        { label: "Author", value: "FutureTech" }
                    ]
                }
            ]
        }
    ],
    ebooks: [ // Обернули в массив []
        {
            globalInfo: {
                title: "Digital Strategy eBooks",
                description: "Comprehensive guides to modernizing your digital footprint.",
                icon: BookOpen,
            },
            cards: [
                {
                    title: "Digital Transformation Guide",
                    description: "Learn how to transition to AI-driven workflows.",
                    image: "/resources/ebook-digital.jpg",
                    stats: [
                        { label: "Publication Date", value: "Jan 2024" },
                        { label: "Category", value: "Strategy" },
                        { label: "Author", value: "Sarah Mitchell" }
                    ]
                }
            ]
        }
    ],
    reports: [ // Обернули в массив []
        {
            globalInfo: {
                title: "AI Market Reports",
                description: "Data-driven insights into AI growth projections.",
                icon: BarChart3,
            },
            cards: [
                {
                    title: "Global AI Market Report",
                    description: "Analysis of market trends and projections for 2024-2030.",
                    image: "/resources/report-ai.jpg",
                    stats: [
                        { label: "Publication Date", value: "March 2024" },
                        { label: "Category", value: "Analysis" },
                        { label: "Author", value: "Data Insight Group" }
                    ]
                }
            ]
        }
    ]
};