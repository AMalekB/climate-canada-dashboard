"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    { label: "🏠 Home", path: "/" },
    { label: "📈 Graphiques", path: "/graphiques" },
    { label: "📊 Statistiques", path: "/statistiques" },
  ];

  return (
    <aside className="w-60 min-h-screen bg-teal-600 border-r p-6">
      <h2 className="text-xl font-bold mb-6 text-white">Navigation</h2>
      <nav className="flex flex-col space-y-4">
        {links.map(({ label, path }) => (
          <Link
            key={path}
            href={path}
            className={`px-4 py-2 rounded font-medium text-left ${
              pathname === path
                ? "bg-teal-500 text-white"
                : "text-white hover:bg-teal-700"
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
