import React, {useRef, useEffect} from 'react';

import ForwardLine from './ForwardLine';
import Nav from './Nav';
import Formulaire from './Formulaire';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { stopFocus } from '@/redux/formFocusSlice';
import { ArrowDownIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const Hero = () => {

    const dispatch = useDispatch();
    const ref = useRef<HTMLDivElement>(null);

     const { formFocus } = useSelector((state: RootState) => state.focus);
     const backgroundClass = formFocus ? 'background blur' : 'background';

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
                    z-index: -1; // Assurez-vous que ce z-index permet à l'image d'être en arrière-plan
                }

                .blurEffect {
                    filter: blur(8px);
                }
            `}</style>
            <section className='min-h-[559px] w-full flex flex-col relative'>
                <div className='flex'>
                    <div className='cursor-pointer absolute left-[67px] top-[350px] p-3 h-[108px] w-[108px] rounded-full border-2 border-or bg-white justify-center items-center flex-col z-30 group hover:bg-or lg:flex hidden'>
                        <p className='text-or text-center font-outfit text-[10px] uppercase group-hover:text-white transition duration-300 ease-in-out '>Télécharger la plaquette</p>
                        <ArrowRightIcon className='text-or h-[20px] mt-2 group-hover:text-white transition duration-300 ease-in-out ' />
                    </div>
                    <div className='w-[121px] min-h-[559px] bg-white px-4 py-6 hidden lg:flex flex-col items-center justify-between'>
                        <div className='w-full'>
                            <img src="/logos/logo.png" alt="Logo" className='w-[91px] h-auto' style={{ marginBottom: "20px" }} />
                            <div className='flex justify-center min-w-max -translate-x-11'>
                                <p className='text-or text-[16px] rotate-[270deg] translate-y-20 uppercase font-outfit' style={{ width: "max-content" }}>&rsaquo; une vue incroyable</p>
                            </div>
                        </div>
                        <ForwardLine pourcentage={0} />
                    </div>
                    <div className='w-full min-h-[559px] overflow-hidden flex flex-col items-end justify-between z-10 relative py-4e  md:py-0 px-4'>
                        {/* Appliquez la classe conditionnelle directement à la div backgroundImage */}
                        <div className={`backgroundImage transition duration-300 ease-in-out ${formFocus ? 'blurEffect' : ''}`}></div>
                        <Nav language="fr" />
                        <div className='flex flex-col md:mr-38 md:mt-10 md:mx-0 mx-auto md:my-0 my-auto md:mb-32' ref={ref}>
                            <h1 className='sm:text-[45px] text-4xl font-bold text-textClear'>Vous rêvez d’un<br/> pied-à-terre avec<br/> vue plein océan ?</h1>
                            <h2 className='md:hidden block text-[19px] text-textClear max-w-[350px] mt-5'>Vous souhaitez en savoir plus ? Téléchargez la plaquette</h2>
                            <Formulaire />
                        </div>
                        <div className='bg-white py-3 px-6 rounded-r-full w-[450px] max-w-[80vw] md:mr-[170px] md:rounded-l-none rounded-l-full md:mx-0 mx-auto md:min-w-[500px] md:flex hidden'>
                            <div className='flex justify-between h-full flex-col sm:items-start items-center'>
                                <p className='text-[10px] font-outfit text-or text-center uppercase'>Découvrez</p>
                                <h2 className='text-or text-[20px] font-outfit text-center uppercase'>Les Villas SEAVEN</h2>
                                <h3 className='text-text text-[18px] font-outfit sm:w-full flex justify-between items-center text-center uppercase'>À Saint-Pierre d’Oléron (17)<ArrowDownIcon className='text-text h-[20px] translate-x-[160px] md:block hidden' /></h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-white py-5 px-6 rounded-r-full md:rounded-l-none rounded-l-full md:mx-0 mx-auto w-full flex md:hidden'>
                        <div className='flex justify-between h-full flex-col sm:items-start items-center mx-auto'>
                            <p className='text-[10px] font-outfit text-or text-center uppercase'>Découvrez</p>
                            <h2 className='text-or text-[20px] font-outfit text-center uppercase'>Les Villas SEAVEN</h2>
                            <h3 className='text-text text-[18px] font-outfit sm:w-full flex justify-between items-center text-center uppercase'>À Saint-Pierre d’Oléron (17)<ArrowDownIcon className='text-text h-[20px] md:mr-10 md:block hidden' /></h3>
                        </div>
                    </div>
            </section>
        </>
    );
};

export default Hero;