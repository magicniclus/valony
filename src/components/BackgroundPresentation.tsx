/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef, useState } from "react";

import ForwardLine from "./ForwardLine";

import { useSelector } from "react-redux";

import { gsap } from "gsap";

const BackgroundPresentation = () => {
  const language = useSelector((state: any) => state.language.language);

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

  const fr = () => {
    return (
      <section
        className="flex bg-cover bg-center w-full"
        style={{ backgroundImage: "url(/background/section02-adresse.jpg)" }}
      >
        <div className="w-[121px] min-h-[625px] px-4 py-6 hidden lg:flex flex-col items-center justify-between">
          <div className="w-full">
            <div className="w-full">
              <div className="flex justify-center min-w-max -translate-x-[80px]">
                <p
                  className="text-white text-[16px] rotate-[270deg] translate-y-44 uppercase font-outfit font-bold"
                  style={{ width: "max-content" }}
                >
                  &rsaquo; une adresse stratégique
                </p>
              </div>
            </div>
          </div>
          <ForwardLine pourcentage={42} color="white" />
        </div>
        <div className="w-full flex md:flex-row flex-col">
          <div className="md:w-[50%] w-full overflow-hidden flex justify-between bg-beige flex-col md:px-20 px-4 py-16">
            <h2
              ref={titleRef}
              className="sm:text-[45px] text-4xl font-bold text-blueClear leading-[60px] font-playfair"
            >
              Votre nouvelle adresse, un investissement immobilier polyvalent
            </h2>
            <h3
              ref={susTitleRef}
              className="font-outfit text-[17px] font-bold mt-3 text-[#312F39]"
            >
              La résidence VALONY, située à l’entrée nord de Poitiers, répond à
              plusieurs types de demandes : logements étudiants, résidence
              principale, tourisme d’affaires ou de loisirs, location courte ou
              longue durée…
            </h3>
            <div
              className="w-full flex justify-between mt-5 flex-col md:flex-row"
              ref={listRef}
            >
              <div className="flex w-full md:w-1/2 items-start">
                <img
                  src="/icons/human.png"
                  alt="human"
                  className="w-6 h-auto mr-2 object-contain"
                />
                <div className="text-xs ml-2">
                  <p>À 10 min. à pied d’un pôle d’activités regroupant :</p>
                  <p className="mt-2">_ Entreprises</p>
                  <p className="mt-2">_ Restaurants et services</p>
                  <p className="mt-2">_ Écoles d’études supérieures</p>
                </div>
              </div>
              <div className="flex w-full md:w-1/2 items-start mt-3 md:mt-0">
                <img
                  src="/icons/car.png"
                  alt="human"
                  className="w-6 h-auto mr-2 object-contain"
                />
                <div className="text-xs ml-2">
                  <p>Et en voiture, à :</p>
                  <p className="mt-2">_ 8 min. de l’aéroport</p>
                  <p className="mt-2">_ 10 min. de la Gare SNCF</p>
                  <p className="mt-2">_ 10 min. du Futuroscope</p>
                  <p className="mt-2">_ 15 min. de l’hypercentre-ville</p>
                </div>
              </div>
            </div>
            <div ref={buttonRef} className="w-full flex justify-center mt-3">
              <a
                onMouseEnter={() => setArrowIsHover(true)}
                onMouseOut={() => {
                  setArrowIsHover(false);
                }}
                href="#hero"
                className="bg-white group  text-[14px] md:text-[20px] font-outfit text-[#256068] py-2 px-4 rounded-full mt-4 hover:bg-[#256068] hover:text-white flex items-center transition duration-300 ease-in-out"
              >
                Connaitre l&apos;adresse exacte
                {arrowIsHover ? (
                  <img
                    src="/icons/arrow-white.png"
                    alt="arrow"
                    onMouseEnter={() => setArrowIsHover(true)}
                    onMouseOut={() => {
                      setArrowIsHover(false);
                    }}
                    className="h-[10px] ml-2 transition duration-300 ease-in-out"
                  />
                ) : (
                  <img
                    src="/icons/arrow-blue.png"
                    alt="arrow"
                    onMouseEnter={() => setArrowIsHover(true)}
                    onMouseOut={() => {
                      setArrowIsHover(false);
                    }}
                    className="h-[10px] ml-2 transition duration-300 ease-in-out"
                  />
                )}
                {/* <img src="/icons/arrow-blue.png" alt="arrow-right" className='w-4 h-auto ml-2 group-hover:text-white group-hover:translate-x-1 transition duration-300 ease-in-out' /> */}
              </a>
            </div>
          </div>
          <div className="md:w-[50%] w-full min-h-[559px] overflow-hidden hidden md:flex justify-between items-center"></div>
        </div>
      </section>
    );
  };

  return <>{fr()}</>;
};

export default BackgroundPresentation;
