import "./globals.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export const metadata = {
  title: "Tableau de bord climatique",
  description: "Généré par Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="w-screen h-screen flex flex-col">
        {/* Header en haut */}
        <Header />

        {/* Contenu en dessous du header */}
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar à gauche */}
          <Sidebar />

          {/* Contenu principal */}
          <main className="flex-1 overflow-y-auto p-6 bg-white">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
