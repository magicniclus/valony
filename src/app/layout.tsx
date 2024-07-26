import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { GoogleTagManager } from "@next/third-parties/google";

import { StoreProvider } from "../redux/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Seaven, Votre Nouveau Programme de Prestige avec Vue sur Mer à l'Île d'Oléron | Groupe Duval",
  description:
    "Découvrez Seaven, le nouveau programme immobilier de prestige sur l'île d'Oléron offrant une vue exceptionnelle sur la mer. Contactez-nous dès aujourd'hui pour découvrir notre plaquette et en savoir plus sur ce projet unique.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="fr">
        <head>
          <link rel="icon" href="logos/favicon.png" sizes="any" />
        </head>
        <body className={inter.className}>{children}</body>
        <GoogleTagManager gtmId="GTM-WZP4H2GF" />
      </html>
    </StoreProvider>
  );
}
