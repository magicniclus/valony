import React from 'react';

const Footer = () => {
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
                        <a href="#">
                            <img src="/icons/facebook.png" alt="facebook" className="w-[6px] h-auto" />
                        </a>
                        <a href="#">
                            <img src="/icons/instagram.png" alt="facebook" className="w-[13px] h-auto" />
                        </a>
                        <a href="#">
                            <img src="/icons/x.png" alt="facebook" className="w-[13px] h-auto" />   
                        </a>
                        <a href="#">
                            <img src="/icons/linkdin.png" alt="facebook" className="w-[13px] h-auto" />
                        </a>
                        <a href="#">
                            <img src="/icons/pomme.png" alt="facebook" className="w-[13px] h-auto" />
                        </a>
                        <a href="#">
                            <img src="/icons/wifi.png" alt="facebook" className="w-[13px] h-auto" />
                        </a>
                    </div>
                    <div className='mt-9'>
                        <a href="#" className='button text-white font-outfit text-[14px] relative'>Mentions légales</a>
                        <a href="#" className='button text-white font-outfit text-[14px] relative ml-5'>Contactez-nous</a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;