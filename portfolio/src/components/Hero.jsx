import { Canvas, useFrame } from '@react-three/fiber'
import { PerspectiveCamera, Environment } from '@react-three/drei'
import { useRef, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

// The 3D Glass Core Component
function GlassCore() {
    const meshRef = useRef()

    useFrame((state) => {
        const time = state.clock.getElapsedTime()

        // Auto rotation
        meshRef.current.rotation.x = time * 0.2
        meshRef.current.rotation.y = time * 0.3

        // Mouse reaction
        const mouseX = state.mouse.x * 2
        const mouseY = state.mouse.y * 2

        meshRef.current.rotation.x += mouseY * 0.05
        meshRef.current.rotation.y += mouseX * 0.05
    })

    return (
        <mesh ref={meshRef}>
            <icosahedronGeometry args={[2.5, 0]} />
            <meshPhysicalMaterial
                roughness={0.1}
                transmission={1}
                thickness={2}
                clearcoat={1}
                clearcoatRoughness={0.1}
                ior={1.5}
                color="#ffffff"
                attenuationColor="#ffffff"
                attenuationDistance={1}
            />
        </mesh>
    )
}

function FloatingPixels() {
    // Generate some random floating particles
    const positions = useMemo(() => {
        const temp = new Float32Array(50 * 3);
        for (let i = 0; i < 50 * 3; i++) {
            // eslint-disable-next-line react-hooks/purity
            temp[i] = (Math.random() - 0.5) * 15;
        }
        return temp;
    }, [])

    return (
        <points>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={50}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial size={0.05} color="#00f0ff" transparent opacity={0.6} sizeAttenuation={true} />
        </points>
    )
}

export default function Hero() {
    return (
        <section className="h-screen w-full relative flex flex-col items-center justify-center overflow-hidden">

            {/* 3D Background */}
            <div className="absolute inset-0 z-0">
                <Canvas>
                    <PerspectiveCamera makeDefault position={[0, 0, 8]} />
                    <Environment preset="night" />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} color="#00f0ff" />
                    <pointLight position={[-10, -10, -10]} intensity={1} color="#bd00ff" />

                    <GlassCore />
                    <FloatingPixels />
                </Canvas>
            </div>

            {/* Content Overlay */}
            <div className="z-10 text-center space-y-8 p-4 glass-panel max-w-4xl w-full mx-4 border-none bg-transparent backdrop-blur-none">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-xl md:text-2xl font-light tracking-[0.2em] text-[var(--color-accent-cyan)] mb-4">
                        JOSÉ LUIS PINEDA BARRERA
                    </h2>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
                        Arquitectando sistemas.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Diseñando mundos.</span><br />
                        Entrenando mentes.
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                        Junior Software Engineer | Game Developer | AI Enthusiast
                    </p>
                </motion.div>

                <motion.div
                    className="flex justify-center gap-6 mt-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <a href="#" className="p-3 rounded-full border border-[var(--glass-border)] hover:bg-[var(--glass-bg)] hover:border-[var(--color-accent-cyan)] transition-all duration-300">
                        <Github size={24} />
                    </a>
                    <a href="#" className="p-3 rounded-full border border-[var(--glass-border)] hover:bg-[var(--glass-bg)] hover:border-[var(--color-accent-cyan)] transition-all duration-300">
                        <Linkedin size={24} />
                    </a>
                    <a href="#" className="p-3 rounded-full border border-[var(--glass-border)] hover:bg-[var(--glass-bg)] hover:border-[var(--color-accent-cyan)] transition-all duration-300">
                        <Mail size={24} />
                    </a>
                </motion.div>

            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <div className="w-6 h-10 border-2 border-[var(--glass-border)] rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-white rounded-full bg-slate-400" />
                </div>
            </motion.div>

        </section>
    )
}
