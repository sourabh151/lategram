import { createContext, useContext, useState } from 'react'
import type { UserContextType, UserDataType } from '../index.d.ts';

const userContext = createContext<UserContextType>(null);

function UserContext({ children }: { children: React.ReactNode }) {
  const [userData, setUserData] = useState<UserDataType>({
    success: false,
    token: "",
    username: ""
  });
  return (
    <userContext.Provider value={{ userData, setUserData }}>
      {children}
    </userContext.Provider>
  )
}
export function useUserContext() {
  const context = useContext(userContext);
  if (context) {
    return context;
  }
  throw new Error("use context inside context element only")
}

export default UserContext
