import { create } from "zustand";
import { combine } from "zustand/middleware";

export const useCounterStore = create(
  combine(
    {
      count: 0,
      fakeCount: 0,
    },
    (set) => ({
      actions: {
        increment: () => set((state) => ({ count: state.count + 1 })),
        decrement: () => set((state) => ({ count: state.count - 1 })),
        resetNum: () => set({ count: 0 }),
      },
    })
  )
);
