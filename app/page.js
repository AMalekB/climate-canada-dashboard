// app/page.js
"use client";

import { useEffect } from "react";

export default function HomePage() {
  // L'import de Header n'est plus nécessaire ici
  // const [viewportHeight, setViewportHeight] = useState(0);
  // Le useEffect n'est plus nécessaire car la hauteur est gérée par CSS

  // Remarque : Si vous voulez garder le useEffect pour d'autres raisons,
  // vous pouvez le laisser, mais ce n'est plus nécessaire pour la hauteur de l'iframe.

  return (
    // Ce conteneur doit s'adapter à la taille de son parent (`<main>`)
    <div className="w-full h-full">
      <iframe
        title="visualisation Power BI"
        className="w-full h-full"
        src="https://app.powerbi.com/reportEmbed?reportId=de7d74d4-466a-4fb1-9303-6392cb411d4f&autoAuth=true&ctid=ad8a84ef-f1f3-4b14-ad08-b99ca66f7e30"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}
