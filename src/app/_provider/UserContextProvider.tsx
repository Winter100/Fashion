"use client";

import { createContext, useContext, useState } from "react";

import {
  getUserDataForLocalStorage,
  removeUserDataForLocalSotarge,
} from "@/app/_utils/localstorage";

interface UserCotextType {
  userData: any | null;
  setLoginData: (user: any) => void;
  clearLoginData: () => void;
}

const UserContext = createContext<UserCotextType>({
  userData: null,
  setLoginData: () => {},
  clearLoginData: () => {},
});

export default function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [userData, setUserData] = useState(() => getUserDataForLocalStorage());

  function setLoginData(user: any) {
    setUserData(user);
  }
  function clearLoginData() {
    setUserData(null);
    removeUserDataForLocalSotarge();
  }

  return (
    <UserContext.Provider value={{ userData, setLoginData, clearLoginData }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContextData() {
  const user = useContext(UserContext);

  if (!user) {
    throw new Error("User Context범위를 벗어났습니다.");
  }

  return user;
}
