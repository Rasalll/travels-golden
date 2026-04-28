import { ADMIN_EMAIL, ADMIN_PASSWORD } from "@/constants/data";
import { create } from "zustand";

export interface User {
  email: string;
  password: string;
}

interface AuthState {
  loading: boolean;
  isAuthenticated: boolean;
  fetchUser: () => Promise<void>;
  logout: () => void;
  login: (data: User) => { status: boolean; message: string };
  user: User | null;
  hasFetched: boolean;
}

export const useAuthStore = create<AuthState>((set) => ({
  loading: true,
  isAuthenticated: false,
  hasFetched: false,
  user: null,
  fetchUser: async () => {
    const state = useAuthStore.getState();
    if (state.hasFetched) return; // ✅ prevents repeat calls
    const user = localStorage.getItem("user");
    if (user) {
      set({
        isAuthenticated: true,
        loading: false,
        user: JSON.parse(user) as User,
        hasFetched: true,
      });
    } else {
      set({
        isAuthenticated: false,
        loading: false,
        hasFetched: true,
        user: null,
      });
    }
  },
  login: (data: User) => {
    try {
      if (data.email == ADMIN_EMAIL && data.password == ADMIN_PASSWORD) {
        localStorage.setItem("user", JSON.stringify(data));
        set({
          isAuthenticated: true,
          loading: false,
          hasFetched: true,
          user: data,
        });
        return { status: true, message: "Login Successful" };
      } else {
        return { status: false, message: "Invalid credentials" };
      }
    } catch (error) {
      return { status: false, message: "Some error occurred" };
    }
  },
  logout: () => {
    localStorage.removeItem("user");
    set({
      isAuthenticated: false,
      user: null,
      hasFetched: false,
      loading: false,
    });
  },
}));
