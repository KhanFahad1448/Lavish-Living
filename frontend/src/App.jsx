import { Routes, Route, Navigate } from "react-router-dom";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import { useAuth } from "./context/AuthContext";

function RequireAdmin({ children }) {
  const { user, loading } = useAuth();
  if (loading) return <div className="container-luxe py-32 text-center text-ink/60">Loading…</div>;
  if (!user) return <Navigate to="/auth" replace />;
  if (user.role !== "admin") return <Navigate to="/" replace />;
  return children;
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/admin" element={<RequireAdmin><Admin /></RequireAdmin>} />
          <Route path="*" element={<div className="container-luxe py-32 text-center"><h1 className="text-4xl">404</h1><p className="mt-2 text-ink/60">Page not found.</p></div>} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  );
}




// export default function App() {
//   return (
//     <div style={{ padding: 40 }}>
//       <h1>Lavish Living</h1>
//       <p>If you can see this, React is working.</p>
//     </div>
//   );
// }