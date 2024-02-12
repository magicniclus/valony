"use client";

import Script from "next/script";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { GTM_ID, pageview } from "../GTM/gtm";

export default function Analytics() {
  const router = useRouter();

  useEffect(() => {
    // S'assurer que le routeur est prêt avant d'écouter les changements de route
    if (!router.isReady) return;

    const handleRouteChange = (url) => {
      pageview(url);
    };

    // Écouter les changements de route
    router.events.on("routeChangeComplete", handleRouteChange);

    // Nettoyer l'écouteur d'événements lors du démontage du composant
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.isReady, router.events]); 

  return (
    <>
      {/* Google Tag Manager - NoScript */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }} 
        />
      </noscript>
      {/* Google Tag Manager */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${GTM_ID}');
          `,
        }}
      />
      {/* Global site tag (gtag.js) - Google Ads: AW-11128083735 */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-11128083735"
        strategy="afterInteractive"
      />
      {/* Google Analytics */}
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11128083735');
          `,
        }}
      />
    </>
  );
}
