/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useRef, useState } from "react";

import ForwardLine from "./ForwardLine";

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type BluePresentationProps = {
  navTitle?: string;
  navPourcentage?: number;
  navTransform?: string;
  title?: string;
  susTitle?: string;
  list?: [string, string, string, string, string?, string?];
  button?: string;
  src?: string;
  sitation?: string;
};

const BlueTextRight: React.FC<BluePresentationProps> = ({
  navTitle,
  navPourcentage,
  navTransform,
  title,
  susTitle,
  list,
  button,
  src,
  sitation,
}) => {
  const titleRef = useRef(null);
  const susTitleRef = useRef(null);
  const listRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Définir un délai initial pour le décalage de l'animation
    let delay = 0.2;

    // Tableau des éléments à animer
    const elementsToAnimate = [
      titleRef.current,
      susTitleRef.current,
      listRef.current,
      buttonRef.current,
    ];

    elementsToAnimate.forEach((elem) => {
      gsap.fromTo(
        elem,
        {
          y: "100%", // Commence un peu plus haut
          opacity: 0, // Commence avec une opacité de 0
        },
        {
          y: 0, // Retourne à sa position d'origine
          opacity: 1, // Anime jusqu'à une opacité de 1
          duration: 0.4, // Durée de l'animation
          ease: "easeOut", // Type d'ease pour l'animation
          delay, // Délai avant le début de l'animation
          scrollTrigger: {
            trigger: titleRef.current, // Déclencheur de l'animation au scroll
            start: "top 90%", // Démarre l'animation quand l'élément entre dans la vue
          },
        }
      );

      delay += 0.2; // Augmente le délai pour le prochain élément, créant un effet décalé
    });
  }, []);

  const [arrowIsHover, setArrowIsHover] = useState(false);

  return (
    <section className="flex">
      <div className="w-[121px] min-h-[625px] bg-blueClear px-4 py-6 hidden lg:flex flex-col items-center justify-between">
        <div className="w-full">
          <div className="w-full">
            <div
              className={`flex justify-center min-w-max ${
                !navTransform ? "-translate-x-[135px]" : navTransform
              }`}
            >
              <p
                className="text-white text-[16px] rotate-[270deg] translate-y-48 uppercase font-outfit font-bold"
                style={{ width: "max-content" }}
              >
                &rsaquo; un investissement immobilier rentable
              </p>
            </div>
          </div>
        </div>
        <ForwardLine pourcentage={30} color="white" />
      </div>
      <div className="w-full flex md:flex-row flex-col">
        <div className="md:w-[50%] w-full min-h-[559px] overflow-hidden md:flex hidden justify-end items-center bg-gray">
          <img
            src="/background/section03-renta-invest.jpg"
            alt="hero"
            className="w-auto h-full object-cover mr-auto"
          />
        </div>

        <div className="md:w-[50%] w-full min-h-[559px] overflow-hidden flex justify-between items-start bg-blueClearClear flex-col">
          <h2
            className="sm:text-[45px] text-4xl font-bold text-blueClear leading-[60px] font-playfair md:px-20 px-4 pt-16"
            ref={titleRef}
          >
            Dispositif Pinel, plus que quelques mois pour en bénéficier…
          </h2>
          <div
            className="flex flex-col md:px-20 px-4 text-[#312F39]"
            ref={susTitleRef}
          >
            <p className="font-outfit text-[17px] mt-5">
              Bénéficiez de la défiscalisation offerte par le dispositif PINEL
              jusqu’au 31/12/2024, en <span className="font-bold">zone B1</span>{" "}
              avec une{" "}
              <span className="font-bold">rentabilité à plus de 4%*.</span>
            </p>
            <p className="font-outfit text-[17px] mt-3">
              ⏳ Dernières opportunités d’investissement avant la fin d’année.
              Programme en cours de réalisation avec une{" "}
              <span className="font-bold">remise des clés en 2025.</span>
            </p>
          </div>
          <div
            className="w-full bg-blueClear flex items-center text-center text-white text-[20px] py-2 flex-col mt-5"
            ref={listRef}
          >
            <h3>Frais de notaire OFFERTS**</h3>
            <p className="text-xs max-w-[60%] mt-3">
              ** Offre valable pour les 14 prochains contrats de réservation
              signés, entre le 01/07/2024 et le 15/09/2024.
            </p>
          </div>
          <div
            className="w-full mt-3 flex justify-center mb-16"
            ref={buttonRef}
          >
            <a
              onMouseEnter={() => setArrowIsHover(true)}
              onMouseOut={() => {
                setArrowIsHover(false);
              }}
              href="#hero"
              className="bg-white group text-[14px] md:text-[20px] font-outfit text-blueClear py-2 px-4 rounded-full mt-4 hover:bg-blueClear hover:text-white flex items-center transition duration-300 ease-in-out"
            >
              Profiter de l’offre
              {arrowIsHover ? (
                <img
                  src="/icons/arrow-white.png"
                  alt="arrow"
                  onMouseEnter={() => setArrowIsHover(true)}
                  onMouseOut={() => {
                    setArrowIsHover(false);
                  }}
                  className="h-[10px] ml-2 mt-1 transition duration-300 ease-in-out"
                />
              ) : (
                <img
                  src="/icons/arrow-blue.png"
                  alt="arrow"
                  onMouseEnter={() => setArrowIsHover(true)}
                  onMouseOut={() => {
                    setArrowIsHover(false);
                  }}
                  className="h-[10px] ml-2 mt-1 transition duration-300 ease-in-out"
                />
              )}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlueTextRight;
