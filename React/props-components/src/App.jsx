import "./App.css";
import BasicProps from "./components/BasicProps";
import ChildrenProps from "./components/ChildrenProps";
import ComplexProps from "./components/ComplexProps";
import RefProps from "./components/RefProps";
import ThemeToggler from "./components/ThemeToggler";

function Navigation() {
  const sections = [
    { id: "basic", label: "Basic Props", icon: "📦" },
    { id: "ref", label: "Ref Props", icon: "🔗" },
    { id: "children", label: "Children Props", icon: "👶" },
    { id: "complex", label: "Complex Props", icon: "#️⃣" },
    { id: "theme", label: "Theme Props", icon: "🎨" },
  ];

  return (
    <nav className="sticky top-0 bg-gray-900 shadow-md p-4">
      <div className="flex flex-wrap gap-3 justify-center">
        {sections.map((section) => (
          <button
            key={section.id}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-800 transition"
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
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />

      <div className="container mx-auto max-w-6xl px-6 py-10">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold tracking-tight">React Props</h1>
          <p className="mt-3 text-lg text-gray-300">
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

        <footer className="mt-16 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          Made with ❤️ using Bun, Vite, React & Tailwind CSS
        </footer>
      </div>
    </div>
  );
}

export default function App() {
  return <AppContent />;
}
