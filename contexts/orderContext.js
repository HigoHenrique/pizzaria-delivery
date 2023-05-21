import { create  } from "zustand";

const useOrder = create((set) => ({
    order: {},
    addOrder: (order) => {
        set((state) => ({order: order}))
    },
}))

export default useOrder;