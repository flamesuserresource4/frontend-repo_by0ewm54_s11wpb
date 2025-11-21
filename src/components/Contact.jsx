import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Contact
        </motion.h2>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <h3 className="text-xl font-semibold">Let’s collaborate</h3>
            <p className="mt-2 text-slate-200/90">
              Open to internships, collaborations, and exciting AI/Web projects.
            </p>
            <div className="mt-5 space-y-3 text-slate-200/90">
              <a href="mailto:paulk7428@gmail.com" className="flex items-center gap-3 hover:text-white">
                <Mail size={18} /> paulk7428@gmail.com
              </a>
              <a href="tel:+918240945442" className="flex items-center gap-3 hover:text-white">
                <Phone size={18} /> +91 8240945442
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            onSubmit={(e) => {
              e.preventDefault()
              const data = new FormData(e.currentTarget)
              const name = data.get('name')
              const email = data.get('email')
              const message = data.get('message')
              alert(`Thanks ${name}! I will reach you at ${email}.`)
              e.currentTarget.reset()
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm text-slate-300">Name</label>
                <input name="name" required className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 outline-none ring-0 placeholder:text-slate-500" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm text-slate-300">Email</label>
                <input type="email" name="email" required className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 outline-none" placeholder="you@example.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm text-slate-300">Message</label>
              <textarea name="message" rows={4} className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 outline-none" placeholder="Say hello..." />
            </div>
            <button type="submit" className="mt-6 w-full rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-3 font-medium text-white shadow-lg shadow-blue-500/30 hover:brightness-110">
              Send Message
            </button>
          </motion.form>
        </div>

        <p className="mt-10 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Koushik Paul — from Kolkata, West Bengal, India
        </p>
      </div>
    </section>
  )
}
