import { motion } from 'framer-motion'

const projects = [
  {
    title: 'AI-Powered eCommerce Platform',
    role: 'Co-founder • Frontend Developer • AI Vision Planner',
    description:
      'An AI-first marketplace concept connecting vendors and customers with analytics, recommendations, and real-time insights.',
    tech: ['Python', 'React', 'FastAPI', 'MongoDB', 'TensorFlow'],
  },
  {
    title: 'HelpNet – AI Safety System',
    role: 'Co-founder • System Designer • Product Planner',
    description:
      'An AI-driven safety app concept that detects distress and alerts trusted users or authorities. Aiming to combine AI + IoT for prevention.',
    tech: ['Flutter/React Native', 'TensorFlow Lite', 'Firebase', 'GPS APIs'],
  },
  {
    title: 'Study With Friends – YouTube',
    role: 'Co-founder • Editor • Content Strategist • Social Media Manager',
    description:
      'An education channel for WBBSE Class 9 & 10 students in Bengali — inspired by Physics Wallah and others, focused on clarity and consistency.',
    tech: ['Content', 'Branding', 'YouTube', 'Editing'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Projects & Startups
        </motion.h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl font-semibold">{p.title}</h3>
              </div>
              <p className="mt-2 text-sm text-cyan-300">{p.role}</p>
              <p className="mt-3 text-slate-200/90">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-sm">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-xl border border-white/10 bg-slate-900/50 px-3 py-1.5">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
