import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About(){
  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <Navbar />
      <main className="pt-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="mt-4 max-w-3xl text-slate-200">We supply industrial and electrical products for factories, infrastructure, and commercial buildings. Our mission is to deliver reliable components and outstanding service.</p>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold">Experience</h3>
            <p className="text-slate-300 text-sm mt-2">Decades of projects across power, automation, and cable systems.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold">Partners</h3>
            <p className="text-slate-300 text-sm mt-2">Authorized distribution with global manufacturers.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold">Support</h3>
            <p className="text-slate-300 text-sm mt-2">Responsive pre-sales and after-sales technical support.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
