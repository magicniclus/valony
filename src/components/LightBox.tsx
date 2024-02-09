"use client";

import React, { useEffect, useState } from 'react';

import ForwardLine from './ForwardLine';

import {  ArrowLeftIcon, ArrowRightIcon, SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/outline';

import { useSelector } from "react-redux";

interface MediaItem {
    id: number;
    src: string;
    alt: string; 
}

const LightBox = () => {
    const listMedia: MediaItem[] = [
        {
            id: 1,
            src: '/images/vignette.png',
            alt: 'LightBox'
        },
        {
            id: 2,
            src: '/images/jardin.jpg',
            alt: 'LightBox'
        },
        {
            id: 3,
            src: '/images/exterieur.jpg',
            alt: 'LightBox'
        },
        {
            id: 4,
            src: '/images/interieur.jpg',
            alt: 'LightBox'
        },
        {
            id: 5,
            src: '/images/terrasse.jpg',
            alt: 'LightBox'
        },
    ]

    const [imgSelected, setImgSelected] = useState<string>(listMedia[0].src);
    const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);
    const [isMuted, setIsMuted] = useState<boolean>(true);
    const [renderId, setRenderId] = useState(0); // Déplacez l'état renderId ici

    const language = useSelector((state: any) => state.language.language);   

    const handleMedia = (idx: number) => {
         setSelectedMediaIndex((prevIndex) => (idx) % listMedia.length);
            setRenderId((prevId) => prevId + 1); 
    }

    const imageContainer = (image : string)=>{
            return (
                <>
                    <style jsx>{`
                        @keyframes fadeIn {
                        from {
                            opacity: 0;
                        }
                        to {
                            opacity: 1;
                        }
                    }
                    .fade-in {
                        animation: fadeIn 0.5s ease-out;
                    }
                    `}</style>
                    <img src={listMedia[selectedMediaIndex].src} alt="LightBox" key={`${listMedia[selectedMediaIndex].src}-${renderId}`} className='h-[100%] w-[100%] my-auto object-cover fade-in' />  
                </>
            )
        }

    const videoContainer = ()=>{
        return (
            <div className='h-[100%] w-[100%] relative'>
                <video className='h-[100%] w-[100%] my-auto object-cover relative' autoPlay loop muted={isMuted}>
                    <source src="/images/video.mp4" type="video/mp4" />
                    
                </video>
                    <button type="button" onClick={() => setIsMuted(!isMuted)} className='absolute top-5 right-5 bg-white/30 p-3 rounded-full hover:bg-white transition duration-300 ease-in-out'>
                        {isMuted ? <SpeakerXMarkIcon className='text-gray w-6 h-6' /> : <SpeakerWaveIcon className='text-gray w-6 h-6' />}
                    </button>
            </div>
        )
    }

    const handleNext = () => {
        setSelectedMediaIndex((prevIndex) => (prevIndex + 1) % listMedia.length); // Avance à l'image suivante
    };

    const handlePrev = () => {
        setSelectedMediaIndex((prevIndex) => (prevIndex - 1 + listMedia.length) % listMedia.length); // Retour à l'image précédente
    };

    const fr = ()=>{
        return (
            <div className='flex justify-center min-w-max -translate-x-28'>
                <p className='text-white text-[16px] rotate-[270deg] translate-y-36 uppercase font-outfit' style={{ width: "max-content" }}>&rsaquo; Plongez dans l’ambiance de sEaven</p>
            </div>
        )
    }

     const en = ()=>{
        return (
            <div className='flex justify-center min-w-max -translate-x-28'>
                <p className='text-white text-[16px] rotate-[270deg] translate-y-36 uppercase font-outfit' style={{ width: "max-content" }}>&rsaquo; Plongez dans l’ambiance de sEaven</p>
            </div>
        )
    }

    return (
        <>
            <style jsx>{`
                .background:before{
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 1px;
                    bottom: -10px;
                    right: 0;
                    background-color: white;
                    z-index: 1;
                }
            `}</style>
            <section className='min-h-[690px] w-full flex '>
                    <div className='w-[121px] min-h-[612px] bg-gray px-4 py-10 hidden lg:flex flex-col items-center justify-between'>
                        <div className='w-full'>
                            {/*  */}
                            {language === "fr" ? fr() : en()}
                        </div>
                        <ForwardLine pourcentage={16} color='white' />
                    </div>
                    <div className='w-full min-h-[559px] overflow-hidden flex justify-between items-center z-10 bg-gray'>
                        <div className='md:h-[612px] h-full sm:w-[90%] w-full relative'>
                                {listMedia[selectedMediaIndex].src === '/images/vignette.png' ? videoContainer() : imageContainer(listMedia[selectedMediaIndex].src)}
                             <div className='cursor-pointer sm:hidden block group absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full bg-white/50 p-3 hover:border hover:border-white hover:bg-white transition duration-300 ease-in-out' onClick={handleNext}>
                                <ArrowRightIcon className='text-gray w-6 h-6 transition duration-300 ease-in-out' />
                            </div>
                            <div className='cursor-pointer sm:hidden block group absolute left-2 top-1/2 transform -translate-y-1/2 rounded-full bg-white/50 p-3 hover:border hover:border-white hover:bg-white transition duration-300 ease-in-out' onClick={handlePrev}>
                                <ArrowLeftIcon className='text-gray w-6 h-6 transition duration-300 ease-in-out' />
                            </div>
                        </div>
                        <div className='sm:flex hidden w-[8%] h-[612px] flex-col justify-between items-center relative'>
                            {
                                listMedia.map((media, index) => (
                                    <div key={index} className={`${index === selectedMediaIndex? "background" : ""} w-full cursor-pointer relative transition duration-300 ease-in-out`} onClick={()=>handleMedia(index)}>
                                            <img src={media.src} alt={media.alt} className={`w-[100%] h-[74px] object-cover transition duration-300 ease-in-out ${index !== selectedMediaIndex? "opacity-50" : ""}`} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
        </>
    );
};

export default LightBox;