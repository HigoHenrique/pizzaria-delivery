import { create  } from "zustand";

const useUser = create((set) => ({
    user: {},
    addUser: (user) => {
        set((state) => ({user: user}))
    },
}))

export default useUser;