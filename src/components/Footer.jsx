export default function Footer(){
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white font-semibold">Armasindo</h4>
            <p className="text-sm mt-2">Industrial and electrical distribution partner. Panels, automation, cable management, and more.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold">Products</h4>
            <ul className="mt-2 space-y-1 text-sm">
              <li>Power Distribution</li>
              <li>Automation</li>
              <li>Cable Management</li>
              <li>Lighting & Accessories</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold">Company</h4>
            <ul className="mt-2 space-y-1 text-sm">
              <li>About</li>
              <li>Careers</li>
              <li>News</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold">Contact</h4>
            <ul className="mt-2 space-y-1 text-sm">
              <li>info@example.com</li>
              <li>+62 21 555-1234</li>
              <li>Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>
        <div className="pt-6 mt-6 border-t border-white/10 text-xs text-slate-400">© {new Date().getFullYear()} Armasindo. All rights reserved.</div>
      </div>
    </footer>
  )
}
