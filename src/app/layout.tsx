import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { StoreProvider } from "../redux/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Valony, Votre Nouveau Programme à Poitiers | Groupe Duval",
  description:
    "Découvrez Valony, le nouveau programme immobilier de prestige sur Poitiers. Contactez-nous dès aujourd'hui pour découvrir notre plaquette et en savoir plus sur ce projet unique.",
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
          {/* Google tag (gtag.js) */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=AW-16693136684"
          ></script>
          <script>
            {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-16693136684');`}
          </script>
        </head>
        <body className={inter.className}>
          {children}

          <GoogleTagManager gtmId="GTM-T7BQB9NK" />
        </body>
      </html>
    </StoreProvider>
  );
}
