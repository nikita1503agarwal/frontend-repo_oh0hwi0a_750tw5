import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function ProductGrid(){
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
    fetch(`${base}/products?featured=true`)
      .then(r => r.json())
      .then(setItems)
      .catch(() => setItems([]))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className="py-16 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-semibold">Featured Products</h2>
            <p className="text-slate-300 text-sm mt-1">Popular items across power, automation, and cable management.</p>
          </div>
          <Link to="/products" className="text-blue-400 hover:text-blue-300 text-sm">View all</Link>
        </div>

        {loading ? (
          <p className="text-slate-400">Loading...</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map(p => (
              <Link key={p.slug} to={`/products/${p.slug}`} className="group rounded-xl overflow-hidden border border-white/10 bg-white/5">
                <div className="aspect-video w-full overflow-hidden">
                  <img src={(p.images && p.images[0]) || 'https://images.unsplash.com/photo-1581092588429-1e7eabcf3f2b?q=80&w=1200&auto=format&fit=crop'} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="text-sm text-slate-300 mt-1">{p.category}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
