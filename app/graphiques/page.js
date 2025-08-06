// app/page.js
"use client";

import { useEffect } from "react";

export default function Graphique() {
  return (
    // Ce conteneur doit s'adapter à la taille de son parent (`<main>`)
    <div className="w-full h-full p-2">
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
