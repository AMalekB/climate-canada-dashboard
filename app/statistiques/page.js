"use client";
import { useEffect, useState } from "react";

export default function StatistiquesPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/statistiques")
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data)
    return <p className="text-center mt-10">Chargement des statistiques...</p>;

  if (data?.error)
    return (
      <p className="text-red-600 text-center mt-10">Erreur : {data.error}</p>
    );

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Statistiques climatiques du Canada (2019–2024)
      </h1>

      {/* Températures */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-teal-600">
          🌡️ Statistiques Températures
        </h2>
        <ul className="space-y-2 text-lg">
          <li>
            🔥 <strong>Année la plus chaude :</strong>{" "}
            {data.anneePlusChaude.Annee} ({data.anneePlusChaude.Moyenne} °C)
          </li>
          <li>
            ❄️ <strong>Année la moins chaude :</strong>{" "}
            {data.anneeMoinsChaude.Annee} ({data.anneeMoinsChaude.Moyenne} °C)
          </li>
          <li>
            🏙️ <strong>Province la plus chaude :</strong>{" "}
            {data.provincePlusChaude.NomProvince} (
            {data.provincePlusChaude.Moyenne} °C)
          </li>
          <li>
            🌁 <strong>Province la moins chaude :</strong>{" "}
            {data.provinceMoinsChaude.NomProvince} (
            {data.provinceMoinsChaude.Moyenne} °C)
          </li>
        </ul>
      </section>

      {/* Pollution */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-teal-600">
          🏭 Statistiques Pollution
        </h2>
        <ul className="space-y-2 text-lg">
          <li>
            ☠️ <strong>Année la plus polluée :</strong>{" "}
            {data.anneePlusPolluee.Annee} ({data.anneePlusPolluee.Moyenne} Mt
            CO₂)
          </li>
          <li>
            🍃 <strong>Année la moins polluée :</strong>{" "}
            {data.anneeMoinsPolluee.Annee} ({data.anneeMoinsPolluee.Moyenne} Mt
            CO₂)
          </li>
          <li>
            🔴 <strong>Province la plus polluée :</strong>{" "}
            {data.provincePlusPolluee.NomProvince} (
            {data.provincePlusPolluee.Moyenne} Mt CO₂)
          </li>
          <li>
            🟢 <strong>Province la moins polluée :</strong>{" "}
            {data.provinceMoinsPolluee.NomProvince} (
            {data.provinceMoinsPolluee.Moyenne} Mt CO₂)
          </li>
        </ul>
      </section>

      {/* Précipitations */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-teal-600">
          🌧️ Statistiques Précipitations
        </h2>
        <ul className="space-y-2 text-lg">
          <li>
            🌊 <strong>Année la plus pluvieuse :</strong>{" "}
            {data.anneePlusPluvieuse.Annee} ({data.anneePlusPluvieuse.Moyenne}{" "}
            mm)
          </li>
          <li>
            🌵 <strong>Année la moins pluvieuse :</strong>{" "}
            {data.anneeMoinsPluvieuse.Annee} ({data.anneeMoinsPluvieuse.Moyenne}{" "}
            mm)
          </li>
          <li>
            🌦️ <strong>Province la plus pluvieuse :</strong>{" "}
            {data.provincePlusPluvieuse.NomProvince} (
            {data.provincePlusPluvieuse.Moyenne} mm)
          </li>
          <li>
            ⛱️ <strong>Province la moins pluvieuse :</strong>{" "}
            {data.provinceMoinsPluvieuse.NomProvince} (
            {data.provinceMoinsPluvieuse.Moyenne} mm)
          </li>
        </ul>
      </section>
    </div>
  );
}
