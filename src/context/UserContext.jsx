import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  // Mock user data
  const [user, setUser] = useState({
    name: "Sakshi Pandey",
    email: "sakshi@example.com"
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
