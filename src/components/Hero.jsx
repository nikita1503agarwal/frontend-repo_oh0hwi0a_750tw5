import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xVcGsBa0crFDHR-t/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* gradient overlay to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
        >
          Powering Industrial & Electrical Solutions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 max-w-2xl text-lg text-slate-200"
        >
          Turnkey products and services for power distribution, automation, and infrastructure. Robust, reliable, and ready for your next project.
        </motion.p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/products" className="inline-flex items-center rounded-md bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 text-sm font-medium transition">
            Browse Products
          </Link>
          <Link to="/contact" className="inline-flex items-center rounded-md bg-white/10 hover:bg-white/20 text-white px-5 py-3 text-sm font-medium transition">
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  )
}
