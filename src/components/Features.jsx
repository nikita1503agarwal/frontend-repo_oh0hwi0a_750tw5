import { motion } from 'framer-motion'
import { Zap, Shield, Boxes } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Fast and Reliable',
    desc: 'Industrial-grade components sourced from trusted manufacturers with quick delivery.'
  },
  {
    icon: Shield,
    title: 'Safety First',
    desc: 'Products comply with IEC and international standards for safe operations.'
  },
  {
    icon: Boxes,
    title: 'End-to-End Supply',
    desc: 'From power distribution to automation, get everything from a single partner.'
  }
]

export default function Features(){
  return (
    <section className="py-16 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-xl border border-white/10 bg-white/5 p-6"
            >
              <f.icon className="w-6 h-6 text-blue-400" />
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
