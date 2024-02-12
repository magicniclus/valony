import React, {useEffect, useRef} from 'react';

import ForwardLine from './ForwardLine';

import { ArrowRightIcon } from '@heroicons/react/24/outline';

import { useSelector } from "react-redux";

import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Bienvenue = () => {
    const language = useSelector((state: any) => state.language.language);  
    
    const titleRef = useRef(null);
    const logoRef = useRef(null);
    const paraphRef = useRef(null);
    const listRef = useRef(null);
    const buttonRef = useRef(null);
    const titleRef1 = useRef(null);
    const titleRef2 = useRef(null);
    const titleRef3 = useRef(null);
    const imageref1 = useRef(null);
    const imageref2 = useRef(null);
    const imageref3 = useRef(null);
    const buttonRef1 = useRef(null);
    const buttonRef2 = useRef(null);
    const buttonRef3 = useRef(null);

    useEffect(() => {
        // Définir un délai initial pour le décalage de l'animation
        let delay = 0.2;

        // Tableau des éléments à animer
        const elementsToAnimate = [titleRef.current, logoRef.current, paraphRef.current, listRef.current, buttonRef.current];

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

        const elementsToAnimate2 = [imageref1.current, imageref2.current, imageref3.current];

        elementsToAnimate2.forEach((elem) => {
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
        }
        ); 
        
        const elementsToAnimate3 = [titleRef1.current, titleRef2.current, titleRef3.current];

        elementsToAnimate3.forEach((elem, index) => {
            if (elem) { // Assurez-vous que l'élément existe
                gsap.fromTo(elem, {
                    y: "100%",
                    opacity: 0,
                }, {
                    y: 0,
                    opacity: 1,
                    duration: 0.4,
                    delay: 0.2,
                    ease: 'easeOut', // Crée un délai basé sur l'index
                    scrollTrigger: {
                        trigger: titleRef1.current, // Utilisez l'élément lui-même comme déclencheur
                        start: "top 90%",
                    }
                });
                 delay += 0.2;
            }
        });

        const elementsToAnimate4 = [buttonRef1.current, buttonRef2.current, buttonRef3.current];

        elementsToAnimate4.forEach((elem, index) => {
            if (elem) { // Assurez-vous que l'élément existe
                gsap.fromTo(elem, {
                    x: "-100%",
                    opacity: 0,
                }, {
                    x: 5,
                    opacity: 1,
                    duration: 0.4,
                    delay: 0.2,
                    ease: 'easeOut', // Crée un délai basé sur l'index
                    scrollTrigger: {
                        trigger: listRef.current, // Utilisez l'élément lui-même comme déclencheur
                        start: "top 90%",
                    }
                });
                 delay += 0.2;
            }
        });
    }, []);

    
    const fr = () => {
        return ( <>
            <style jsx>{`
                .lign:after{
                    content: "";
                    width: 2px;
                    height: 255px;
                    transform: translateY(10px) translateX(3px);
                    // transform: translateX(3px);
                    background-color: #938664;
                    position: absolute;
                    left: 0;
                    top: 0;
                }
                @media screen and (max-width: 768px) {
                    .lign:after{
                        display: none;
                    }
                }
            `}</style>
            <section className='flex'>
                <div className='w-[121px] min-h-[912px] px-4 py-6 hidden lg:flex flex-col items-center justify-between'>
                    <div className='w-full'>
                        <div className='w-full'>
                                <div className='flex justify-center min-w-max -translate-x-[65px]'>
                                    <p className='text-or text-[16px] rotate-[270deg] translate-y-32 uppercase font-outfit' style={{ width: "max-content" }}>&rsaquo; EMBARQUEMENT IMMINENT</p>
                                </div>
                            </div>
                    </div>
                    <ForwardLine pourcentage={75} color="or" />
                </div>
                <div className='w-full flex md:flex-row flex-col'>
                    <div className='md:w-[50%] w-full overflow-hidden md:hidden flex justify-between flex-col'>
                      <div className='h-1/3 w-full relative overflow-hidden'>
                            <p className='absolute text-white font-bold text-[45px] bottom-3 left-5 uppercase z-20 font-playfair' ref={titleRef1}>agilité</p>
                            <img src="/images/agilite.jpg" className='w-full h-full z-10' ref={imageref1} />
                        </div>
                        <div className='h-1/3 w-full relative overflow-hidden'>
                            <p className='absolute text-white font-bold text-[45px] bottom-3 left-5 uppercase z-20 font-playfair' ref={titleRef2}>Créativité</p>
                            <img src="/images/creativite.jpg" className='w-full h-full z-10' ref={imageref2} />
                        </div>
                        <div className='h-1/3 w-full relative overflow-hidden'>
                            <p className='absolute text-white font-bold text-[45px] bottom-3 left-5 uppercase z-20 font-playfair' ref={titleRef3}>Exigence</p>
                            <img src="/images/exigence.jpg" className='w-full h-full z-10' ref={imageref3} />
                        </div>
                    </div>
                    <div className='md:w-[50%] w-full overflow-hidden flex justify-between bg-grayClear flex-col px-4 md:px-14 py-14'>
                        <h2 className='sm:text-[45px] text-4xl font-bold text-blueClear leading-[50px] font-playfair' ref={titleRef}>
                            Bienvenue à bord
                        </h2>
                        <div className='md:mt-3 mt-6' ref={logoRef}>
                            <img src="/logos/logo.png" alt="Logo" className='w-[180px] h-auto' />
                            <h3 className='text-[20px] font-outfit text-or mt-3 uppercase'>Plus de 25 ans d’expérience</h3>
                        </div>
                        <p className='text-[17px] font-outfit font-bold md:mt-3 mt-6' ref={paraphRef}>
                            Concevoir des espaces à vivre au service de l’exigence des usagers et dans le plus grand respect des territoires, c’est la raison d’être du Groupe Duval depuis plus de 25 ans. Outre les garanties « constructeur », acheter dans le neuf offre de nombreux atouts : frais de notaires réduits, performances environnementales, confort au quotidien…
                        </p>
                        <div className='flex flex-col text-[14px] w font-outfit md:mt-5 mt-10 lign relative md:w-[377px]' ref={listRef}>
                            <div className='flex'>
                                <img src="/icons/bullet.png" alt="bullet" className='w-[9px] h-[9px] translate-y-1.5 mr-2' />
                                <p className='text-text flex'>Je suis intéressé(e) par l’acquisition d’une villa SEAVEN à Saint-Pierre d’Oléron.</p>
                            </div>
                            <div className='overflow-hidden group'>
                                    <a href="#hero" className='translate-x-1 flex bg-white rounded-r-full px-7 py-2 max-w-max text-or mt-3' ref={buttonRef1}>
                                        Je télécharge la plaquette 
                                        <ArrowRightIcon className='text-or h-[20px] ml-2 group-hover:translate-x-2 transition duration-150 ease-in-out' />
                                    </a>
                            </div>
                        <div className='flex mt-3'>
                                <img src="/icons/bullet.png" alt="bullet" className='w-[9px] h-[9px] translate-y-1.5 mr-2' />
                                <p className='text-text flex'>Je confirme mon intérêt et souhaite obtenir plus d’informations.</p>
                            </div>
                            <div className='overflow-hidden group'>
                                    <a href="#hero" className='translate-x-1 flex bg-white rounded-r-full px-7 py-2 max-w-max text-or mt-3' ref={buttonRef2}>
                                        Je veux être contacté 
                                        <ArrowRightIcon className='text-or h-[20px] ml-2 group-hover:translate-x-2 transition duration-150 ease-in-out' />
                                    </a>
                            </div>
                            <div className='overflow-hidden group'>
                                    <a href="#hero" className='translate-x-1 flex bg-white rounded-r-full px-7 py-2 max-w-max text-or mt-3' ref={buttonRef3}>
                                        Je veux recevoir des
                                         informations <ArrowRightIcon className='text-or h-[20px] ml-2 group-hover:translate-x-2 transition duration-150 ease-in-out' />
                                    </a>
                            </div>
                        <div className='flex mt-3'>
                                <img src="/icons/bullet.png" alt="bullet" className='w-[9px] h-[9px] translate-y-1.5 mr-2' />
                                <p className='text-text flex'>Je reçois l’appel ou le message d’un conseiller qui connait parfaitement l’emplacement de ces villas, leurs prestations, et qui saura me renseigner au mieux.</p>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-[50%] w-full overflow-hidden hidden md:flex justify-between flex-col'>
                        <div className='h-1/3 w-full relative overflow-hidden'>
                            <p className='absolute text-white font-bold text-[45px] bottom-3 left-5 uppercase z-20 font-playfair' ref={titleRef1}>agilité</p>
                            <img src="/images/agilite.jpg" className='w-full h-full z-10' ref={imageref1} />
                        </div>
                        <div className='h-1/3 w-full relative overflow-hidden'>
                            <p className='absolute text-white font-bold text-[45px] bottom-3 left-5 uppercase z-20 font-playfair' ref={titleRef2}>Créativité</p>
                            <img src="/images/creativite.jpg" className='w-full h-full z-10' ref={imageref2} />
                        </div>
                        <div className='h-1/3 w-full relative overflow-hidden'>
                            <p className='absolute text-white font-bold text-[45px] bottom-3 left-5 uppercase z-20 font-playfair' ref={titleRef3}>Exigence</p>
                            <img src="/images/exigence.jpg" className='w-full h-full z-10' ref={imageref3} />
                        </div>
                    </div>
                </div>
            </section>
        </>
        )
    }

    const en = ()=>{
        return (
             <>
            <style jsx>{`
                .lign:after{
                    content: "";
                    width: 2px;
                    height: 255px;
                    transform: translateY(10px) translateX(3px);
                    // transform: translateX(3px);
                    background-color: #938664;
                    position: absolute;
                    left: 0;
                    top: 0;
                }
                @media screen and (max-width: 768px) {
                    .lign:after{
                        display: none;
                    }
                }
            `}</style>
            <section className='flex'>
                <div className='w-[121px] min-h-[912px] px-4 py-6 hidden lg:flex flex-col items-center justify-between'>
                    <div className='w-full'>
                        <div className='w-full'>
                                <div className='flex justify-center min-w-max -translate-x-[65px]'>
                                    <p className='text-or text-[16px] rotate-[270deg] translate-y-32 uppercase font-outfit' style={{ width: "max-content" }}>&rsaquo; EMBARQUEMENT IMMINENT</p>
                                </div>
                            </div>
                    </div>
                    <ForwardLine pourcentage={75} color="or" />
                </div>
                <div className='w-full flex md:flex-row flex-col'>
                    <div className='md:w-[50%] w-full overflow-hidden md:hidden flex justify-between flex-col'>
                       <div className='h-1/3 w-full relative overflow-hidden'>
                            <p className='absolute text-white font-bold text-[45px] bottom-3 left-5 uppercase z-20 font-playfair' ref={titleRef1}>agilité</p>
                            <img src="/images/agilite.jpg" className='w-full h-full z-10' ref={imageref1} />
                        </div>
                        <div className='h-1/3 w-full relative overflow-hidden'>
                            <p className='absolute text-white font-bold text-[45px] bottom-3 left-5 uppercase z-20 font-playfair' ref={titleRef2}>Créativité</p>
                            <img src="/images/creativite.jpg" className='w-full h-full z-10' ref={imageref2} />
                        </div>
                        <div className='h-1/3 w-full relative overflow-hidden'>
                            <p className='absolute text-white font-bold text-[45px] bottom-3 left-5 uppercase z-20 font-playfair' ref={titleRef3}>Exigence</p>
                            <img src="/images/exigence.jpg" className='w-full h-full z-10' ref={imageref3} />
                        </div>
                    </div>
                    <div className='md:w-[50%] w-full overflow-hidden flex justify-between bg-grayClear flex-col px-4 md:px-14 py-14'>
                        <h2 className='sm:text-[45px] text-4xl font-bold text-blueClear leading-[50px]'>
                            Bienvenue à bord
                        </h2>
                        <div className='md:mt-3 mt-6'>
                            <img src="/logos/logo.png" alt="Logo" className='w-[180px] h-auto' />
                            <h3 className='text-[20px] font-outfit text-or mt-3 uppercase'>Plus de 25 ans d’expérience</h3>
                        </div>
                        <p className='text-[17px] font-outfit font-bold md:mt-3 mt-6'>
                            Concevoir des espaces à vivre au service de l’exigence des usagers et dans le plus grand respect des territoires, c’est la raison d’être du Groupe Duval depuis plus de 25 ans. Outre les garanties « constructeur », acheter dans le neuf offre de nombreux atouts : frais de notaires réduits, performances environnementales, confort au quotidien…
                        </p>
                        <div className='flex flex-col text-[14px] w font-outfit md:mt-5 mt-10 lign relative md:w-[377px]'>
                            <div className='flex'>
                                <img src="/icons/bullet.png" alt="bullet" className='w-[9px] h-[9px] translate-y-1.5 mr-2' />
                                <p className='text-text flex'>Je suis intéressé(e) par l’acquisition d’une villa SEAVEN à Saint-Pierre d’Oléron.</p>
                            </div>
                            <a href="#hero" className='translate-x-1 flex bg-white rounded-r-full px-7 py-2 max-w-max text-or mt-3'>
                                Je télécharge la plaquette <ArrowRightIcon className='text-or h-[20px] ml-2' />
                            </a>
                        <div className='flex mt-3'>
                                <img src="/icons/bullet.png" alt="bullet" className='w-[9px] h-[9px] translate-y-1.5 mr-2' />
                                <p className='text-text flex'>Je confirme mon intérêt et souhaite obtenir plus d’informations.</p>
                            </div>
                            <a href="#hero" className='translate-x-1 flex bg-white rounded-r-full px-7 py-2 max-w-max text-or mt-3'>
                                Je veux être contacté <ArrowRightIcon className='text-or h-[20px] ml-2' />
                            </a>
                            <a href="#hero" className='translate-x-1 flex bg-white rounded-r-full px-7 py-2 max-w-max text-or mt-3'>
                                Je veux recevoir des informations <ArrowRightIcon className='text-or h-[20px] ml-2' />
                            </a>
                        <div className='flex mt-3'>
                                <img src="/icons/bullet.png" alt="bullet" className='w-[9px] h-[9px] translate-y-1.5 mr-2' />
                                <p className='text-text flex'>Je reçois l’appel ou le message d’un conseiller qui connait parfaitement l’emplacement de ces villas, leurs prestations, et qui saura me renseigner au mieux.</p>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-[50%] w-full overflow-hidden hidden md:flex justify-between flex-col'>
                        <div className='h-1/3 w-full relative overflow-hidden'>
                            <p className='absolute text-white font-bold text-[45px] bottom-3 left-5 uppercase z-20 font-playfair' ref={titleRef1}>agilité</p>
                            <img src="/images/agilite.jpg" className='w-full h-full z-10' ref={imageref1} />
                        </div>
                        <div className='h-1/3 w-full relative overflow-hidden'>
                            <p className='absolute text-white font-bold text-[45px] bottom-3 left-5 uppercase z-20 font-playfair' ref={titleRef2}>Créativité</p>
                            <img src="/images/creativite.jpg" className='w-full h-full z-10' ref={imageref2} />
                        </div>
                        <div className='h-1/3 w-full relative overflow-hidden'>
                            <p className='absolute text-white font-bold text-[45px] bottom-3 left-5 uppercase z-20 font-playfair' ref={titleRef3}>Exigence</p>
                            <img src="/images/exigence.jpg" className='w-full h-full z-10' ref={imageref3} />
                        </div>
                    </div>
                </div>
            </section>
        </>
        )
    }

   
    return (
        <>
            {language === "fr" ? fr() : en()}
        </>
    );
};

export default Bienvenue;