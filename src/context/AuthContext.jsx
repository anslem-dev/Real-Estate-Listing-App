import { createContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = (email, password) => {
    setLoading(true);

    return new Promise((resolve) => {
      setTimeout(() => {
        if (
          email === "defaultmail@gmail.com" &&
          password === "defaultpassword"
        ) {
          setUser({ email });
          setLoading(false);
          resolve(true);
        } else {
          setLoading(false);
          resolve(false);
        }
      }, 2000);
    });
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
