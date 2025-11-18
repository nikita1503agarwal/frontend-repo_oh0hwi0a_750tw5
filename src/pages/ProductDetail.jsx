import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ProductDetail(){
  const { slug } = useParams()
  const [item, setItem] = useState(null)

  useEffect(() => {
    const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
    fetch(`${base}/products/${slug}`)
      .then(r => r.json())
      .then(setItem)
      .catch(() => setItem(null))
  }, [slug])

  if (!item) {
    return (
      <div className="bg-slate-950 min-h-screen text-white">
        <Navbar />
        <main className="pt-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-slate-300">Loading product...</p>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <Navbar />
      <main className="pt-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <img src={(item.images && item.images[0]) || 'https://images.unsplash.com/photo-1581092588429-1e7eabcf3f2b?q=80&w=1200&auto=format&fit=crop'} alt={item.title} className="w-full rounded-xl border border-white/10" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{item.title}</h1>
            <p className="text-slate-300 mt-2">{item.category}{item.brand ? ` • ${item.brand}` : ''}</p>
            {item.description && <p className="mt-6 text-slate-200">{item.description}</p>}
            {item.specs && item.specs.length > 0 && (
              <div className="mt-6">
                <h3 className="font-semibold">Specifications</h3>
                <ul className="list-disc pl-5 text-slate-200 mt-2 space-y-1">
                  {item.specs.map(s => <li key={s}>{s}</li>)}
                </ul>
              </div>
            )}
            <div className="mt-8 flex gap-3">
              <a href="#inquiry" className="px-5 py-3 rounded bg-blue-600 hover:bg-blue-500 text-white text-sm">Request Quote</a>
              <Link to="/products" className="px-5 py-3 rounded bg-white/10 hover:bg-white/20 text-white text-sm">Back to Products</Link>
            </div>
          </div>
        </div>

        <div id="inquiry" className="mt-16">
          <h2 className="text-2xl font-semibold">Request a Quote</h2>
          <InquiryForm productSlug={item.slug} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

function InquiryForm({ productSlug }){
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', message: '' })
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
    const res = await fetch(`${base}/submit-inquiry`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, product_slug: productSlug })
    })
    if (res.ok) setStatus('Thanks! We will contact you shortly.')
    else setStatus('Something went wrong. Please try again later.')
  }

  return (
    <form onSubmit={submit} className="mt-6 grid sm:grid-cols-2 gap-4 bg-white/5 p-6 rounded-xl border border-white/10">
      <div className="col-span-2 sm:col-span-1">
        <label className="block text-sm text-slate-300">Name</label>
        <input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required className="mt-1 w-full bg-slate-900 border border-white/10 rounded px-3 py-2 text-sm text-white" />
      </div>
      <div className="col-span-2 sm:col-span-1">
        <label className="block text-sm text-slate-300">Email</label>
        <input type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required className="mt-1 w-full bg-slate-900 border border-white/10 rounded px-3 py-2 text-sm text-white" />
      </div>
      <div className="col-span-2 sm:col-span-1">
        <label className="block text-sm text-slate-300">Company</label>
        <input value={form.company} onChange={e=>setForm({...form, company:e.target.value})} className="mt-1 w-full bg-slate-900 border border-white/10 rounded px-3 py-2 text-sm text-white" />
      </div>
      <div className="col-span-2 sm:col-span-1">
        <label className="block text-sm text-slate-300">Phone</label>
        <input value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} className="mt-1 w-full bg-slate-900 border border-white/10 rounded px-3 py-2 text-sm text-white" />
      </div>
      <div className="col-span-2">
        <label className="block text-sm text-slate-300">Message</label>
        <textarea value={form.message} onChange={e=>setForm({...form, message:e.target.value})} rows="4" className="mt-1 w-full bg-slate-900 border border-white/10 rounded px-3 py-2 text-sm text-white" />
      </div>
      <div className="col-span-2 flex items-center gap-4">
        <button className="px-5 py-3 rounded bg-blue-600 hover:bg-blue-500 text-white text-sm">Send Inquiry</button>
        <p className="text-sm text-slate-300">{status}</p>
      </div>
    </form>
  )
}
