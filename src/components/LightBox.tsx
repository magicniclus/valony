/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef, useState } from "react";

import ForwardLine from "./ForwardLine";

import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

import { useSelector } from "react-redux";

interface MediaItem {
  id: number;
  src: string;
  alt: string;
}

const LightBox = () => {
  const listMedia: MediaItem[] = [
    {
      id: 1,
      src: "/background/slider-img01-poitiers-valony-groupe-duval.jpg",
      alt: "LightBox",
    },
    {
      id: 2,
      src: "/background/section03-renta-invest.jpg",
      alt: "LightBox",
    },
  ];

  const vignetteRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [imgSelected, setImgSelected] = useState<string>(listMedia[0].src);
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [renderId, setRenderId] = useState(0); // Déplacez l'état renderId ici
  const [isMobile, setIsMobile] = useState(false);

  const language = useSelector((state: any) => state.language.language);

  const handleMedia = (idx: number) => {
    setSelectedMediaIndex((prevIndex) => idx % listMedia.length);
    setRenderId((prevId) => prevId + 1);
  };

  useEffect(() => {
    const checkMobile = () => {
      const isMobile = window.matchMedia("(max-width: 800px)").matches;
      setIsMobile(isMobile);
    };

    // vérifiez au chargement de la page
    checkMobile();

    // puis vérifiez chaque fois que la taille de la fenêtre change
    window.addEventListener("resize", checkMobile);

    // nettoyez en enlevant l'écouteur d'événement lors du démontage du composant
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const imageContainer = (image: string) => {
    return (
      <>
        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          .fade-in {
            animation: fadeIn 0.5s ease-out;
          }
        `}</style>
        <img
          src={listMedia[selectedMediaIndex].src}
          alt="LightBox"
          key={`${listMedia[selectedMediaIndex].src}-${renderId}`}
          className="h-[100%] w-[100%] my-auto object-cover fade-in"
        />
      </>
    );
  };

  const handleNext = () => {
    setSelectedMediaIndex((prevIndex) => (prevIndex + 1) % listMedia.length); // Avance à l'image suivante
  };

  const handlePrev = () => {
    setSelectedMediaIndex(
      (prevIndex) => (prevIndex - 1 + listMedia.length) % listMedia.length
    ); // Retour à l'image précédente
  };

  const fr = () => {
    return (
      <div className="flex justify-center min-w-max -translate-x-14">
        <p
          className="text-white text-[16px] rotate-[270deg] translate-y-36 uppercase font-outfit"
          style={{ width: "max-content" }}
        >
          &rsaquo; COMME SI VOUS Y ÉTIEZ
        </p>
      </div>
    );
  };

  return (
    <>
      <style jsx>{`
        .background:before {
          content: "";
          position: absolute;
          width: 100%;
          height: 1px;
          bottom: -10px;
          right: 0;
          background-color: white;
          z-index: 1;
        }
      `}</style>
      <section className="min-h-[690px] w-full relative flex z-50">
        <div className="absolute right-12 -top-[70px] p-2 h-[100px] w-[100px] rounded-full border-2 border-or md:border-[#312F39] bg-or md:bg-[#312F39] justify-center items-center flex-col z-5 md:hidden flex">
          <p className="text-white font-light text-center font-outfit text-[13px] uppercase -translate-y-3">
            LIVRAISON
          </p>
          <p className="font-playfair text-[35px] text-white leading-3 -translate-y-3">
            2025
          </p>
        </div>
        <div className="w-[121px] min-h-[612px] bg-gray px-4 py-10 hidden lg:flex flex-col items-center justify-between">
          <div className="w-full">
            {/*  */}
            {fr()}
          </div>
          <ForwardLine pourcentage={16} color="white" />
        </div>
        <div className="w-full  z-100 min-h-[559px] overflow-hidden flex justify-between items-center md:flex-row flex-col z-10 bg-gray">
          <div className="md:h-[612px] h-full w-full relative">
            {imageContainer(listMedia[selectedMediaIndex].src)}
            <div
              className="cursor-pointer sm:hidden block group absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full bg-white/50 p-3 hover:border hover:border-white hover:bg-white transition duration-300 ease-in-out"
              onClick={handleNext}
            >
              <ArrowRightIcon className="text-gray w-6 h-6 transition duration-300 ease-in-out" />
            </div>
            <div
              className="cursor-pointer sm:hidden block group absolute left-2 top-1/2 transform -translate-y-1/2 rounded-full bg-white/50 p-3 hover:border hover:border-white hover:bg-white transition duration-300 ease-in-out"
              onClick={handlePrev}
            >
              <ArrowLeftIcon className="text-gray w-6 h-6 transition duration-300 ease-in-out" />
            </div>
          </div>
          <div className="flex md:w-[8%] w-full h-[90px] md:h-[612px] flex-row md:flex-col justify-start md:items-end items-center relative">
            {listMedia.map((media, index) => (
              <div
                ref={(el) => (vignetteRefs.current[index] = el)}
                key={index}
                className={`${
                  index === selectedMediaIndex ? "background" : ""
                } w-[17%] md:w-10/12 cursor-pointer relative transition duration-300 ease-in-out md:ml-0 ml-3 ${
                  index > 0 && "md:mt-12"
                }`}
                onClick={() => handleMedia(index)}
              >
                <img
                  src={media.src}
                  alt={media.alt}
                  className={`w-[100%] h-[50px] md:h-[74px] object-cover transition duration-300 ease-in-out ${
                    index !== selectedMediaIndex ? "opacity-50" : ""
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LightBox;
