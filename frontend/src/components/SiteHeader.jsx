import { Link, NavLink } from "react-router-dom";
import {Menu,X,LogOut,User,ChevronDown,} from "lucide-react";
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
  const [profileOpen, setProfileOpen] = useState(false);

  const { user, logout } = useAuth();

  // User initials
  const initials =
    user?.name
      ?.split(" ")
      .map((n) => n[0])
      .join("")
      .substring(0, 2)
      .toUpperCase() || "U";

  return (
    <header className="sticky top-0 z-40 border-b border-emerald/10 bg-ivory/90 backdrop-blur">
      <div className="container-luxe flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-luxe text-lg font-display text-brass">
            L
          </span>

          <span className="font-display text-xl tracking-tight">
            Lavish Living
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              className={({ isActive }) =>
                `text-sm transition ${
                  isActive
                    ? "text-brass"
                    : "text-ink/70 hover:text-brass"
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}

          {/* Admin Link */}
          {user?.role === "admin" && (
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                `text-sm transition ${
                  isActive ? "text-brass" : "text-brass/70 hover:text-brass"
                }`
              }
            >
              Admin
            </NavLink>
          )}

          {/* Profile */}
          {user ? (
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2 rounded-full border border-emerald/10 bg-white px-2 py-1.5 shadow-sm transition hover:border-brass hover:shadow-md"
              >
                {/* Avatar */}
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-luxe text-xs font-semibold text-brass">
                  {initials}
                </div>

                {/* Name */}
                <div className="text-left leading-tight">
                  <p className="text-xs font-semibold text-emerald-deep">
                    {user.name}
                  </p>

                  <p className="text-[9px] uppercase tracking-[0.15em] text-brass/70">
                    {user.role === "admin"
                      ? "Administrator"
                      : "Client"}
                  </p>
                </div>

                <ChevronDown
                  size={14}
                  className={`text-ink/40 transition ${
                    profileOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown */}
              {profileOpen && (
                <div className="absolute right-0 mt-3 w-52 overflow-hidden rounded-2xl border border-emerald/10 bg-white shadow-xl">

                  {user.role === "admin" ? (
                    <Link
                      to="/admin"
                      onClick={() => setProfileOpen(false)}
                      className="block px-4 py-2.5 text-sm text-ink/70 transition hover:bg-cream hover:text-brass"
                    >
                      Dashboard
                    </Link>
                  ) : (
                    <>
                      <Link
                        to="/profile"
                        onClick={() => setProfileOpen(false)}
                        className="block px-4 py-2.5 text-sm text-ink/70 transition hover:bg-cream hover:text-brass"
                      >
                        My Profile
                      </Link>

                      <Link
                        to="/my-enquiries"
                        onClick={() => setProfileOpen(false)}
                        className="block px-4 py-2.5 text-sm text-ink/70 transition hover:bg-cream hover:text-brass"
                        >
                           My Enquiries
                      </Link>
                    </>
                  )}

                  <hr />

                  <button
                    onClick={() => {
                      logout();
                      setProfileOpen(false);
                    }}
                    className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-red-500 transition hover:bg-red-50"
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/auth" className="btn-outline px-4 py-2">
              Sign in
            </Link>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="border-t border-emerald/10 bg-ivory md:hidden">
          <div className="container-luxe flex flex-col gap-2 py-3">

            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-sm transition ${
                    isActive
                      ? "text-brass"
                      : "text-ink/70 hover:text-brass"
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}

            {user?.role === "admin" && (
              <Link
                to="/admin"
                onClick={() => setOpen(false)}
                className="text-sm text-brass transition hover:text-brass-light"
              >
                Admin Dashboard
              </Link>
            )}

            {/* Mobile User Card */}
            {user && (
              <div className="mt-2 flex items-center gap-2.5 rounded-2xl border border-emerald/10 bg-white p-3 shadow-sm">

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-luxe text-xs font-semibold text-brass">
                  {initials}
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-emerald-deep">
                    {user.name}
                  </h3>

                  <p className="text-[10px] uppercase tracking-[0.12em] text-brass/70">
                    {user.role === "admin"
                      ? "Administrator"
                      : "Client"}
                  </p>
                </div>
              </div>
            )}

            {user && user.role !== "admin" && (
              <>
                <Link
                  to="/profile"
                  onClick={() => setOpen(false)}
                  className="mt-1.5 rounded-xl border border-emerald/10 bg-white px-4 py-2.5 text-sm font-medium text-ink/70 transition hover:border-brass hover:text-brass"
                >
                  My Profile
                </Link>

                <Link
                  to="/my-enquiries"
                  onClick={() => setOpen(false)}
                  className="rounded-xl border border-emerald/10 bg-white px-4 py-2.5 text-sm font-medium text-ink/70 transition hover:border-brass hover:text-brass"
                >
                  My Enquiries
                </Link>
              </>
            )}

            {user ? (
              <button
                onClick={() => {
                  logout();
                  setOpen(false);
                }}
                className="mt-1.5 flex items-center gap-2 text-left text-sm text-red-500"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            ) : (
              <Link
                to="/auth"
                onClick={() => setOpen(false)}
                className="text-sm text-brass"
              >
                Sign in
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
