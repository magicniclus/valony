"use client";

import React from 'react';

import { useSelector } from 'react-redux';

const Footer = () => {

    const language = useSelector((state: any) => state.language.language);   

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
                `}</style>
                <footer className='py-10 px-16 w-full bg-text bg-black flex justify-between items-center'>
                    <img src="/images/logo-white.png" alt="logo" className="w-[158px] h-auto" />
                    <div className='h-full'>
                        <div className='flex w-full justify-between'>
                            <a href="https://www.facebook.com/groupeduval" target='blank'>
                                <img src="/icons/facebook.png" alt="facebook" className="w-[6px] h-auto" />
                            </a>
                            <a href="https://www.instagram.com/groupe_duval/" target='blank'>
                                <img src="/icons/instagram.png" alt="instagram" className="w-[13px] h-auto" />
                            </a>
                            <a href=" https://twitter.com/groupe_duval" target='blank'>
                                <img src="/icons/x.png" alt="x" className="w-[13px] h-auto" />   
                            </a>
                            <a href="https://www.linkedin.com/company/groupe-duval/" target='blank'>
                                <img src="/icons/linkdin.png" alt="linkdin" className="w-[13px] h-auto" />
                            </a>
                            <a href=" https://fr.viadeo.com/fr/company/groupe-duval" target='blank'>
                                <img src="/icons/pomme.png" alt="viadeo" className="w-[13px] h-auto" />
                            </a>
                            <a href="https://journaldericduval.fr/" target='blank'>
                                <img src="/icons/wifi.png" alt="journal de ric duval" className="w-[13px] h-auto" />
                            </a>
                        </div>
                        <div className='mt-9'>
                            <a href="https://www.groupeduval.com/mentions-legales/" target='blank' className='button text-white font-outfit text-[14px] relative'>Mentions légales</a>
                            <a href="/#hero" className='button text-white font-outfit text-[14px] relative ml-5'>Contactez-nous</a>
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
            `}</style>
            <footer className='py-10 px-16 w-full bg-text bg-black flex justify-between items-center'>
                <img src="/images/logo-white.png" alt="logo" className="w-[158px] h-auto" />
                <div className='h-full'>
                    <div className='flex w-full justify-between'>
                       <a href="https://www.facebook.com/groupeduval" target='blank'>
                                <img src="/icons/facebook.png" alt="facebook" className="w-[6px] h-auto" />
                            </a>
                            <a href="https://www.instagram.com/groupe_duval/" target='blank'>
                                <img src="/icons/instagram.png" alt="instagram" className="w-[13px] h-auto" />
                            </a>
                            <a href=" https://twitter.com/groupe_duval" target='blank'>
                                <img src="/icons/x.png" alt="x" className="w-[13px] h-auto" />   
                            </a>
                            <a href="https://www.linkedin.com/company/groupe-duval/" target='blank'>
                                <img src="/icons/linkdin.png" alt="linkdin" className="w-[13px] h-auto" />
                            </a>
                            <a href=" https://fr.viadeo.com/fr/company/groupe-duval" target='blank'>
                                <img src="/icons/pomme.png" alt="viadeo" className="w-[13px] h-auto" />
                            </a>
                            <a href="https://journaldericduval.fr/" target='blank'>
                                <img src="/icons/wifi.png" alt="journal de ric duval" className="w-[13px] h-auto" />
                            </a>
                    </div>
                    <div className='mt-9'>
                        <a  href="https://www.groupeduval.com/mentions-legales/" target='blank' className='button text-white font-outfit text-[14px] relative'>Legal Notice</a>
                        <a href="/#hero" className='button text-white font-outfit text-[14px] relative ml-5'>Contact us</a>
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