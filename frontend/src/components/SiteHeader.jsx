import { Link, NavLink } from "react-router-dom";
import { Menu, X, LogOut } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-40 border-b border-emerald/10 bg-ivory/90 backdrop-blur">
      <div className="container-luxe flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-luxe text-brass font-display text-lg">L</span>
          <span className="font-display text-xl tracking-tight">Lavish Living</span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.to === "/"} className={({ isActive }) =>
              `text-sm transition ${isActive ? "text-emerald" : "text-ink/70 hover:text-emerald"}`
            }>{n.label}</NavLink>
          ))}
          {user?.role === "admin" && (
            <NavLink to="/admin" className="text-sm text-brass hover:text-emerald">Admin</NavLink>
          )}
          {user ? (
            <button onClick={logout} className="inline-flex items-center gap-1 text-sm text-ink/60 hover:text-emerald">
              <LogOut className="h-4 w-4" />Logout
            </button>
          ) : (
            <Link to="/auth" className="btn-outline px-4 py-2">Sign in</Link>
          )}
        </nav>
        <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-emerald/10 bg-ivory md:hidden">
          <div className="container-luxe flex flex-col gap-3 py-4">
            {nav.map((n) => (
              <NavLink key={n.to} to={n.to} end={n.to === "/"} onClick={() => setOpen(false)}
                className={({ isActive }) => `text-sm ${isActive ? "text-emerald" : "text-ink/70"}`}>{n.label}</NavLink>
            ))}
            {user?.role === "admin" && <Link to="/admin" onClick={() => setOpen(false)} className="text-sm text-brass">Admin</Link>}
            {user ? (
              <button onClick={() => { logout(); setOpen(false); }} className="text-left text-sm text-ink/60">Logout</button>
            ) : (
              <Link to="/auth" onClick={() => setOpen(false)} className="text-sm text-emerald">Sign in</Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}