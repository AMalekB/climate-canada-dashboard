export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Bienvenue</h1>
      <p>
        Ce tableau de bord présente les données climatiques du Canada entre 2019
        et 2024.
        <br />
        Explorez les graphiques, statistiques et autres visualisations pour
        mieux comprendre les tendances par province.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Équipe du projet</h2>
      <ul className="list-disc list-inside">
        <li>Abdelmalek Bezri</li>
        <li>Saddem Chorfi</li>
        <li>Mamadou Lamine Sall</li>
      </ul>
    </div>
  );
}
