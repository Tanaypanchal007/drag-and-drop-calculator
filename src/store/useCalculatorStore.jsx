import { create } from "zustand";

const useCalculatorStore = create((set) => ({
  display: "0",
  buttons: [
    { label: "C", color: "#a5a5a5" },
    { label: "AC", color: "#a5a5a5" },
    { label: "%", color: "#a5a5a5" },
    { label: "÷", color: "#FF9500" },
    { label: "7", color: "#333333" },
    { label: "8", color: "#333333" },
    { label: "9", color: "#333333" },
    { label: "×", color: "#FF9500" },
    { label: "4", color: "#333333" },
    { label: "5", color: "#333333" },
    { label: "6", color: "#333333" },
    { label: "-", color: "#FF9500" },
    { label: "1", color: "#333333" },
    { label: "2", color: "#333333" },
    { label: "3", color: "#333333" },
    { label: "+", color: "#FF9500" },
    { label: "0", color: "#333333" },
    { label: "00", color: "#333333" },
    { label: ".", color: "#333333" },
    { label: "=", color: "#FF9500" },
  ],

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
    set((state) => {
      try {
        const expression = state.display.replace(/×/g, "*").replace(/÷/g, "/");
        return { display: eval(expression).toString() };
      } catch {
        return { display: "Error" };
      }
    }),

  theme: localStorage.getItem("theme") || "dark",
  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      return { theme: newTheme };
    }),
}));

export default useCalculatorStore;
