import { useState } from "react";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold text-indigo-400">
            Logo
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-indigo-400 transition"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Login */}
          <div className="hidden lg:block">
            <a href="#" className="hover:text-indigo-400">
              Log in →
            </a>
          </div>

          {/* Mobile Button */}
          <button
            className="lg:hidden text-3xl"
            onClick={() => setMobileMenuOpen(true)}
          >
            ☰
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-gray-900 p-6 lg:hidden">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-bold text-indigo-400">Menu</h2>

            <button
              className="text-4xl"
              onClick={() => setMobileMenuOpen(false)}
            >
              ×
            </button>
          </div>

          <div className="flex flex-col gap-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg hover:text-indigo-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}

            <a
              href="#"
              className="text-lg hover:text-indigo-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              Log in
            </a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
        <span className="rounded-full border border-indigo-500 px-4 py-1 text-sm text-indigo-400">
          🚀 Announcing our next round of funding
        </span>

        <h1 className="mt-8 text-5xl font-bold leading-tight lg:text-7xl">
          Data to enrich your online business
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-400">
          Build modern websites with React and Tailwind CSS. Create responsive,
          reusable, and beautiful interfaces faster than ever.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold hover:bg-indigo-700">
            Get Started
          </button>

          <button className="rounded-lg border border-gray-600 px-6 py-3 hover:bg-gray-800">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
}
