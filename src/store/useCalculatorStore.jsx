import { create } from "zustand";

const useCalculatorStore = create((set, get) => ({
  display: "0",

  addValue: (value) =>
    set((state) => ({
      display: state.display === "0" ? value : state.display + value,
    })),

  removeLastCharacter: () =>
    set((state) => ({
      display: state.display.length > 1 ? state.display.slice(0, -1) : "0",
    })),

  clearDisplay: () => set({ display: "0" }),

  evaluateExpression: () =>
    set(() => {
      try {
        const expression = get().display.replace(/×/g, "*").replace(/÷/g, "/"); // Replace symbols
        return { display: eval(expression).toString() };
      } catch {
        return { display: "Error" };
      }
    }),
}));

export default useCalculatorStore;
