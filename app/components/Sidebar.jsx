"use client";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

// const provinces = [
//   "Québec",
//   "Ontario",
//   "Alberta",
//   "Manitoba",
//   "Saskatchewan",
//   "Colombie-Britannique",
//   "Nouvelle-Écosse",
//   "Nouveau-Brunswick",
//   "Île-du-Prince-Édouard",
//   "Terre-Neuve-et-Labrador",
//   "Territoires du Nord-Ouest",
//   "Yukon",
//   "Nunavut",
// ];

export default function Sidebar({ selectedYear }) {
  const router = useRouter();

  const provinces = [
    { name: "Québec", slug: "quebec" },
    { name: "Ontario", slug: "ontario" },
    { name: "Alberta", slug: "alberta" },
    { name: "Manitoba", slug: "manitoba" },
    { name: "Saskatchewan", slug: "saskatchewan" },
    { name: "Colombie-Britannique", slug: "colombie-britannique" },
    { name: "Nouvelle-Écosse", slug: "nouvelle-ecosse" },
    { name: "Nouveau-Brunswick", slug: "nouveau-brunswick" },
    { name: "Île-du-Prince-Édouard", slug: "ile-du-prince-edouard" },
    { name: "Terre-Neuve-et-Labrador", slug: "terre-neuve-et-labrador" },
    { name: "Territoires du Nord-Ouest", slug: "territoires-du-nord-ouest" },
    { name: "Yukon", slug: "yukon" },
    { name: "Nunavut", slug: "nunavut" },
  ];

  const pathname = usePathname();
  const selectedProvince = pathname.split("/")[1];

  const selectedProvinceName = provinces.find(
    (p) => p.slug === selectedProvince
  )?.name;

  const handleClick = (slug) => {
    router.push(`/${slug}/${selectedYear}`);
  };

  return (
    <aside className="w-60 bg white border-r p-4">
      <h2 className="text-lg font-bold mb-4">Provinces</h2>
      <ul className="space-y-2">
        {provinces.map(({ name, slug }) => (
          <li key={slug}>
            <button
              onClick={() => handleClick(slug)}
              className={`w-full text-left px-3 py-2 rounded ${
                selectedProvince === slug
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {name}
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-6 text-sm text-gray-500">
        Province sélectionnée : <strong>{selectedProvinceName}</strong>
      </div>
    </aside>
  );
}
