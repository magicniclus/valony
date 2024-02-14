"use client";

import React, {useEffect, useRef} from 'react';

import { useDispatch, useSelector } from "react-redux";

import { setLanguage } from "@/redux/languageSlice";

import { gsap } from 'gsap';

const Nav = () => {

    const dispatch = useDispatch();

    const language = useSelector((state: any) => state.language.language);   

    const handleLanguage = (language: string) => {
        dispatch(setLanguage(language));
    };

    const logoRef = useRef(null);
    const refLanguage = useRef(null);

    useEffect(() => {
        // GSAP animations
        gsap.fromTo([logoRef.current, refLanguage.current], {
            opacity:0,
            y: -30, // Départ de 30 pixels en bas
        }, {
            opacity: 1,
            y: 0, // Arrivée à la position de départ
            duration: 1, // Durée de l'animation
            stagger: 0.1, // Délai entre chaque animation des éléments
            ease: 'easeOut', // Type d'animation pour une sortie plus douce

        });
    }, []);

    return (
        <>
            <style jsx>{`
              .buttonOne:before, .buttonTwo:before {
                    content: " "; /* Assurez que content a toujours une valeur pour permettre la transition */
                    opacity: 0; /* Démarre invisible */
                    transition: opacity 0.3s ease-out; /* Applique la transition sur opacity */
                    position: absolute;
                    top: 12px;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background-color: white; /* Assurez-vous que cette couleur correspond à ce que vous voulez */
                    pointer-events: none; /* S'assure que le pseudo-élément ne bloque pas les événements de la souris */
                }

                .buttonOne:hover:before, .buttonTwo:hover:before {
                    opacity: 1; /* Devient visible au survol */
                }
            `}</style>
            <div className='w-full bg-transparent flex justify-between md:justify-end py-1 md:px-4 px-2'>
                <img ref={logoRef} src="/logos/logo.png" alt="Logo" className='w-[80px] h-auto md:hidden block' style={{ marginBottom: "20px" }} />
                <div className='flex text-[18px]' ref={refLanguage}>
                    <button className={`${language !== "fr" ? "buttonOne" : ""} font-outfit w-full h-[50px] font-normal hover:font-bold text-[18px] mr-4 relative ${language === "fr" ? "text-text" : "text-white"}`} onClick={()=>handleLanguage("fr")}>FR</button>
                    <button className={`${language !== "en" ? "buttonTwo" : ""} font-outfit w-full h-[50px] font-normal hover:font-bold text-[18px] relative ${language === "en" ? "text-text" : "text-white"}`} onClick={()=>handleLanguage("en")}>EN</button>
                </div>
            </div>
        </>
    );
};

export default Nav;