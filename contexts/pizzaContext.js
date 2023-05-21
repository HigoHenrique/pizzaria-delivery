import { create  } from "zustand";

const usePizza = create((set) => ({
    pizza: {},
    addPizza: (pizza) => {
        set((state) => ({pizza: pizza}))
    },
}))

export default usePizza;