"use client";

import React, {useEffect, useState} from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { stopFocus, focus as focusAction } from '@/redux/formFocusSlice';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';

const StepOne = () => {
    const getFocus = useSelector((state: RootState) => state.focus.formFocus); // Accès correct à formFocus
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(getFocus);
        if(getFocus){
           console.log('input is selected');
        }else {
            console.log('input is not selected');
        }
    }   , [getFocus]);

    return (
        <>  
            <style jsx>{`
                .backgroundThree {
                    position: relative;
                }
                .backgroundThree:after{
                    content: '';
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    background-color: #1c1c1c;
                    height: 2px;
                    width: 450px;
                }
                .backgroundFour{
                    background-color: transparent !important;
                     outline: none; /* Supprime la bordure de focus native */
                }
            `}</style>
            <div>
                <div>
                    <div className='backgroundThree bg-transparent relative  md:mr-48'>
                        <p className={`text-[18px] font-outfit uppercase flex items-center absolute top-0 left-0 transition duration-300 ease-in-out ${getFocus ? "-translate-x-[calc(100%+15px)]" : ""}`}>Pour plus d’informations, c’est ici </p>
                        <input type='text' className='backgroundFour bg-transparent w-[450px] relative pb-3 placeholder:text-text' placeholder={getFocus ? "Nom" : ""}/>
                        <ArrowRightCircleIcon className='h-[17px] w-auto ml-2 absolute right-0 top-1' />
                    </div>
                </div>
            </div>
        </>
    );
};

export default StepOne;