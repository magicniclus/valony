"use client";

import React, {useState} from 'react';

import { useDispatch, useSelector } from "react-redux";

import { setLanguage } from "@/redux/languageSlice";

const Nav = () => {

    const dispatch = useDispatch();

    const language = useSelector((state: any) => state.language.language);   

    const handleLanguage = (language: string) => {
        dispatch(setLanguage(language));
    };

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
            <div className='w-full bg-transparent flex justify-end py-1 px-4'>
                <div className='flex text-[18px]'>
                    <button className={`${language !== "fr" ? "buttonOne" : ""} w-full h-[50px] font-bold mr-4 relative ${language === "fr" ? "text-textClear" : "text-white"}`} onClick={()=>handleLanguage("fr")}>FR</button>
                    <button className={`${language !== "en" ? "buttonTwo" : ""} w-full h-[50px] text-textClear font-bold relative ${language === "en" ? "text-textClear" : "text-white"}`} onClick={()=>handleLanguage("en")}>EN</button>
                </div>
            </div>
        </>
    );
};

export default Nav;