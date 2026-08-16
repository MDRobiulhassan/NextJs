import "./App.css";

import BasicProps from "./components/BasicProps";
import ChildrenProps from "./components/ChildrenProps";
import ComplexProps from "./components/ComplexProps";
import RefProps from "./components/RefProps";

import ThemeToggler, {
  ThemeProvider,
  useTheme,
} from "./components/ThemeToggler";

function Navigation() {
  const sections = [
    { id: "basic", label: "Basic Props", icon: "📦" },
    { id: "ref", label: "Ref Props", icon: "🔗" },
    { id: "children", label: "Children Props", icon: "👶" },
    { id: "complex", label: "Complex Props", icon: "#️⃣" },
    { id: "theme", label: "Theme Props", icon: "🎨" },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 p-4 shadow-md">
      <div className="flex flex-wrap justify-center gap-3">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-800"
          >
            <span className="mr-2">{section.icon}</span>
            {section.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

function AppContent() {
  const { isDark } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <Navigation />

      <div className="container mx-auto max-w-6xl px-6 py-10">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold tracking-tight">React Props</h1>

          <p
            className={`mt-3 text-lg ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            A comprehensive guide to learning React Props
          </p>
        </header>

        <main className="space-y-12">
          <section id="basic" className="scroll-mt-24">
            <BasicProps />
          </section>

          <section id="ref" className="scroll-mt-24">
            <RefProps />
          </section>

          <section id="children" className="scroll-mt-24">
            <ChildrenProps />
          </section>

          <section id="complex" className="scroll-mt-24">
            <ComplexProps />
          </section>

          <section id="theme" className="scroll-mt-24">
            <ThemeToggler />
          </section>
        </main>

        <footer
          className={`mt-16 border-t pt-6 text-center text-sm ${
            isDark
              ? "border-gray-700 text-gray-400"
              : "border-gray-300 text-gray-500"
          }`}
        >
          Made with ❤️ using Bun, Vite, React & Tailwind CSS
        </footer>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
