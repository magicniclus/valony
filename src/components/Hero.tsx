/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";

import Formulaire from "./Formulaire";
import Nav from "./Nav";

import { focus as focusAction, stopFocus } from "@/redux/formFocusSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

import { ArrowDownIcon } from "@heroicons/react/24/outline";

import { gsap } from "gsap";

const Hero = () => {
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);

  const refTitle = useRef<HTMLHeadingElement>(null);
  const refForm = useRef<HTMLDivElement>(null);
  const refVignette = useRef<HTMLDivElement>(null);
  const refVignette2 = useRef<HTMLDivElement>(null);
  const refDecouverte = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);

  const { formFocus } = useSelector((state: RootState) => state.focus);
  const language = useSelector((state: any) => state.language.language);
  const backgroundClass = formFocus ? "background blur" : "background";

  const [arrowIsHover, setArrowIsHover] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        dispatch(stopFocus());
      }
    }

    // Attacher l'écouteur d'événements
    document.addEventListener("mousedown", handleClickOutside);

    // Retourne une fonction de nettoyage qui sera exécutée lors du démontage du composant
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);

  const downloadPlaquette = () => {
    // Créez un élément `<a>` et configurez-le pour le téléchargement du fichier
    const link = document.createElement("a");
    link.href = "/download/plaquette.pdf"; // URL du fichier à télécharger
    link.download = "plaquette.pdf"; // Suggère un nom de fichier pour enregistrer
    document.body.appendChild(link); // Ajoute l'élément au document
    link.click(); // Déclenche le téléchargement
    document.body.removeChild(link); // Nettoie en supprimant l'élément du document
  };

  useEffect(() => {
    // GSAP animations
    gsap.fromTo(
      [
        refTitle.current,
        logoRef.current,
        refForm.current,
        refVignette2.current,
        refVignette.current,
        refDecouverte.current,
      ],
      {
        opacity: 0,
        y: "100%", // Départ de 30 pixels en bas
      },
      {
        opacity: 1,
        y: 0, // Arrivée à la position de départ
        duration: 0.5, // Durée de l'animation
        delay: 0.5, // Délai avant le début de l'animation
        // stagger: 0.2, // Délai entre chaque animation des éléments
        ease: "easeOut", // Type d'animation pour une sortie plus douce
      }
    );
  }, []);

  const fr = () => {
    return (
      <>
        <style jsx>{`
          .backgroundImage {
            position: absolute;
            top: 0; // Positionne l'image de fond pour couvrir uniquement la moitié droite
            right: 0;
            bottom: 0;
            background: url("/background/hero-poitiers-valony-groupe-duval.jpg")
              top center no-repeat;
            background-size: cover;
            min-height: 559px;
            width: 100%;
            // transform: translatey(100%);
            // animation: fadeIn 0.4s ease-in-out forwards;
            z-index: -1; // Assurez-vous que ce z-index permet à l'image d'être en arrière-plan
          }

          .blurEffect {
            filter: blur(8px);
          }

          @media screen and (max-width: 768px) {
            .backgroundImage {
              background: url("/background/hero-SMARTPHONE-poitiers-valony-groupe-duval.jpg")
                top center no-repeat;
              background-size: cover;
            }
          }

          @keyframes fadeIn {
            0% {
              transform: translatey(100%);
            }
            100% {
              transform: translatey(0);
            }
          }
        `}</style>
        <section
          id="hero"
          className="min-h-[559px] w-full flex flex-col relative"
        >
          <div className="flex">
            <div
              className="absolute left-[67px] top-[350px] p-3 h-[108px] w-[108px] rounded-full border-2 border-[#312F39] bg-[#312F39] justify-center items-center flex-col z-30 lg:flex hidden"
              ref={refVignette2}
            >
              <p
                className="text-white font-light text-center font-outfit text-[13px] uppercase -translate-y-2"
                onClick={downloadPlaquette}
              >
                LIVRAISON
              </p>
              <p className=" font-playfair text-[35px] text-white leading-3 -translate-y-2">
                2025
              </p>
            </div>
            <div
              ref={refVignette}
              onMouseEnter={() => setArrowIsHover(true)}
              onMouseOut={() => {
                setArrowIsHover(false);
              }}
              onClick={() => dispatch(focusAction())}
              className="cursor-pointer absolute left-[67px] top-[470px] p-3 h-[108px] w-[108px] rounded-full border-2 border-or bg-white justify-center items-center flex-col z-30 group hover:bg-or lg:flex hidden"
            >
              <p
                onMouseEnter={() => setArrowIsHover(true)}
                onMouseOut={() => {
                  setArrowIsHover(false);
                }}
                className="text-or font-extrabold text-center font-outfit text-[10px] uppercase group-hover:text-white transition duration-300 ease-in-out "
              >
                Télécharger la plaquette
              </p>
              {arrowIsHover ? (
                <img
                  src="/icons/arrow-white.png"
                  alt="arrow"
                  onMouseEnter={() => setArrowIsHover(true)}
                  onMouseOut={() => {
                    setArrowIsHover(false);
                  }}
                  className="h-[10px] mt-2 transition duration-300 ease-in-out"
                />
              ) : (
                <img
                  src="/icons/arrow-or.png"
                  alt="arrow"
                  onMouseEnter={() => setArrowIsHover(true)}
                  onMouseOut={() => {
                    setArrowIsHover(false);
                  }}
                  className="h-[10px] mt-2 transition duration-300 ease-in-out"
                />
              )}
            </div>
            <div className="w-[121px] min-h-[559px] bg-white px-4 py-6 hidden lg:flex flex-col items-center justify-between">
              <div className="w-full">
                <img
                  ref={logoRef}
                  src="/logos/logo.png"
                  alt="Logo"
                  className="w-[91px] h-auto"
                  style={{ marginBottom: "20px" }}
                />
                <div className="flex justify-center min-w-max -translate-x-14">
                  <p
                    className="text-or text-[16px] rotate-[270deg] translate-y-28 uppercase font-outfit font-bold"
                    style={{ width: "max-content" }}
                  >
                    &rsaquo; AMBIANCE VERDOYANTE
                  </p>
                </div>
              </div>
              {/* <ForwardLine pourcentage={0} /> */}
            </div>
            <div className="w-full min-h-[559px] overflow-hidden flex flex-col md:items-end items-start justify-between z-10 relative md:pb-0 pb-28 md:px-4 relative">
              {/* Appliquez la classe conditionnelle directement à la div backgroundImage */}
              <div
                className={`backgroundImage transition duration-300 ease-in-out ${
                  formFocus ? "blurEffect" : ""
                }`}
              ></div>
              <Nav />
              <div
                className="flex flex-col md:ml-0 md:mt-0 md:mx-0 p-5 bg-[#938664] md:mr-48 md:mt-0 mt-40 md:mb-0 mb-20 md:w-max w-10/12"
                ref={ref}
              >
                <h1
                  className="sm:text-[45px] text-4xl font-bold text-white leading-[60px] font-playfair  w-max"
                  ref={refTitle}
                >
                  Et du patrimoine
                  <br /> à Poitiers, vous y
                  <br /> avez pensé ?
                </h1>
                <div ref={refForm} className="">
                  <Formulaire />
                </div>
              </div>
              <div
                className="bg-white py-3 px-6 rounded-r-full w-[450px] max-w-[80vw] md:mr-[190px] md:rounded-l-none rounded-l-full md:mx-0 mx-auto md:min-w-[500px] md:flex hidden"
                ref={refDecouverte}
              >
                <div className="flex justify-between h-full flex-col sm:items-start items-center">
                  <p className="text-[10px] font-outfit text-or text-center uppercase">
                    Découvrez
                  </p>
                  <h2 className="text-or text-[20px] font-outfit text-center uppercase">
                    Les appartements valony
                  </h2>
                  <h3 className="text-text text-[18px] font-outfit sm:w-full flex justify-between items-center text-center uppercase">
                    À POITIERS (86)
                    {/* <ArrowDownIcon className='text-text h-[20px] translate-x-[160px] md:block hidden' /> */}
                    <img
                      src="/icons/arrow-black.png"
                      alt="arrow"
                      className="h-[20px] translate-x-[160px]"
                    />
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray py-5 px-5 md:mx-0 mx-auto w-full flex md:hidden relative">
            <div className="absolute right-32 -top-[70px] p-2 h-[100px] w-[100px] rounded-full border-2 border-[#312F39] bg-[#312F39] justify-center items-center flex-col z-30 md:hidden flex">
              <p
                className="text-white font-light text-center font-outfit text-[13px] uppercase"
                onClick={downloadPlaquette}
              >
                LIVRAISON
              </p>
              <p className=" font-playfair text-[35px] text-white leading-3">
                2025
              </p>
            </div>
            <a
              onMouseEnter={() => setArrowIsHover(true)}
              onMouseOut={() => {
                setArrowIsHover(false);
              }}
              href="#hero"
              onClick={() => dispatch(focusAction())}
              className="cursor-pointer absolute right-4 -top-[70px] p-2 h-[100px] w-[100px] rounded-full border-2 border-or bg-white justify-center items-center flex-col z-30 group hover:bg-or md:hidden flex"
            >
              <p className="text-or text-center font-outfit text-[10px] uppercase group-hover:text-white transition duration-300 ease-in-out ">
                Télécharger la plaquette
              </p>
              {arrowIsHover ? (
                <img
                  src="/icons/arrow-white.png"
                  alt="arrow"
                  onMouseEnter={() => setArrowIsHover(true)}
                  onMouseOut={() => {
                    setArrowIsHover(false);
                  }}
                  className="h-[10px] mt-2 transition duration-300 ease-in-out"
                />
              ) : (
                <img
                  src="/icons/arrow-or.png"
                  alt="arrow"
                  onMouseEnter={() => setArrowIsHover(true)}
                  onMouseOut={() => {
                    setArrowIsHover(false);
                  }}
                  className="h-[10px] mt-2 transition duration-300 ease-in-out"
                />
              )}
            </a>
            <div className="flex justify-between h-full flex-col">
              <p className="text-[10px] font-outfit text-or uppercase">
                Découvrez
              </p>
              <h2 className="text-or text-[20px] font-outfit uppercase">
                Les appartements valony
              </h2>
              <h3 className=" text-[18px] font-outfit sm:w-full flex justify-between items-center uppercase text-white">
                À POITIERS (86)
                <ArrowDownIcon className="text-text h-[20px] md:mr-10 md:block hidden" />
              </h3>
            </div>
          </div>
        </section>
      </>
    );
  };

  return <>{fr()}</>;
};

export default Hero;
