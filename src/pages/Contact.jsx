import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact(){
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', message: '' })
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
    const res = await fetch(`${base}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
    if (res.ok) setStatus('Thanks! We will contact you shortly.')
    else setStatus('Something went wrong. Please try again later.')
  }

  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <Navbar />
      <main className="pt-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h1 className="text-3xl font-bold">Contact Us</h1>
            <p className="mt-4 text-slate-200">Reach out for product inquiries, quotations, or partnership opportunities.</p>
            <div className="mt-6 space-y-2 text-slate-300 text-sm">
              <p>Email: info@example.com</p>
              <p>Phone: +62 21 555-1234</p>
              <p>Address: Jakarta, Indonesia</p>
            </div>
          </div>
          <form onSubmit={submit} className="bg-white/5 p-6 rounded-xl border border-white/10">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-300">Name</label>
                <input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required className="mt-1 w-full bg-slate-900 border border-white/10 rounded px-3 py-2 text-sm text-white" />
              </div>
              <div>
                <label className="block text-sm text-slate-300">Email</label>
                <input type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required className="mt-1 w-full bg-slate-900 border border-white/10 rounded px-3 py-2 text-sm text-white" />
              </div>
              <div>
                <label className="block text-sm text-slate-300">Company</label>
                <input value={form.company} onChange={e=>setForm({...form, company:e.target.value})} className="mt-1 w-full bg-slate-900 border border-white/10 rounded px-3 py-2 text-sm text-white" />
              </div>
              <div>
                <label className="block text-sm text-slate-300">Phone</label>
                <input value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} className="mt-1 w-full bg-slate-900 border border-white/10 rounded px-3 py-2 text-sm text-white" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-slate-300">Message</label>
                <textarea rows="4" value={form.message} onChange={e=>setForm({...form, message:e.target.value})} className="mt-1 w-full bg-slate-900 border border-white/10 rounded px-3 py-2 text-sm text-white" />
              </div>
              <div className="sm:col-span-2 flex items-center gap-4">
                <button className="px-5 py-3 rounded bg-blue-600 hover:bg-blue-500 text-white text-sm">Send</button>
                <p className="text-sm text-slate-300">{status}</p>
              </div>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}
