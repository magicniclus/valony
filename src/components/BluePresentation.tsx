"use client";

import React from 'react';
import ForwardLine from './ForwardLine';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

type BluePresentationProps = {
        navTitle: string;
        navPourcentage: number;
        title: string;
        susTitle: string;
        list: [string, string, string, string, string?, string?];
        button: string;
        src: string;
    };

const BluePresentation : React.FC<BluePresentationProps> = ({ navTitle, navPourcentage, title, susTitle, list, button, src }) => {
    return (
        <section className='flex'>
            <div className='w-[121px] min-h-[625px] bg-blueClear px-4 py-6 hidden lg:flex flex-col items-center justify-between'>
                <div className='w-full'>
                    <div className='w-full'>
                            <div className='flex justify-center min-w-max -translate-x-[72px]'>
                                <p className='text-white text-[16px] rotate-[270deg] translate-y-32 uppercase font-outfit' style={{ width: "max-content" }}>&rsaquo; {navTitle}</p>
                            </div>
                        </div>
                </div>
                <ForwardLine pourcentage={navPourcentage} color="white" />
            </div>
            <div className='w-full flex md:flex-row flex-col'>
                <div className='md:w-[50%] w-full min-h-[559px] overflow-hidden md:flex hidden justify-between items-center bg-gray bg-cover bg-center' style={{"backgroundImage": `url(/images/${src})`}}></div>
                <div className='md:w-[50%] w-full min-h-[559px] overflow-hidden flex justify-between items-start bg-blueClearClear flex-col px-14 py-8'>
                    <h2 className='text-[45px] font-bold text-blueClear leading-[50px]'>
                        {title}
                    </h2>
                    <h3 className='font-outfit text-[17px] font-bold mt-3'>
                        {susTitle}
                    </h3>
                    <ul className='text-[14px] font-outfit text-text mt-3'>
                        {
                            list.map((item, index) => (
                                <li key={index} className='flex items-center mt-2'>
                                    <span className='mr-2'>-</span>
                                    {item}
                                </li>
                            ))
                        }
                    </ul>
                    <div className='w-full mt-3 flex justify-end'>
                        <button className='bg-white group text-[14px] md:text-[20px] font-outfit text-blueClear py-2 px-4 rounded-full mt-4 uppercase hover:bg-blueClear hover:text-white flex items-center transition duration-300 ease-in-out'>
                            {button}
                            <ArrowRightIcon className='text-blueClear w-6 h-6 ml-2 group-hover:text-white group-hover:translate-x-1 transition duration-300 ease-in-out' />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BluePresentation;