import React, {useRef, useEffect} from 'react';

import ForwardLine from './ForwardLine';
import Nav from './Nav';
import Formulaire from './Formulaire';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { stopFocus } from '@/redux/formFocusSlice';

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
            <section className='min-h-[559px] w-full flex '>
                <div className='w-[121px] min-h-[559px] bg-white px-4 py-6 hidden lg:flex flex-col items-center justify-between'>
                    <div className='w-full'>
                        <img src="/logos/logo.png" alt="Logo" className='w-[91px] h-auto' style={{ marginBottom: "20px" }} />
                        <div className='flex justify-center min-w-max -translate-x-11'>
                            <p className='text-or text-[16px] rotate-[270deg] translate-y-20 uppercase font-outfit' style={{ width: "max-content" }}>&rsaquo; une vue incroyable</p>
                        </div>
                    </div>
                    <ForwardLine pourcentage={0} />
                </div>
                <div className='w-full min-h-[559px] overflow-hidden flex flex-col items-end z-10 relative py-4e  md:py-0 px-4'>
                    {/* Appliquez la classe conditionnelle directement à la div backgroundImage */}
                    <div className={`backgroundImage transition duration-300 ease-in-out ${formFocus ? 'blurEffect' : ''}`}></div>
                    <Nav language="fr" />
                    <div className='flex flex-col md:mr-38 md:mt-10 md:mx-0 mx-auto md:my-0 my-auto' ref={ref}>
                        <h1 className='sm:text-[45px] text-4xl font-bold text-textClear'>Vous rêvez d’un<br/> pied-à-terre avec<br/> vue plein océan ?</h1>
                        <Formulaire />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;