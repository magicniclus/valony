"use client";

import React, {useState} from 'react';

import { useSelector } from 'react-redux';

const Footer = () => {

    const language = useSelector((state: any) => state.language.language);   

     // Chemin de base pour les icônes
  const basePath = '/icons/';
  
  // Un état pour gérer l'icône active
  const [activeIcon, setActiveIcon] = useState('');


  // Définition des icônes
  const icons = {
    facebook: { name: "facebook", url: "https://www.facebook.com/groupeduval" },
    instagram: { name: "instagram", url: "https://www.instagram.com/groupe_duval/" },
    twitter: { name: "x", url: "https://twitter.com/groupe_duval" },
    linkedin: { name: "linkdin", url: "https://www.linkedin.com/company/groupe-duval/" },
    viadeo: { name: "pomme", url: "https://fr.viadeo.com/fr/company/groupe-duval" },
    blog: { name: "wifi", url: "https://journaldericduval.fr/" },
};

  // Fonction pour changer l'icône au survol
  const handleMouseEnter = (iconName: string) => {
    setActiveIcon(iconName);
  };

  // Fonction pour remettre l'icône à son état original
  const handleMouseLeave = () => {
    setActiveIcon('');
  };

  // Générer les liens d'icônes
  const renderIconLinks = () => {
    return Object.entries(icons).map(([name, { name: iconName, url }]) => (
        <a href={url} target="blank" key={name}
            onMouseEnter={() => handleMouseEnter(name)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleMouseEnter(name)}
            className={`${activeIcon === name ? 'bg-white w-[17px] h-[17px] rounded-sm flex justify-center items-center' : 'bg-text w-[17px] h-[17px] flex justify-center items-center'}`}
            >
            <img src={`${basePath}${activeIcon === name ? `${iconName}-black.png` : `${iconName}.png`}`}
                alt={name}
                className={`w-[${iconName === "facebook" ? "6" : "13"}px] h-auto`} />
        </a>
    ));
};

    const fr = ()=>{
        return (
            <>
                <style jsx>{`
                    .button:after {
                        content: '';
                        position: absolute;
                        right: 0;
                        top: -10px;
                        background-color: #938664;
                        height: 1px;
                        width: 100%;
                    }
                    .button:hover:after{
                        height: 2px;
                    }
                `}</style>
                <footer className='py-10 px-2 md:px-16 w-full bg-text bg-black flex md:flex-row flex-col justify-between items-center'>
                    <img src="/images/logo-white.png" alt="logo" className="w-[158px] h-auto" />
                    <div className='h-full md:mt-0 mt-10'>
                        <div className='flex w-full justify-between'>
                            {renderIconLinks()}
                        </div>
                        <div className='mt-9'>
                            <a href="https://www.groupeduval.com/mentions-legales/" target='blank' className='button text-white font-outfit text-[14px] relative transition duration-100 ease-in-out hover:font-bold'>Mentions légales</a>
                            <a href="/#hero" className='button text-white font-outfit text-[14px] relative ml-5 transition duration-100 ease-in-out hover:font-bold'>Contactez-nous</a>
                        </div>
                    </div>
                </footer>
            </>
        )
    }

    const en = ()=>{
        return (
             <>
                <style jsx>{`
                    .button:after {
                        content: '';
                        position: absolute;
                        right: 0;
                        top: -10px;
                        background-color: #938664;
                        height: 1px;
                        width: 100%;
                    }
                    .button:hover:after{
                        height: 2px;
                    }
                `}</style>
                <footer className='py-10 px-2 md:px-16 w-full bg-text bg-black flex md:flex-row flex-col justify-between items-center'>
                    <img src="/images/logo-white.png" alt="logo" className="w-[158px] h-auto" />
                    <div className='h-full md:mt-0 mt-10'>
                        <div className='flex w-full justify-between'>
                            {renderIconLinks()}
                        </div>
                        <div className='mt-9'>
                            <a href="https://www.groupeduval.com/mentions-legales/" target='blank' className='button text-white font-outfit text-[14px] relative transition duration-100 ease-in-out hover:font-bold'>Mentions légales</a>
                            <a href="/#hero" className='button text-white font-outfit text-[14px] relative ml-5 transition duration-100 ease-in-out hover:font-bold'>Contactez-nous</a>
                        </div>
                    </div>
                </footer>
            </>
        )
    }

    return (
        <>
            {
                language === 'fr' ? fr() : en()
            }
        </>
    );
};

export default Footer;