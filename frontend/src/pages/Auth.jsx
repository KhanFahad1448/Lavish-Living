import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { Helmet } from "react-helmet-async";

export default function Auth() {
  const [mode, setMode] = useState("login");
  const [busy, setBusy] = useState(false);
  const { login, signup } = useAuth();
  const nav = useNavigate();

  async function onSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    setBusy(true);
    try {
      const user = mode === "login"
        ? await login(data.email, data.password)
        : await signup(data.name, data.email, data.password);
      toast.success(`Welcome${user.name ? `, ${user.name.split(" ")[0]}` : ""}!`);
      nav(user.role === "admin" ? "/admin" : "/");
    } catch (err) {
  console.error("LOGIN ERROR:", err);

  toast.error(
    err.response?.data?.message ||
    err.message ||
    "Something went wrong"
  );
} finally {
      setBusy(false);
    }
  }

  return (
    <section className="section-pad">
      <div className="container-luxe max-w-md">
        <div className="rounded-2xl bg-ivory p-8 shadow-luxe">
          <h1 className="font-display text-3xl text-emerald-deep">{mode === "login" ? "Welcome back" : "Create your account"}</h1>
          <p className="mt-2 text-sm text-ink/60">{mode === "login" ? "Sign in to track your project." : "Get updates on quotes and progress."}</p>
          <form onSubmit={onSubmit} className="mt-6 grid gap-4">
            {mode === "signup" && <Input label="Full name" name="name" required />}
            <Input label="Email" name="email" type="email" required />
            <Input label="Password" name="password" type="password" minLength={8} required />
            <button disabled={busy} className="btn-primary disabled:opacity-60">
              {busy && <Loader2 className="h-4 w-4 animate-spin" />}
              {mode === "login" ? "Sign in" : "Create account"}
            </button>
          </form>
          <button onClick={() => setMode(mode === "login" ? "signup" : "login")} className="mt-4 text-sm text-emerald hover:underline">
            {mode === "login" ? "New here? Create an account" : "Already have an account? Sign in"}
          </button>
        </div>
      </div>
    </section>
  );
}
function Input({ label, ...p }) {
  return (
    <div>
      <label className="mb-1 block text-xs font-medium uppercase tracking-wider text-ink/60">{label}</label>
      <input {...p} className="w-full rounded-md border border-emerald/20 bg-white px-3 py-2 text-sm outline-none transition focus:border-brass focus:ring-2 focus:ring-brass/30" />
    </div>
  );
}
  