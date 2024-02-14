"use client";

import React, {useEffect} from 'react';

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

import Footer from '@/components/Footer';

const Page = () => {
    useEffect(() => {
        // Créez un élément `<a>` et configurez-le pour le téléchargement du fichier
        const link = document.createElement('a');
        link.href = '/download/plaquette.pdf'; // URL du fichier à télécharger
        link.download = 'plaquette.pdf'; // Suggère un nom de fichier pour enregistrer
        document.body.appendChild(link); // Ajoute l'élément au document
        link.click(); // Déclenche le téléchargement
        document.body.removeChild(link); // Nettoie en supprimant l'élément du document
    }, []); // Exécutez une seule fois après le premier rendu

  type LanguageKey = 'fr' | 'eng';
  const languageKey = useSelector((state: RootState) => state.language.language) as LanguageKey;

    const fr = ()=>{
        return (
            <>
                <main className='min-h-screen w-screen bg-gray text-white flex justify-center items-center flex-col'>
                    <a href="/" className='w-[170px] max-w-[70%]'>
                        <img src='/images/logo-white.png' alt='logo' className='w-full h-auto' />
                    </a>
                    <h1 className='sm:text-[45px] text-4xl font-bold mt-10'>Merci</h1>
                    <h2 className='text-center mt-5'>Nous vous recontacterons dans les 24/48h.</h2>
                </main>
                <Footer />
            </>
        );
    }

    const eng = ()=>{
        return (
            <>
                <main className='min-h-screen w-screen bg-gray text-white flex justify-center items-center flex-col'>
                    <a href="/" className='w-[170px] max-w-[70%]'>
                        <img src='/images/logo-white.png' alt='logo' className='w-full h-auto' />
                    </a>
                    <h1 className='sm:text-[45px] text-4xl font-bold mt-10'>Thank you</h1>
                    <h2 className='text-center mt-5'>We will contact you within 24/48h.</h2>
                </main>
                <Footer />
            </>
        );
    }

    return (
        <> 
            {languageKey === 'fr' ? fr() : eng()}
        </>
    );
};

export default Page;