import { motion } from 'framer-motion'

const skills = {
  "Languages & Tools": [
    'Python', 'C', 'HTML', 'CSS', 'JavaScript (upcoming)'
  ],
  "Libraries / Frameworks": [
    'NumPy', 'Pandas', 'Matplotlib', 'PyTorch', 'TensorFlow', 'FastAPI', 'Flask', 'SQL', 'MySQL', 'MongoDB', 'React.js (upcoming)', 'Next.js (upcoming)'
  ],
  Interests: [
    'Artificial Intelligence', 'Machine Learning', 'Deep Learning', 'Generative AI', 'Web Development', 'Data Science', 'API Development'
  ]
}

export default function Skills() {
  return (
    <section id="skills" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Technical Skills
        </motion.h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {Object.entries(skills).map(([group, items]) => (
            <motion.div
              key={group}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <h3 className="text-lg font-medium text-cyan-300">{group}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((s) => (
                  <span key={s} className="rounded-xl border border-white/10 bg-slate-900/50 px-3 py-1.5 text-sm">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
