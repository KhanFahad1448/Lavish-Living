import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="mt-20 bg-emerald-deep text-ivory/80">
      <div className="container-luxe grid gap-10 py-14 md:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-brass text-emerald-deep font-display text-lg">L</span>
            <span className="font-display text-xl text-ivory">Lavish Living</span>
          </div>
          <p className="text-sm leading-relaxed">A one-stop interior design studio crafting modular kitchens, bedrooms, false ceilings and full home interiors across Ranchi.</p>
        </div>
        <div>
          <h4 className="mb-3 text-ivory">Studio</h4>
          <p className="flex gap-2 text-sm"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brass" /> Khan Complex, Bariatu Road,<br />Ranchi 834009, Jharkhand</p>
        </div>
        <div>
          <h4 className="mb-3 text-ivory">Contact</h4>
          <p className="flex items-center gap-2 text-sm"><Phone className="h-4 w-4 text-brass" /> +91 99999 99999</p>
          <p className="mt-2 flex items-center gap-2 text-sm"><Mail className="h-4 w-4 text-brass" /> hello@lavishliving.in</p>
          <p className="mt-2 flex items-center gap-2 text-sm"><Instagram className="h-4 w-4 text-brass" /> @lavishliving.in</p>
        </div>
        <div>
          <h4 className="mb-3 text-ivory">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services" className="hover:text-brass">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-brass">Portfolio</Link></li>
            <li><Link to="/about" className="hover:text-brass">About</Link></li>
            <li><Link to="/contact" className="hover:text-brass">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ivory/10 py-5 text-center text-xs text-ivory/50">© {new Date().getFullYear()} Lavish Living. All rights reserved.</div>
    </footer>
  );
}
