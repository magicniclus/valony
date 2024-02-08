"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Loader from "@/components/Loader";
import { stopLoading } from "@/redux/loadingSlice";
import Hero from "@/components/Hero";
import LightBox from "@/components/LightBox";
import BluePresentation from "@/components/BluePresentation";

export default function Home() {

  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.loading.isLoading);

  useEffect(() => {
    if(isLoading){
      setTimeout(() => {
        dispatch(stopLoading()) 
      }, 2000)
    }
  },[])

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <main>
        <Hero />
        <LightBox />
        <BluePresentation navTitle="Oléron, l’île aux parfums" navPourcentage={32} title="Jetez l’ancre sur l’île aux parfums, paradis de l’atlantique" susTitle="L’océan vous invite à embarquer sur l’Île d’Oléron. Alors commence le plus beau des voyages, le vôtre." list={["Un ensoleillement digne des rivages méditerranéens pour la lumineuse, aussi surnommée l’île aux parfums par Pierre Loti", "2 729 ha d’environnement naturel préservé (forêts, côtes rocheuses, marais, flore et espèces d’oiseaux protégés…)", "_ Le charme authentique de petits villages et hameaux aux ruelles  fleuries de roses trémières", "60 km de plages de sable fin"]} button="En savoir plus" />
      </main>
      <footer></footer>
    </>
  );
}
