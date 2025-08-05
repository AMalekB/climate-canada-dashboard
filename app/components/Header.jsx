"use client";
import { useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const selectedProvince = pathname.split("/")[1];
  const selectedYear = pathname.split("/")[2];
  const searchParams = useSearchParams();

  const currentType = searchParams.get("type") || "temperature"; // valeur par defaut

  const handleTabChange = (newType) => {
    const newUrl = `${pathname}?type=${newType}`;
    router.push(newUrl);
  };

  const handleYearChange = (e) => {
    const newYear = e.target.value;
    const newUrl = `/${selectedProvince}/${newYear}?type=${currentType}`;
    router.push(newUrl);
  };

  return (
    <header className="bg-white border-b p-4 flex justify-between items-center">
      <div className="flex gap-4">
        <button
          onClick={() => handleTabChange("temperature")}
          className={`px-4 py-2 rounded ${
            currentType === "temperature"
              ? "bg-blue-500 text-white"
              : "bg-blue-100"
          }`}
        >
          Temperature
        </button>

        <button
          onClick={() => handleTabChange("pollution")}
          className={`px-4 py-2 rounded ${
            currentType === "pollution"
              ? "bg-blue-500 text-white"
              : "bg-blue-100"
          }`}
        >
          Pollution
        </button>

        <button
          onClick={() => handleTabChange("precipitations")}
          className={`px-4 py-2 rounded ${
            currentType === "precipitations"
              ? "bg-blue-500 text-white"
              : "bg-blue-100"
          }`}
        >
          Precipitations
        </button>
      </div>
      <select
        value={selectedYear}
        onChange={handleYearChange}
        className="border px-3 py-2 rounded"
      >
        <option value="2024">2024</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </header>
  );
}
