import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          About
        </motion.h2>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <h3 className="text-xl font-semibold">Education</h3>
            <p className="mt-2 text-slate-200/90">
              B.Tech in Computer Science and Engineering – Artificial Intelligence & Machine Learning (CSE AIML)
              at Netaji Subhash Engineering College (NSEC), Kolkata — currently in 2nd year (2025).
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <h3 className="text-xl font-semibold">Goals & Career Path</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-200/90">
              <li>Short-Term: Strengthen AI/ML and web dev foundations through projects.</li>
              <li>Mid-Term: Target a 6–10 LPA role at a top tech company.</li>
              <li>Long-Term: Prepare for WBCS while growing in tech and entrepreneurship.</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
        >
          <h3 className="text-xl font-semibold">Achievements & Strengths</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-200/90">
            <li>Winner in drawing and art competitions at club level.</li>
            <li>Co-founded early-stage ideas: Nexonic and Study With Friends.</li>
            <li>Good at singing and digital content creation.</li>
            <li>Calm, consistent learner; team-oriented and patient.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
