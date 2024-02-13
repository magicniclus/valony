"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Loader from "@/components/Loader";
import { stopLoading } from "@/redux/loadingSlice";
import Hero from "@/components/Hero";
import LightBox from "@/components/LightBox";
import BluePresentation from "@/components/BluePresentation";
import BackgroundPresentation from "@/components/BackgroundPresentation";
import Bienvenue from "@/components/Bienvenue";
import Footer from "@/components/Footer";

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
  type LanguageKey = 'fr' | 'eng';
  const languageKey = useSelector((state: RootState) => state.language.language) as LanguageKey;

  // Pré-upload des images
  useEffect(() => {
    // URLs des images à charger
    const imageSources = [
      '/background/hero.png',
      '/icons/facebook.png',
      '/icons/instagram.png',
      '/icons/x.png',
      '/icons/linkdin.png',
      '/icons/pomme.png',
      '/icons/wifi.png',
      '/icons/bullet.png',
      '/images/agilite.jpg',
      '/images/creativite.jpg',
      '/images/exigence.jpg',
      '/images/exterieur.jpg',
      '/images/interieur.jpg',
      '/images/jardin.jpg',
      '/images/logo-white.png',
      '/images/oleron.jpg',
      '/images/terrasse.jpg',
      '/images/vignette.png',
      '/images/vue-ocean.png',
    ];

    // Précharger toutes les images et mettre à jour l'état une fois chargées
    Promise.all(imageSources.map(src => preloadImage(src)))
      .then(() => {
        dispatch(stopLoading()) 
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des images", error);
      });
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <main>
        <Hero />
        <LightBox />
        {
          languageKey === "fr" ? 
          <BluePresentation navTitle="Oléron, l’île aux parfums" navPourcentage={32} title="Jetez l’ancre sur l’île aux parfums, paradis de l’atlantique" susTitle="L’océan vous invite à embarquer sur l’Île d’Oléron. Alors commence le plus beau des voyages, le vôtre." list={["Un ensoleillement digne des rivages méditerranéens pour la lumineuse, aussi surnommée l’île aux parfums par Pierre Loti", "2 729 ha d’environnement naturel préservé (forêts, côtes rocheuses, marais, flore et espèces d’oiseaux protégés…)", "Le charme authentique de petits villages et hameaux aux ruelles  fleuries de roses trémières", "60 km de plages de sable fin"]} button="En savoir plus" src="oleron.jpg" />
          :<BluePresentation navTitle="Oléron, l’île aux parfums" navPourcentage={32} title="Jetez l’ancre sur l’île aux parfums, paradis de l’atlantique en" susTitle="L’océan vous invite à embarquer sur l’Île d’Oléron. Alors commence le plus beau des voyages, le vôtre." list={["Un ensoleillement digne des rivages méditerranéens pour la lumineuse, aussi surnommée l’île aux parfums par Pierre Loti", "2 729 ha d’environnement naturel préservé (forêts, côtes rocheuses, marais, flore et espèces d’oiseaux protégés…)", "Le charme authentique de petits villages et hameaux aux ruelles  fleuries de roses trémières", "60 km de plages de sable fin"]} button="En savoir plus" src="oleron.jpg" />
        }
        <BackgroundPresentation />
        {
          languageKey === "fr" ? 
          <BluePresentation navTitle="Oléron, l’île aux parfums" navPourcentage={64} title="Grands volumes baignés de lumière et prestations à la carte" susTitle="« Un environnement de vie exceptionnel qui respire l’élégance et le confort. »" sitation='Cyril Guilmeau, architecte' list={["Jusqu’à 156 m2 habitables pour des villas de 5 à 6 pièces", "Grandes terrasses avec vue imprenable sur l’océan", "Vaste salon / séjour baigné de lumière naturelle", "2 à 3 stationnements et 1 local à vélos sécurisés par maison", "Magnifiques suites parentales dotées d’un grand dressing", "etc..."]} button="Découvrir toutes les prestations" src="interieur.jpg" />
          :<BluePresentation navTitle="Oléron, l’île aux parfums" navPourcentage={64} title="Grands volumes baignés de lumière et prestations à la carte en" susTitle="« Un environnement de vie exceptionnel qui respire l’élégance et le confort. »" sitation='Cyril Guilmeau, architecte' list={["Jusqu’à 156 m2 habitables pour des villas de 5 à 6 pièces", "Grandes terrasses avec vue imprenable sur l’océan", "Vaste salon / séjour baigné de lumière naturelle", "2 à 3 stationnements et 1 local à vélos sécurisés par maison", "Magnifiques suites parentales dotées d’un grand dressing", "etc..."]} button="Découvrir toutes les prestations" src="interieur.jpg" />
        }
        <Bienvenue />
      </main>
      <Footer />
    </>
  );
}
