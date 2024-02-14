import React, {useRef, useEffect, useState} from 'react';

import ForwardLine from './ForwardLine';
import Nav from './Nav';
import Formulaire from './Formulaire';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { stopFocus, focus as focusAction } from '@/redux/formFocusSlice';

import { ArrowDownIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

import { gsap } from 'gsap';

const Hero = () => {

    const dispatch = useDispatch();
    const ref = useRef<HTMLDivElement>(null);

    const refTitle = useRef<HTMLHeadingElement>(null);
    const refForm = useRef<HTMLDivElement>(null);
    const refVignette = useRef<HTMLDivElement>(null);
    const refDecouverte = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLImageElement>(null);

    const { formFocus } = useSelector((state: RootState) => state.focus);
    const language = useSelector((state: any) => state.language.language);   
    const backgroundClass = formFocus ? 'background blur' : 'background';

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
        const link = document.createElement('a');
        link.href = '/download/plaquette.pdf'; // URL du fichier à télécharger
        link.download = 'plaquette.pdf'; // Suggère un nom de fichier pour enregistrer
        document.body.appendChild(link); // Ajoute l'élément au document
        link.click(); // Déclenche le téléchargement
        document.body.removeChild(link); // Nettoie en supprimant l'élément du document
    }

    useEffect(() => {
        // GSAP animations
        gsap.fromTo([refTitle.current, logoRef.current, refForm.current, refVignette.current, refDecouverte.current], {
            opacity:0,
            y: "100%", // Départ de 30 pixels en bas
        }, {
            opacity: 1,
            y: 0, // Arrivée à la position de départ
            duration: 0.5, // Durée de l'animation
            delay: 0.5, // Délai avant le début de l'animation
            // stagger: 0.2, // Délai entre chaque animation des éléments
            ease: 'easeOut', // Type d'animation pour une sortie plus douce
        })
        
    }, []);


    const fr = ()=>{
        return(

            <>
             <style jsx>{`
                       .backgroundImage {
                    position: absolute;
                    top: 0; // Positionne l'image de fond pour couvrir uniquement la moitié droite
                    right: 0;
                    bottom: 0;
                    background: url('/background/hero.png') top center no-repeat;
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
                    .backgroundImage{
                        background: url('/background/hero-mobil.png') top center no-repeat;
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
                <section id="hero" className='min-h-[559px] w-full flex flex-col relative'>
                    <div className='flex'>
                        <div ref={refVignette} onMouseEnter={()=>setArrowIsHover(true)} onMouseOut={()=>{setArrowIsHover(false)}} onClick={()=>dispatch(focusAction())} className='cursor-pointer absolute left-[67px] top-[350px] p-3 h-[108px] w-[108px] rounded-full border-2 border-or bg-white justify-center items-center flex-col z-30 group hover:bg-or lg:flex hidden'>
                            <p onMouseEnter={()=>setArrowIsHover(true)} onMouseOut={()=>{setArrowIsHover(false)}} className='text-or font-extrabold text-center font-outfit text-[10px] uppercase group-hover:text-white transition duration-300 ease-in-out '>Télécharger la plaquette</p>
                            {
                                arrowIsHover ? <img src="/icons/arrow-white.png" alt="arrow" onMouseEnter={()=>setArrowIsHover(true)} onMouseOut={()=>{setArrowIsHover(false)}} className='h-[10px] mt-2 transition duration-300 ease-in-out' /> : <img src="/icons/arrow-or.png" alt="arrow" onMouseEnter={()=>setArrowIsHover(true)} onMouseOut={()=>{setArrowIsHover(false)}} className='h-[10px] mt-2 transition duration-300 ease-in-out' />
                            }
                        </div>
                        <div className='w-[121px] min-h-[559px] bg-white px-4 py-6 hidden lg:flex flex-col items-center justify-between'>
                            <div className='w-full'>
                                <img ref={logoRef} src="/logos/logo.png" alt="Logo" className='w-[91px] h-auto' style={{ marginBottom: "20px" }} />
                                <div className='flex justify-center min-w-max -translate-x-11'>
                                    <p className='text-or text-[16px] rotate-[270deg] translate-y-20 uppercase font-outfit font-bold' style={{ width: "max-content" }}>&rsaquo; une vue incroyable</p>
                                </div>
                            </div>
                            <ForwardLine pourcentage={0} />
                        </div>
                        <div className='w-full min-h-[559px] overflow-hidden flex flex-col md:items-end items-start justify-between z-10 relative py-4e px-4'>
                            {/* Appliquez la classe conditionnelle directement à la div backgroundImage */}
                            <div className={`backgroundImage transition duration-300 ease-in-out ${formFocus ? 'blurEffect' : ''}`}></div>
                            <Nav />
                            <div className='flex flex-col md:ml-0 md:mt-10 md:mx-0  md:my-0 my-auto md:mb-32' ref={ref}>
                                <h1 className='sm:text-[45px] text-4xl font-bold text-textClear leading-[60px] font-playfair' ref={refTitle}>Vous rêvez d’un<br/> pied-à-terre avec<br/> vue plein océan ?</h1>
                                <div ref={refForm}>
                                    <Formulaire />
                                </div>
                            </div>
                            <div className='bg-white py-3 px-6 rounded-r-full w-[450px] max-w-[80vw] md:mr-[170px] md:rounded-l-none rounded-l-full md:mx-0 mx-auto md:min-w-[500px] md:flex hidden' ref={refDecouverte}>
                                <div className='flex justify-between h-full flex-col sm:items-start items-center'>
                                    <p className='text-[10px] font-outfit text-or text-center uppercase'>Découvrez</p>
                                    <h2 className='text-or text-[20px] font-outfit text-center uppercase'>Les Villas SEAVEN</h2>
                                    <h3 className='text-text text-[18px] font-outfit sm:w-full flex justify-between items-center text-center uppercase'>À Saint-Pierre d’Oléron (17)
                                        {/* <ArrowDownIcon className='text-text h-[20px] translate-x-[160px] md:block hidden' /> */}
                                        <img src="/icons/arrow-black.png" alt="arrow" className='h-[20px] translate-x-[160px]' />
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-gray py-5 px-5 md:mx-0 mx-auto w-full flex md:hidden relative'>
                            <a onMouseEnter={()=>setArrowIsHover(true)} onMouseOut={()=>{setArrowIsHover(false)}} href="#hero" onClick={()=>dispatch(focusAction())} className='cursor-pointer absolute right-4 -top-[50px] p-2 h-[100px] w-[100px] rounded-full border-2 border-or bg-white justify-center items-center flex-col z-30 group hover:bg-or md:hidden flex'>
                                <p className='text-or text-center font-outfit text-[10px] uppercase group-hover:text-white transition duration-300 ease-in-out '>Télécharger la plaquette</p>
                               {
                                 arrowIsHover ? <img src="/icons/arrow-white.png" alt="arrow" onMouseEnter={()=>setArrowIsHover(true)} onMouseOut={()=>{setArrowIsHover(false)}} className='h-[10px] mt-2 transition duration-300 ease-in-out' /> : <img src="/icons/arrow-or.png" alt="arrow" onMouseEnter={()=>setArrowIsHover(true)} onMouseOut={()=>{setArrowIsHover(false)}} className='h-[10px] mt-2 transition duration-300 ease-in-out' />
                                }
                            </a>
                            <div className='flex justify-between h-full flex-col'>
                                <p className='text-[10px] font-outfit text-or uppercase'>Découvrez</p>
                                <h2 className='text-or text-[20px] font-outfit uppercase'>Les Villas SEAVEN</h2>
                                <h3 className=' text-[18px] font-outfit sm:w-full flex justify-between items-center uppercase text-white'>À Saint-Pierre d’Oléron (17)<ArrowDownIcon className='text-text h-[20px] md:mr-10 md:block hidden' /></h3>
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
                       .backgroundImage {
                    position: absolute;
                    top: 0; // Positionne l'image de fond pour couvrir uniquement la moitié droite
                    right: 0;
                    bottom: 0;
                    background: url('/background/hero.png') top center no-repeat;
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
                    .backgroundImage{
                        background: url('/background/hero-mobil.png') top center no-repeat;
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
                <section id="hero" className='min-h-[559px] w-full flex flex-col relative'>
                    <div className='flex'>
                        <div ref={refVignette} onMouseEnter={()=>setArrowIsHover(true)} onMouseOut={()=>{setArrowIsHover(false)}} onClick={()=>dispatch(focusAction())} className='cursor-pointer absolute left-[67px] top-[350px] p-3 h-[108px] w-[108px] rounded-full border-2 border-or bg-white justify-center items-center flex-col z-30 group hover:bg-or lg:flex hidden'>
                            <p onMouseEnter={()=>setArrowIsHover(true)} onMouseOut={()=>{setArrowIsHover(false)}} className='text-or font-extrabold text-center font-outfit text-[10px] uppercase group-hover:text-white transition duration-300 ease-in-out '>Télécharger la plaquette</p>
                            {
                                arrowIsHover ? <img src="/icons/arrow-white.png" alt="arrow" onMouseEnter={()=>setArrowIsHover(true)} onMouseOut={()=>{setArrowIsHover(false)}} className='h-[10px] mt-2 transition duration-300 ease-in-out' /> : <img src="/icons/arrow-or.png" alt="arrow" onMouseEnter={()=>setArrowIsHover(true)} onMouseOut={()=>{setArrowIsHover(false)}} className='h-[10px] mt-2 transition duration-300 ease-in-out' />
                            }
                        </div>
                        <div className='w-[121px] min-h-[559px] bg-white px-4 py-6 hidden lg:flex flex-col items-center justify-between'>
                            <div className='w-full'>
                                <img ref={logoRef} src="/logos/logo.png" alt="Logo" className='w-[91px] h-auto' style={{ marginBottom: "20px" }} />
                                <div className='flex justify-center min-w-max -translate-x-11'>
                                    <p className='text-or text-[16px] rotate-[270deg] translate-y-20 uppercase font-outfit font-bold' style={{ width: "max-content" }}>&rsaquo; une vue incroyable</p>
                                </div>
                            </div>
                            <ForwardLine pourcentage={0} />
                        </div>
                        <div className='w-full min-h-[559px] overflow-hidden flex flex-col md:items-end items-start justify-between z-10 relative py-4e px-4'>
                            {/* Appliquez la classe conditionnelle directement à la div backgroundImage */}
                            <div className={`backgroundImage transition duration-300 ease-in-out ${formFocus ? 'blurEffect' : ''}`}></div>
                            <Nav />
                            <div className='flex flex-col md:ml-0 md:mt-10 md:mx-0  md:my-0 my-auto md:mb-32' ref={ref}>
                                <h1 className='sm:text-[45px] text-4xl font-bold text-textClear leading-[60px] font-playfair' ref={refTitle}>Vous rêvez d’un<br/> pied-à-terre avec<br/> vue plein océan ?</h1>
                                <div ref={refForm}>
                                    <Formulaire />
                                </div>
                            </div>
                            <div className='bg-white py-3 px-6 rounded-r-full w-[450px] max-w-[80vw] md:mr-[170px] md:rounded-l-none rounded-l-full md:mx-0 mx-auto md:min-w-[500px] md:flex hidden' ref={refDecouverte}>
                                <div className='flex justify-between h-full flex-col sm:items-start items-center'>
                                    <p className='text-[10px] font-outfit text-or text-center uppercase'>Découvrez</p>
                                    <h2 className='text-or text-[20px] font-outfit text-center uppercase'>Les Villas SEAVEN</h2>
                                    <h3 className='text-text text-[18px] font-outfit sm:w-full flex justify-between items-center text-center uppercase'>À Saint-Pierre d’Oléron (17)
                                        {/* <ArrowDownIcon className='text-text h-[20px] translate-x-[160px] md:block hidden' /> */}
                                        <img src="/icons/arrow-black.png" alt="arrow" className='h-[20px] translate-x-[160px]' />
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-gray py-5 px-5 md:mx-0 mx-auto w-full flex md:hidden relative'>
                            <a onMouseEnter={()=>setArrowIsHover(true)} onMouseOut={()=>{setArrowIsHover(false)}} href="#hero" onClick={()=>dispatch(focusAction())} className='cursor-pointer absolute right-4 -top-[50px] p-2 h-[100px] w-[100px] rounded-full border-2 border-or bg-white justify-center items-center flex-col z-30 group hover:bg-or md:hidden flex'>
                                <p className='text-or text-center font-outfit text-[10px] uppercase group-hover:text-white transition duration-300 ease-in-out '>Télécharger la plaquette</p>
                               {
                                 arrowIsHover ? <img src="/icons/arrow-white.png" alt="arrow" onMouseEnter={()=>setArrowIsHover(true)} onMouseOut={()=>{setArrowIsHover(false)}} className='h-[10px] mt-2 transition duration-300 ease-in-out' /> : <img src="/icons/arrow-or.png" alt="arrow" onMouseEnter={()=>setArrowIsHover(true)} onMouseOut={()=>{setArrowIsHover(false)}} className='h-[10px] mt-2 transition duration-300 ease-in-out' />
                                }
                            </a>
                            <div className='flex justify-between h-full flex-col'>
                                <p className='text-[10px] font-outfit text-or uppercase'>Découvrez</p>
                                <h2 className='text-or text-[20px] font-outfit uppercase'>Les Villas SEAVEN</h2>
                                <h3 className=' text-[18px] font-outfit sm:w-full flex justify-between items-center uppercase text-white'>À Saint-Pierre d’Oléron (17)<ArrowDownIcon className='text-text h-[20px] md:mr-10 md:block hidden' /></h3>
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

export default Hero;