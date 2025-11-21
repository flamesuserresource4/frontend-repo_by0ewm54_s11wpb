import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { MapPin, Mail, Phone, Github, Linkedin, Youtube } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950 text-white">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay - pointer events disabled so Spline stays interactive */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/60 to-slate-950" />

      {/* Content */}
      <div className="relative z-10">
        {/* Simple navbar */}
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/30" />
            <span className="text-lg font-semibold tracking-tight">Koushik Paul</span>
          </motion.div>

          <nav className="hidden gap-8 text-sm text-slate-200 md:flex">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>

        {/* Hero text */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-24 pt-8 md:grid-cols-2 md:pt-16">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl"
            >
              Building intelligent systems that make life smarter, safer, and more human.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="mt-5 max-w-xl text-slate-200"
            >
              CSE (AIML) undergrad passionate about AI, ML, and modern web development — crafting
              playful yet practical experiences from Kolkata, India.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a href="#projects" className="rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-5 py-3 font-medium text-white shadow-lg shadow-blue-500/30 transition hover:brightness-110">View Projects</a>
              <a href="#contact" className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white backdrop-blur transition hover:bg-white/10">Contact</a>
            </motion.div>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-200/90">
              <span className="inline-flex items-center gap-2"><MapPin size={16} /> Kolkata, India</span>
              <a href="mailto:paulk7428@gmail.com" className="inline-flex items-center gap-2 hover:text-white"><Mail size={16} /> paulk7428@gmail.com</a>
              <a href="tel:+918240945442" className="inline-flex items-center gap-2 hover:text-white"><Phone size={16} /> +91 8240945442</a>
            </div>

            <div className="mt-5 flex items-center gap-4">
              <a aria-label="GitHub" href="#" className="rounded-lg border border-white/10 bg-white/5 p-2 hover:bg-white/10"><Github size={18} /></a>
              <a aria-label="LinkedIn" href="#" className="rounded-lg border border-white/10 bg-white/5 p-2 hover:bg-white/10"><Linkedin size={18} /></a>
              <a aria-label="YouTube" href="#" className="rounded-lg border border-white/10 bg-white/5 p-2 hover:bg-white/10"><Youtube size={18} /></a>
            </div>
          </div>

          {/* Decorative right card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <div className="rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-400/20 p-6">
              <p className="text-sm uppercase tracking-widest text-cyan-300">Focus</p>
              <h3 className="mt-2 text-2xl font-semibold">AI/ML • Web • Data</h3>
              <p className="mt-3 text-slate-200/90">
                Exploring the intersection of intelligent systems and delightful product design.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center text-sm">
                {['AI/ML', 'Generative AI', 'FastAPI', 'React', 'MongoDB', 'TensorFlow'].map((t) => (
                  <div key={t} className="rounded-xl border border-white/10 bg-slate-900/40 px-3 py-2">{t}</div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
