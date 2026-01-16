import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const experiences = [
    {
        id: 1,
        role: "Técnico Computacional y Multimedia",
        company: "Liceo Lunita de Chía",
        period: "2022 - Presente",
        location: "Chía, Colombia",
        description: "Gestión tecnológica y creación de activos digitales educativos. Implementación de metodologías ágiles (Scrum, Jira, Asana, Trello) para la gestión de proyectos educativos multimedia.",
    }
]

export default function Experience() {
    return (
        <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto">
            <motion.h2
                className="text-3xl md:text-5xl font-bold mb-16 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                Trayectoria
            </motion.h2>

            <div className="relative border-l-2 border-[var(--glass-border)] ml-4 md:ml-10 space-y-12">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={exp.id}
                        className="relative pl-8 md:pl-12"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                    >
                        {/* Timeline Dot */}
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--color-accent-cyan)] shadow-[0_0_10px_var(--color-accent-cyan)]" />

                        <div className="glass-panel p-6 hover:border-[var(--color-accent-cyan)] transition-colors duration-300">
                            <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                            <h4 className="text-xl text-[var(--color-accent-cyan)] mb-4">{exp.company}</h4>

                            <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-6 font-mono">
                                <span className="flex items-center gap-2">
                                    <Calendar size={16} /> {exp.period}
                                </span>
                                <span className="flex items-center gap-2">
                                    <MapPin size={16} /> {exp.location}
                                </span>
                            </div>

                            <p className="text-gray-300 leading-relaxed">
                                {exp.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
