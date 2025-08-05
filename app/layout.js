// app/layout.js
import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "Tableau de bord climatique",
  description: "Généré par Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="flex flex-col w-screen h-screen">
        <Header />
        <main className="flex-1 overflow-hidden">{children}</main>
      </body>
    </html>
  );
}
