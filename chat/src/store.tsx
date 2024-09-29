// store.ts
import { create } from "zustand";

interface AuthState {
  isLoggedIn: boolean;
  accessToken: string | null;
  setLoggedIn: (loggedIn: boolean) => void;
  setAccessToken: (token: string | null) => void;
}

const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: !!localStorage.getItem("accessToken"),
  accessToken: localStorage.getItem("accessToken"),
  setLoggedIn: (loggedIn) => set({ isLoggedIn: loggedIn }),
  setAccessToken: (token) => {
    if (token) {
      localStorage.setItem("accessToken", token);
    } else {
      localStorage.removeItem("accessToken");
    }
    set({ accessToken: token });
  },
}));

export default useAuthStore;
