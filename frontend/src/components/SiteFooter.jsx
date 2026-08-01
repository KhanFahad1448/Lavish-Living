import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="mt-12 bg-emerald-deep text-ivory/80 sm:mt-20">
      <div className="container-luxe grid gap-6 py-8 sm:gap-10 sm:py-14 md:grid-cols-4">
        <div>
          <div className="mb-2 flex items-center gap-2 sm:mb-3">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-brass font-display text-base text-emerald-deep sm:h-9 sm:w-9 sm:text-lg">L</span>
            <span className="font-display text-lg text-ivory sm:text-xl">Lavish Living</span>
          </div>
          <p className="text-xs leading-5 sm:text-sm sm:leading-relaxed">A one-stop interior design studio crafting modular kitchens, bedrooms, false ceilings and full home interiors across Ranchi.</p>
        </div>
        <div>
          <h4 className="mb-2 text-sm text-ivory sm:mb-3 sm:text-base">Studio</h4>
          <p className="flex gap-2 text-xs sm:text-sm"><MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brass sm:h-4 sm:w-4" /> Khan Complex, Bariatu Road,<br />Ranchi 834009, Jharkhand</p>
        </div>
        <div>
          <h4 className="mb-2 text-sm text-ivory sm:mb-3 sm:text-base">Contact</h4>
          <p className="flex items-center gap-2 text-xs sm:text-sm"><Phone className="h-3.5 w-3.5 text-brass sm:h-4 sm:w-4" /> +91 80855 09001</p>
          <p className="mt-1.5 flex items-center gap-2 text-xs sm:mt-2 sm:text-sm"><Mail className="h-3.5 w-3.5 text-brass sm:h-4 sm:w-4" /> hello@lavishliving.in</p>
          <p className="mt-1.5 flex items-center gap-2 text-xs sm:mt-2 sm:text-sm"><Instagram className="h-3.5 w-3.5 text-brass sm:h-4 sm:w-4" /> @lavishliving.in</p>
        </div>
        <div>
          <h4 className="mb-2 text-sm text-ivory sm:mb-3 sm:text-base">Explore</h4>
          <ul className="space-y-1.5 text-xs sm:space-y-2 sm:text-sm">
            <li><Link to="/services" className="hover:text-brass">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-brass">Portfolio</Link></li>
            <li><Link to="/about" className="hover:text-brass">About</Link></li>
            <li><Link to="/contact" className="hover:text-brass">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ivory/10 py-3 text-center text-[10px] text-ivory/50 sm:py-5 sm:text-xs">© {new Date().getFullYear()} Lavish Living. All rights reserved.</div>
    </footer>
  );
}