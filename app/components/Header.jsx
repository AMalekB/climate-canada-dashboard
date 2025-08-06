// components/Header.jsx

import Image from "next/image";
import logo from "/public/logo.png";

export default function Header() {
  return (
    <header className="bg-teal-600 text-white p-4 flex items-center justify-between">
      <div className="flex items-center">
        <Image
          src={logo}
          alt="Logo du tableau de bord"
          width={40}
          height={40}
          className="mr-4"
        />
        <h1 className="text-3xl font-bold">
          Tableau de bord climatique du Canada (2019–2024)
        </h1>
      </div>
    </header>
  );
}
