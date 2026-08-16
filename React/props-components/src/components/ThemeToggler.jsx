import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const value = {
    theme,
    toggleTheme,
    isDark: theme === "dark",
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
}

function ThemeCard({ title, children }) {
  const { isDark } = useTheme();

  return (
    <div
      className={`rounded-lg p-6 ${
        isDark ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      <h3 className="mb-4 text-xl font-bold">{title}</h3>

      <div>{children}</div>
    </div>
  );
}

function ThemedButton({ children, variant = "primary", onClick }) {
  const { isDark } = useTheme();

  const getButtonClass = () => {
    if (variant === "primary") {
      return isDark
        ? "bg-blue-600 hover:bg-blue-700 text-white"
        : "bg-orange-500 hover:bg-orange-600 text-white";
    }

    if (variant === "secondary") {
      return isDark
        ? "bg-gray-700 hover:bg-gray-600 text-white"
        : "bg-gray-200 hover:bg-gray-300 text-gray-800";
    }

    return "";
  };

  return (
    <button
      onClick={onClick}
      className={`rounded-lg px-4 py-2 font-medium transition ${getButtonClass()}`}
    >
      {children}
    </button>
  );
}

function ThemeToggler() {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <ThemeCard title="Theme Context">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-lg font-medium">Current Theme: {theme}</p>

          <p className="text-sm opacity-70">Is Dark: {isDark ? "Yes" : "No"}</p>
        </div>

        <ThemedButton onClick={toggleTheme}>
          {isDark ? "🌙 Dark" : "☀️ Light"}
        </ThemedButton>
      </div>
    </ThemeCard>
  );
}

export default ThemeToggler;
