"use client";

import React, {useRef, useEffect, useState} from 'react';

import ForwardLine from './ForwardLine';

import { useSelector } from 'react-redux';

import { gsap } from 'gsap';

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
        const elementsToAnimate = [titleRef.current, susTitleRef.current, listRef.current, buttonRef.current];

        elementsToAnimate.forEach((elem) => {
            gsap.fromTo(elem, {
                y: "100%", // Commence un peu plus haut
                opacity: 0, // Commence avec une opacité de 0
            }, {
                y: 0, // Retourne à sa position d'origine
                opacity: 1, // Anime jusqu'à une opacité de 1
                duration: 0.4, // Durée de l'animation
                ease: 'easeOut', // Type d'ease pour l'animation
                delay, // Délai avant le début de l'animation
                scrollTrigger: {
                    trigger: titleRef.current, // Déclencheur de l'animation au scroll
                    start: "top 90%", // Démarre l'animation quand l'élément entre dans la vue
                }
            });

            delay += 0.2; // Augmente le délai pour le prochain élément, créant un effet décalé
        });
    }, []);

    const [arrowIsHover, setArrowIsHover] = useState(false);

    const fr = ()=>{
        return (
            <section className='flex bg-cover bg-center w-full' style={{"backgroundImage": "url(/images/exterieur.jpg)"}}>
                <div className='w-[121px] min-h-[625px] px-4 py-6 hidden lg:flex flex-col items-center justify-between'>
                    <div className='w-full'>
                        <div className='w-full'>
                                <div className='flex justify-center min-w-max -translate-x-[112px]'>
                                    <p className='text-white text-[16px] rotate-[270deg] translate-y-44 uppercase font-outfit font-bold' style={{ width: "max-content" }}>&rsaquo; accès PRIVILÉGIÉ aux TRÉSORS DE L’ÎLE</p>
                                </div>
                            </div>
                    </div>
                    <ForwardLine pourcentage={42} color="white" />
                </div>
                <div className='w-full flex md:flex-row flex-col'>
                    <div className='md:w-[50%] w-full overflow-hidden flex justify-between bg-beige flex-col md:px-20 px-4 py-16'>
                        <h2 ref={titleRef} className='sm:text-[45px] text-4xl font-bold text-blueClear leading-[60px] font-playfair'>
                            Votre nouveau port d’attache 
                            à La Cotinière
                        </h2>
                        <h3 ref={susTitleRef} className='font-outfit text-[17px] font-bold mt-3'>
                            Avec la plage de Saint-Pierre dOléron, La Cotinière est l&apos;endroit où il fait bon se balader et se prélasser. Au milieu des cabanes de pêcheurs, on prend le temps, on fait ses achats et on s&apos;installe en terrasse bercé par le rythme de l’océan… 
                        </h3>
                        <ul ref={listRef} className='text-[14px] font-outfit text-text mt-3'>
                            <li className='flex items-center'>
                                <span className='mr-2'>-</span>
                                Emplacement privilégié et intimité préservée
                            </li>
                            <li className='flex items-center mt-2'>
                                <span className='mr-2'>-</span>
                                Accès direct à la plage, au plus près des trésors naturels de l&apos;île 
                            </li>
                            <li className='flex items-center mt-2'>
                                <span className='mr-2'>-</span>
                                À 400 mètres du 1er port de pêche artisanale de Charente-Maritime 
                            </li>
                        </ul>
                        <div ref={buttonRef} className='w-full flex justify-end mt-3'>
                            <a onMouseEnter={()=>setArrowIsHover(true)} onMouseOut={()=>{setArrowIsHover(false)}} href="#hero" className='bg-white group  text-[14px] md:text-[20px] font-outfit text-blueClear py-2 px-4 rounded-full mt-4 hover:bg-blueClear hover:text-white flex items-center transition duration-300 ease-in-out'>
                                Connaitre l&apos;adresse exacte
                                {
                                arrowIsHover ? <img src="/icons/arrow-white.png" alt="arrow" onMouseEnter={()=>setArrowIsHover(true)} onMouseOut={()=>{setArrowIsHover(false)}} className='h-[10px] ml-2 transition duration-300 ease-in-out' /> : <img src="/icons/arrow-blue.png" alt="arrow" onMouseEnter={()=>setArrowIsHover(true)} onMouseOut={()=>{setArrowIsHover(false)}} className='h-[10px] ml-2 transition duration-300 ease-in-out' />
                                }
                                {/* <img src="/icons/arrow-blue.png" alt="arrow-right" className='w-4 h-auto ml-2 group-hover:text-white group-hover:translate-x-1 transition duration-300 ease-in-out' /> */}
                            </a>
                        </div>
                    </div>
                    <div className='md:w-[50%] w-full min-h-[559px] overflow-hidden hidden md:flex justify-between items-center'></div>
                </div>
            </section>
        )
    }

    const en = ()=>{
        return (
            <section className='flex bg-cover bg-center w-full' style={{"backgroundImage": "url(/images/exterieur.jpg)"}}>
                <div className='w-[121px] min-h-[625px] px-4 py-6 hidden lg:flex flex-col items-center justify-between'>
                    <div className='w-full'>
                        <div className='w-full'>
                                <div className='flex justify-center min-w-max -translate-x-[112px]'>
                                    <p className='text-white text-[16px] rotate-[270deg] translate-y-44 uppercase font-outfit font-bold' style={{ width: "max-content" }}>&rsaquo; VIP ACCESS TO THE ISLAND&apos;S TREASURES</p>
                                </div>
                            </div>
                    </div>
                    <ForwardLine pourcentage={42} color="white" />
                </div>
                <div className='w-full flex md:flex-row flex-col'>
                    <div className='md:w-[50%] w-full overflow-hidden flex justify-between bg-beige flex-col md:px-20 px-4 py-16'>
                        <h2 ref={titleRef} className='sm:text-[45px] text-4xl font-bold text-blueClear leading-[60px] font-playfair'>
                            Your new local port: La Cotinière
                        </h2>
                        <h3 ref={susTitleRef} className='font-outfit text-[17px] font-bold mt-3'>
                            With the Saint-Pierre d&apos;Oléron beach, La Cotinière is the perfect place for wandering and lounging. Amidst the fishermen&apos;s huts, you can take your time, do some shopping, and relax on a terrace and be rocked by the rhythm of the ocean...
                        </h3>
                        <ul ref={listRef} className='text-[14px] font-outfit text-text mt-3'>
                            <li className='flex items-start'>
                                <span className='mr-2'>-</span>
                                VIP location and absolute intimacy
                            </li>
                            <li className='flex items-start mt-2'>
                                <span className='mr-2'>-</span>
                                Direct access to the beach, close to the Island&apos;s natural treasures 
                            </li>
                            <li className='flex items-start mt-2'>
                                <span className='mr-2'>-</span>
                                400 metres from the 1st artisanal fishing port of Charente-Maritime
                            </li>
                        </ul>
                        <div ref={buttonRef} className='w-full flex justify-end mt-3'>
                            <a onMouseEnter={()=>setArrowIsHover(true)} onMouseOut={()=>{setArrowIsHover(false)}} href="#hero" className='bg-white group  text-[14px] md:text-[20px] font-outfit text-blueClear py-2 px-4 rounded-full mt-4 hover:bg-blueClear hover:text-white flex items-center transition duration-300 ease-in-out'>
                                Know the exact address
                                {
                                arrowIsHover ? <img src="/icons/arrow-white.png" alt="arrow" onMouseEnter={()=>setArrowIsHover(true)} onMouseOut={()=>{setArrowIsHover(false)}} className='h-[10px] ml-2 transition duration-300 ease-in-out' /> : <img src="/icons/arrow-blue.png" alt="arrow" onMouseEnter={()=>setArrowIsHover(true)} onMouseOut={()=>{setArrowIsHover(false)}} className='h-[10px] ml-2 transition duration-300 ease-in-out' />
                                }
                                {/* <img src="/icons/arrow-blue.png" alt="arrow-right" className='w-4 h-auto ml-2 group-hover:text-white group-hover:translate-x-1 transition duration-300 ease-in-out' /> */}
                            </a>
                        </div>
                    </div>
                    <div className='md:w-[50%] w-full min-h-[559px] overflow-hidden hidden md:flex justify-between items-center'></div>
                </div>
            </section>
        )
    }

    return (
        <>
            {
                language === "fr" ? fr() : en()
            }
        </>
    );
};

export default BackgroundPresentation;