import { motion } from 'framer-motion'
import { ArrowUpRight, Brain, Gamepad2, Database, Smartphone, Cuboid } from 'lucide-react'

const projects = [
    {
        id: 1,
        title: "Detección de Instrumentos y Humor",
        category: "IA Multimodal",
        description: "Arquitecturas CNN y LSTM para análisis de audio y video. Entrenamiento en Kaggle y despliegue web.",
        accent: "var(--color-accent-purple)",
        icon: <Brain size={24} />,
        colSpan: "md:col-span-2",
    },
    {
        id: 2,
        title: "Trigonometría VR",
        category: "VR Education",
        description: "Enseñanza de Ley de Seno y Coseno con Unity 6 y Meta Quest 3.",
        accent: "var(--color-accent-cyan)",
        icon: <Cuboid size={24} />,
        colSpan: "md:col-span-1",
    },
    {
        id: 3,
        title: "Ojos del Planeta",
        category: "Serious Game VR",
        description: "Simulación biológica de abejas en Realidad Virtual.",
        accent: "#4caf50", // Greenish for nature/bio
        icon: <Gamepad2 size={24} />,
        colSpan: "md:col-span-1",
    },
    {
        id: 4,
        title: "Snake Engine",
        category: "Backend & Graphics",
        description: "Game Engine de lógica pura en Java. POO avanzada sin motores externos.",
        accent: "var(--color-accent-orange)",
        icon: <Database size={24} />,
        colSpan: "md:col-span-2",
    },
    {
        id: 5,
        title: "WebAR - Imaginatio XVII",
        category: "Marketing Guerrilla",
        description: "Campaña de publicidad con Realidad Aumentada accesible desde el navegador.",
        accent: "#ff0055", // Distinct color for AR/Marketing
        icon: <Smartphone size={24} />,
        colSpan: "md:col-span-3",
    },
]

function ProjectCard({ project, index }) {
    return (
        <motion.div
            className={`glass-panel p-6 relative group overflow-hidden ${project.colSpan} min-h-[300px] flex flex-col justify-between`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{
                y: -10,
                boxShadow: `0 20px 40px -10px ${project.accent}20`,
                borderColor: project.accent
            }}
        >
            {/* Background Gradient Blob on Hover */}
            <div
                className="absolute -inset-2 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl"
                style={{ background: project.accent }}
            />

            <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                    <div
                        className="p-3 rounded-xl bg-white/5 border border-white/10 text-white"
                        style={{ color: project.accent }}
                    >
                        {project.icon}
                    </div>
                    <ArrowUpRight className="text-white/30 group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <span className="text-sm font-mono tracking-wider uppercase opacity-70 mb-4 block" style={{ color: project.accent }}>
                    {project.category}
                </span>
                <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                </p>
            </div>

            <div className="relative z-10 mt-6 pt-6 border-t border-white/10">
                {/* Tech tags could go here */}
                <div className="text-xs text-gray-500 font-mono">
                    0{project.id} // PROJECT_
                </div>
            </div>
        </motion.div>
    )
}

export default function BentoGrid() {
    return (
        <section className="py-32 px-4 md:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    className="text-3xl md:text-5xl font-bold mb-16 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    El <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Corazón</span> del Trabajo
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}
