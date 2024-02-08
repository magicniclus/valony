"use client";

import React from 'react';
import ForwardLine from './ForwardLine';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const BackgroundPresentation = () => {
    return (
        <section className='flex bg-cover bg-center w-full' style={{"backgroundImage": "url(/images/exterieur.jpg)"}}>
            <div className='w-[121px] min-h-[625px] px-4 py-6 hidden lg:flex flex-col items-center justify-between'>
                <div className='w-full'>
                    <div className='w-full'>
                            <div className='flex justify-center min-w-max -translate-x-[112px]'>
                                <p className='text-white text-[16px] rotate-[270deg] translate-y-44 uppercase font-outfit' style={{ width: "max-content" }}>&rsaquo; accès PRIVILÉGIÉ aux TRÉSORS DE L’ÎLE</p>
                            </div>
                        </div>
                </div>
                <ForwardLine pourcentage={42} color="white" />
            </div>
            <div className='w-full flex md:flex-row flex-col'>
                <div className='md:w-[50%] w-full overflow-hidden flex justify-between bg-beige flex-col px-14 py-8'>
                    <h2 className='text-[45px] font-bold text-blueClear leading-[50px]'>
                        Votre nouveau port d’attache à 
                        à La Cotinière
                    </h2>
                    <h3 className='font-outfit text-[17px] font-bold mt-3'>
                        Avec la plage de Saint-Pierre d’Oléron, La Cotinière est l’endroit où il fait bon se balader et se prélasser. Au milieu des cabanes de pêcheurs, on prend le temps, on fait ses achats et on s’installe en terrasse bercé par le rythme de l’océan… 
                    </h3>
                    <ul className='text-[14px] font-outfit text-text mt-3'>
                        <li className='flex items-center'>
                            <span className='mr-2'>-</span>
                            Emplacement privilégié et intimité préservée
                        </li>
                        <li className='flex items-center mt-2'>
                            <span className='mr-2'>-</span>
                            Accès direct à la plage, au plus près des trésors naturels de l’île 
                        </li>
                        <li className='flex items-center mt-2'>
                            <span className='mr-2'>-</span>
                            À 400 mètres du 1er port de pêche artisanale de Charente-Maritime 
                        </li>
                    </ul>
                    <div className='w-full flex justify-end mt-3'>
                        <button className='bg-white group  text-[14px] md:text-[20px] font-outfit text-blueClear py-2 px-4 rounded-full mt-4 uppercase hover:bg-blueClear hover:text-white flex items-center transition duration-300 ease-in-out'>
                            Connaitre l’adresse exacte
                            <ArrowRightIcon className='text-blueClear w-6 h-6 ml-2 group-hover:text-white group-hover:translate-x-1 transition duration-300 ease-in-out' />
                        </button>
                    </div>
                </div>
                 <div className='md:w-[50%] w-full min-h-[559px] overflow-hidden hidden md:flex justify-between items-center'></div>
            </div>
        </section>
    );
};

export default BackgroundPresentation;