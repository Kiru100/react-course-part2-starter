import { create } from "zustand";

interface AuthStore{
    user: string;
    login: (current_user: string) => void;
    logout: () => void; 
}

const useAuthStore = create<AuthStore>(set =>({
    user: "",
    login: (current_user: string)=> set(() => ({user: current_user})),
    logout: () => set(()=>({user: ""}))
}))

export default useAuthStore;