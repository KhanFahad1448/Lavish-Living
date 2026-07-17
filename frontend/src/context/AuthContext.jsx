import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../lib/api";

const AuthCtx = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Restore user on page refresh
  useEffect(() => {
    const initAuth = async () => {
      try {
        const token = localStorage.getItem("ll_token");

        if (!token) {
          setUser(null);
          setLoading(false);
          return;
        }

        // attach token
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        // fetch user
        const res = await api.get("/auth/me");

        setUser(res.data.user || null);
      } catch (err) {
        console.log("Auth restore failed:", err.message);

        localStorage.removeItem("ll_token");
        delete api.defaults.headers.common["Authorization"];
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

  // Login
  async function login(email, password) {
    const { data } = await api.post("/auth/login", {
      email,
      password,
    });

    localStorage.setItem("ll_token", data.token);

    api.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${data.token}`;

    setUser(data.user);

    return data.user;
  }

  // Signup
  async function signup(name, email, password) {
    const { data } = await api.post("/auth/signup", {
      name,
      email,
      password,
    });

    localStorage.setItem("ll_token", data.token);

    api.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${data.token}`;

    setUser(data.user);

    return data.user;
  }

  // Logout
  function logout() {
    localStorage.removeItem("ll_token");
    delete api.defaults.headers.common["Authorization"];
    setUser(null);
  }

  return (
    <AuthCtx.Provider
      value={{
        user,
        loading,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthCtx.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthCtx);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}