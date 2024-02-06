"use client";

import React, {useEffect} from 'react';

const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve();
    img.onerror = (error) => reject(error);
  });
};

const Loader = () => {
    
    useEffect(() => {
    // URLs des images à charger
    const imageSources = [
      '/logos/logo.png',
    ];

    // Précharger toutes les images et mettre à jour l'état une fois chargées
    Promise.all(imageSources.map(src => preloadImage(src)))
      .then(() => {
        // Toutes les images sont chargées
        
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des images", error);
      });
  }, []);
    return (
        <div className='h-screen w-screen bg-white animate-pulse duration-100 flex justify-center items-center'>
            <img className='h-[136px] w-auto' src="/logos/logo.png" alt="logo duval" />
        </div>
    );
};

export default Loader;