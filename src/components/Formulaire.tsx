"use client";

import React, { use, useEffect } from 'react';
import StepOne from './formStep/StepOne';
import StepEng from './formStep/StepEng';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { stopFocus, focus as focusAction } from '@/redux/formFocusSlice';


const Formulaire = () => {

    const focus = useSelector((state: RootState) => state.focus);
    const language = useSelector((state: any) => state.language.language);    

    const dispatch = useDispatch();

    const fr = ()=>{
        return (
        <form className='mt-10' 
                    onClick={() => dispatch(focusAction())} 
                    onBlur={(e) => {
                        // Empêche le déclenchement de onBlur lors du passage entre les éléments du formulaire
                        if (!e.currentTarget.contains(e.relatedTarget)) {
                            dispatch(stopFocus());
                        }
                    }}>
                    <StepOne />
        </form>
        )
    }

    const eng = ()=>{
        return (
            <form className='mt-10' 
                        onClick={() => dispatch(focusAction())} 
                        onBlur={(e) => {
                            // Empêche le déclenchement de onBlur lors du passage entre les éléments du formulaire
                            if (!e.currentTarget.contains(e.relatedTarget)) {
                                dispatch(stopFocus());
                            }
                        }}>
                        <StepEng />
            </form>
        )
    }

    return (
        <>
            {
                language === 'fr' ? fr() : eng()
            }
        </>
    );
};

export default Formulaire;