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

import BlueTextRight from "@/components/BlueTextRight";
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
        <BlueTextRight />
        <BackgroundPresentation />
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
        <Bienvenue />
      </main>
      <Footer />
    </>
  );
}
