import React, { useState } from 'react'
import {cn} from "@/lib/utils.js";

const skills = [
    // Frontend
    { name: "HTML/CSS", level:95, category: "front-end" },
    { name: "JavaScript", level:90, category: "front-end" },
    { name: "React", level:90, category: "front-end" },
    { name: "TypeScript", level:85, category: "front-end" },
    { name: "Tailwind CSS", level:90, category: "front-end" },
    { name: "Next.js", level:80, category: "front-end" },

    // Backend
    { name: "Node.js", level:80, category: "back-end" },
    { name: "Express.js", level:75, category: "back-end" },
    { name: "MongoDB", level:70, category: "back-end" },
    { name: "MYSQL", level:85, category: "back-end" },
    { name: "PHP", level:60, category: "back-end" },

    // Tools
    { name: "Git/Github", level:90, category: "tools" },
    { name: "Docker", level:60, category: "tools" },
    { name: "Figma", level:80, category: "tools" },
    { name: "VS Code", level:95, category: "tools" },
];

const categories = ["all", "front-end", "back-end", "tools"];

const SkillsSection = () => {

    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);

    return (
        <section id="skills"
                 className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl font-bold mb-12 text-center md:text-4xl">
                    My <span className="text-primary"> Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) =>(
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn("py-2 px-5 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary",
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                                     style={{ width: skill.level + "%"}}
                                />
                            </div>

                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default SkillsSection
