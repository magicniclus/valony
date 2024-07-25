"use client";

import { useEffect } from "react";

import { stopLoading } from "@/redux/loadingSlice";
import { RootState } from "@/redux/store";

import BackgroundPresentation from "@/components/BackgroundPresentation";
import Bienvenue from "@/components/Bienvenue";
import BluePresentation from "@/components/BluePresentation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LightBox from "@/components/LightBox";
import Loader from "@/components/Loader";

import { setLanguage } from "@/redux/languageSlice";
import { useDispatch, useSelector } from "react-redux";

const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve();
    img.onerror = (error) => reject(error);
  });
};

export default function Home() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.loading.isLoading);

  // Sélectionnez la clé de langue actuelle de l'état Redux
  type LanguageKey = "fr" | "eng";
  const languageKey = useSelector(
    (state: RootState) => state.language.language
  ) as LanguageKey;

  // Pré-upload des images
  useEffect(() => {
    // URLs des images à charger
    const imageSources = [
      "/background/hero.png",
      "/icons/facebook.png",
      "/icons/instagram.png",
      "/icons/x.png",
      "/icons/linkdin.png",
      "/icons/pomme.png",
      "/icons/wifi.png",
      "/icons/bullet.png",
      "/images/agilite.jpg",
      "/images/creativite.jpg",
      "/images/exigence.jpg",
      "/images/exterieur.jpg",
      "/images/interieur.jpg",
      "/images/jardin.jpg",
      "/images/logo-white.png",
      "/images/oleron.jpg",
      "/images/terrasse.jpg",
      "/images/vignette.png",
      "/images/vue-ocean.png",
    ];

    // Précharger toutes les images et mettre à jour l'état une fois chargées
    Promise.all(imageSources.map((src) => preloadImage(src)))
      .then(() => {
        dispatch(stopLoading());
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des images", error);
      });
  }, []);

  useEffect(() => {
    // Création d'un objet URL à partir de l'URL actuelle du navigateur
    const currentUrl = new URL(window.location.href);
    // Accès au paramètre de recherche 'lang'
    const lang = currentUrl.searchParams.get("lang");

    if (lang) {
      // Logique pour définir la langue basée sur le paramètre 'lang'
      dispatch(setLanguage(lang));
    }
  }, []);

  useEffect(() => {
    const handleSmoothScroll = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.matches("a[href^='#']")) {
        event.preventDefault();
        const id = target.getAttribute("href")?.slice(1);
        if (id) {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    };

    document.addEventListener("click", handleSmoothScroll);

    return () => {
      document.removeEventListener("click", handleSmoothScroll);
    };
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <main>
        <Hero />
        <LightBox />
        {languageKey === "fr" ? (
          <BluePresentation
            navTitle="Oléron, l’île aux parfums"
            navPourcentage={32}
            title="Jetez l’ancre sur l’île aux parfums, paradis de l’atlantique"
            susTitle="L’océan vous invite à embarquer sur l’Île d’Oléron. Alors commence le plus beau des voyages, le vôtre."
            list={[
              "Un ensoleillement digne des rivages méditerranéens pour la lumineuse, aussi surnommée l’île aux parfums par Pierre Loti",
              "2 729 ha d’environnement naturel préservé (forêts, côtes rocheuses, marais, flore et espèces d’oiseaux protégés…)",
              "Le charme authentique de petits villages et hameaux aux ruelles  fleuries de roses trémières",
              "60 km de plages de sable fin",
            ]}
            button="En savoir plus"
            src="oleron.jpg"
          />
        ) : (
          <BluePresentation
            navTitle="OLÉRON THE ISLAND OF SCENTS"
            navTransform="-translate-x-[83px]"
            navPourcentage={32}
            title="Anchor down on the island of scents – complete paradise in the Atlantic"
            susTitle="The ocean invites you to discover Oléron Island – and your amazing journey starts right here…"
            list={[
              "Sunshine worthy of the Mediterranean shores for this “Island of light”, also nicknamed the “Island of Scents” by Pierre Loti",
              "2,729 hectares area of protected natural beauty (forests, rocky coasts, marshes, flora, and protected bird species...)",
              "The authentic charm of small villages and hamlets with alleyways lined with blooming hollyhocks",
              "60 km of fine sandy beaches",
            ]}
            button="Learn more"
            src="oleron.jpg"
          />
        )}
        <BackgroundPresentation />
        {languageKey === "fr" ? (
          <BluePresentation
            navTitle="Oléron, l’île aux parfums"
            navPourcentage={64}
            title="Grands volumes baignés de lumière et prestations à la carte"
            susTitle="« Un environnement de vie exceptionnel qui respire l’élégance et le confort. »"
            sitation="Cyril Guilmeau, architecte"
            list={[
              "Jusqu’à 156 m2 habitables pour des villas de 4 à 5 pièces",
              "Grandes terrasses avec vue imprenable sur l’océan",
              "Vaste salon / séjour baigné de lumière naturelle",
              "2 à 3 stationnements et 1 local à vélos sécurisés par maison",
              "Magnifiques suites parentales dotées d’un grand dressing",
              "etc...",
            ]}
            button="Découvrir toutes les prestations"
            src="interieur.jpg"
          />
        ) : (
          <BluePresentation
            navTitle="OLERON, THE ISLAND OF FRAGRANCES"
            navTransform="-translate-x-[114px]"
            navPourcentage={64}
            title="Large volumes bathed in light and à la carte services"
            susTitle="« A DESIGN THAT MEETS YOUR REQUIREMENTS»"
            sitation="Cyril Guilmeau, architecte"
            list={[
              "Up to 156 m2 of living space for villas with 4 to 5 rooms",
              "Large terraces with breathtaking ocean views",
              "Spacious living/dining room bathed in natural sunlight",
              "2 to 3 parking spaces and 1 secure bicycle storage per house",
              "Magnificent master suites with large dressing rooms",
              "etc...",
            ]}
            button="Discover all the features"
            src="interieur.jpg"
          />
        )}
        <Bienvenue />
      </main>
      <Footer />
    </>
  );
}
