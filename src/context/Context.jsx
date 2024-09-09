import { createContext, useState } from "react";

export const Context = createContext({ isAuthorized: false });

export default function AppWrapper() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [user, setUser] = useState({});
  return (
    <AppWrapper.Provider
      value={{ isAuthorized, setIsAuthorized, user, setUser }}
    ></AppWrapper.Provider>
  );
}
