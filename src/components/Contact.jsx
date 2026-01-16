import { motion } from 'framer-motion'
import { Send, User } from 'lucide-react'

const references = [
    {
        name: "Luis Alejandro Pineda B.",
        role: "Referencia Familiar / Profesional",
        contact: "Disponible bajo petición"
    },
    {
        name: "Elizabet Barrera S.",
        role: "Referencia Familiar / Profesional",
        contact: "Disponible bajo petición"
    }
]

export default function Contact() {
    return (
        <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto mb-20">
            <motion.h2
                className="text-3xl md:text-5xl font-bold mb-16 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                Contacto
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Minimalist Form */}
                <motion.div
                    className="glass-panel p-8"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold mb-6">Iniciar Proyecto</h3>
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-mono text-gray-400 mb-2">Nombre</label>
                            <input
                                type="text"
                                className="w-full bg-transparent border-b border-[var(--glass-border)] py-2 focus:border-[var(--color-accent-cyan)] focus:outline-none transition-colors"
                                placeholder="Tu nombre"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-mono text-gray-400 mb-2">Email</label>
                            <input
                                type="email"
                                className="w-full bg-transparent border-b border-[var(--glass-border)] py-2 focus:border-[var(--color-accent-cyan)] focus:outline-none transition-colors"
                                placeholder="tu@email.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-mono text-gray-400 mb-2">Mensaje</label>
                            <textarea
                                rows={4}
                                className="w-full bg-transparent border-b border-[var(--glass-border)] py-2 focus:border-[var(--color-accent-cyan)] focus:outline-none transition-colors resize-none"
                                placeholder="Cuéntame sobre tu proyecto..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="flex items-center gap-2 bg-[var(--color-accent-cyan)] text-black px-6 py-2 rounded-full font-bold hover:bg-white transition-colors"
                        >
                            Enviar <Send size={18} />
                        </button>
                    </form>
                </motion.div>

                {/* References */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold mb-6 text-center md:text-left">Referencias</h3>
                    {references.map((ref, index) => (
                        <motion.div
                            key={index}
                            className="glass-panel p-6 flex items-center gap-4"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                                <User size={24} className="text-gray-400" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">{ref.name}</h4>
                                <p className="text-sm text-gray-400">{ref.role}</p>
                            </div>
                        </motion.div>
                    ))}

                    <motion.div
                        className="mt-12 text-center md:text-left text-gray-500 text-sm"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        <p>&copy; 2026 José Luis Pineda Barrera.</p>
                        <p>Designed with Antigravity.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
