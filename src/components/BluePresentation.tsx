/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useRef, useState } from "react";

import ForwardLine from "./ForwardLine";

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type BluePresentationProps = {
  navTitle: string;
  navPourcentage: number;
  navTransform?: string;
  title: string;
  susTitle: string;
  list: [string, string, string, string, string?, string?];
  button: string;
  src: string;
  sitation?: string;
};

const BluePresentation: React.FC<BluePresentationProps> = ({
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
                !navTransform ? "-translate-x-[120px]" : navTransform
              }`}
            >
              <p
                className="text-white text-[16px] rotate-[270deg] translate-y-44 uppercase font-outfit font-bold"
                style={{ width: "max-content" }}
              >
                &rsaquo; POITIERS, TERRE D’ALIÉNOR D’AQUITAINE
              </p>
            </div>
          </div>
        </div>
        <ForwardLine pourcentage={navPourcentage} color="white" />
      </div>
      <div className="w-full flex md:flex-row flex-col">
        <div
          className="md:w-[50%] w-full min-h-[559px] overflow-hidden md:flex hidden justify-between items-center bg-gray bg-cover bg-center"
          style={{ backgroundImage: `url(/background/section01-poitiers.jpg)` }}
        ></div>
        <div className="md:w-[50%] w-full min-h-[559px] overflow-hidden flex justify-between items-start bg-blueClearClear flex-col md:px-20 px-4 py-16">
          <h2
            className="sm:text-[45px] text-4xl font-bold text-blueClear leading-[60px] font-playfair"
            ref={titleRef}
          >
            Poitiers, capitale du Poitou au patrimoine incontournable
          </h2>
          <div className="flex flex-col" ref={susTitleRef}>
            <h3 className="font-outfit text-[17px] text-[#312F39] font-bold mt-3">
              Poitiers, la « ville au cent clochers » qui a marqué l’histoire, a
              sû conserver sa richesse identitaire tout en s’adaptant à l’époque
              moderne
            </h3>
          </div>
          <p className="text-[14px] font-outfit text-text mt-3" ref={listRef}>
            Poitiers fait partie du{" "}
            <span className="font-bold">top 10 des villes étudiantes</span>{" "}
            françaises. Bénéficiant d’un emplacement stratégique et de
            transports performants, Poitiers séduit celles et ceux qui sont à la
            recherche de respiration, à seulement{" "}
            <span className="font-bold">1h35 de Paris</span> et{" "}
            <span className="font-bold">1h20 de Bordeaux</span>. La Gamers
            Assembly, la plus importante manifestation française de jeux vidéo
            attire{" "}
            <span className="font-bold">chaque année 25 000 visiteurs</span>.
          </p>
          <div className="w-full mt-3 flex justify-center" ref={buttonRef}>
            <a
              onMouseEnter={() => setArrowIsHover(true)}
              onMouseOut={() => {
                setArrowIsHover(false);
              }}
              href="#hero"
              className="bg-white group text-[14px] md:text-[20px] font-outfit text-blueClear py-2 px-4 rounded-full mt-4 hover:bg-blueClear hover:text-white flex items-center transition duration-300 ease-in-out"
            >
              En savoir plus
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

export default BluePresentation;
