// store.ts
import { create } from "zustand";
import { UserData } from "./pages";

interface AuthState {
  isLoggedIn: boolean;
  user: UserData | null;
  setLoggedIn: (loggedIn: boolean) => void;
  setUser: (user: UserData | null) => void;
}

// Retrieve the user from localStorage and parse it into a UserData object
const storedUser = localStorage.getItem("user");
const parsedUser: UserData | null = storedUser ? JSON.parse(storedUser) : null;


const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: !!localStorage.getItem("user"),
  user: parsedUser,
  setLoggedIn: (loggedIn) => set({ isLoggedIn: loggedIn }),
  setUser: (user) => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
    set({ user: user });
  },
}));

export default useAuthStore;
