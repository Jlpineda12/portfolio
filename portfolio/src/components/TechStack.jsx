import { motion } from 'framer-motion'

const stack = [
    {
        category: "Backend",
        skills: ["Java", "Python", "SQL (PostgreSQL/MySQL)", "Microservicios"],
        color: "var(--color-accent-orange)"
    },
    {
        category: "Game Dev",
        skills: ["Unity 6", "Unreal Engine 5", "C#", "C++"],
        color: "var(--color-accent-cyan)"
    },
    {
        category: "IA",
        skills: ["CNN", "LSTM", "Computer Vision", "Prompt Engineering"],
        color: "var(--color-accent-purple)"
    },
    {
        category: "3D Art",
        skills: ["Maya", "Blender", "Substance Painter"],
        color: "#e91e63" // Pink/Red for art
    }
]

export default function TechStack() {
    return (
        <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
            <motion.h2
                className="text-3xl md:text-5xl font-bold mb-16 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                Stack Técnico
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {stack.map((group, index) => (
                    <motion.div
                        key={group.category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="glass-panel p-6 text-center"
                        style={{
                            borderTop: `4px solid ${group.color}`
                        }}
                    >
                        <h3 className="text-xl font-bold mb-6 tracking-wide" style={{ color: group.color }}>
                            {group.category}
                        </h3>
                        <ul className="space-y-3">
                            {group.skills.map((skill) => (
                                <li key={skill} className="text-gray-300 font-mono text-sm hover:text-white transition-colors">
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
