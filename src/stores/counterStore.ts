import { create } from "zustand";

interface Actions {
  increment: () => void;
  decrement: () => void;
  resetNum: () => void;
}

interface CounterState {
  count: number;
  fakeCount: number;
  actions: Actions;
}

export const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  fakeCount: 0,
  actions: {
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    resetNum: () => set({ count: 0 }),
  },
}));
