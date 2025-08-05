"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    // Calcule la hauteur restante après le header (environ 120px)
    const updateHeight = () => {
      const headerHeight = 120;
      setViewportHeight(window.innerHeight - headerHeight);
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <header className="p-4 text-center">
        <h1 className="text-3xl font-bold mb-2">
          Tableau de bord climatique du Canada (2019–2024)
        </h1>
        <p className="text-gray-600">
          Explorez les données grâce aux filtres intégrés dans Power BI.
        </p>
      </header>

      <iframe
        title="visualisation"
        style={{ width: "100%", height: `${viewportHeight}px` }}
        src="https://app.powerbi.com/reportEmbed?reportId=de7d74d4-466a-4fb1-9303-6392cb411d4f&autoAuth=true&ctid=ad8a84ef-f1f3-4b14-ad08-b99ca66f7e30"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}
