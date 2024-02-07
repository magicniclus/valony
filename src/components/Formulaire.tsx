"use client";

import React, { use, useEffect } from 'react';
import StepOne from './formStep/StepOne';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { stopFocus, focus as focusAction } from '@/redux/formFocusSlice';


const Formulaire = () => {

    const focus = useSelector((state: RootState) => state.focus);

    const dispatch = useDispatch();

    return (
        <form className='mt-10' 
              onFocus={() => dispatch(focusAction())} 
              onBlur={(e) => {
                  // Empêche le déclenchement de onBlur lors du passage entre les éléments du formulaire
                  if (!e.currentTarget.contains(e.relatedTarget)) {
                      dispatch(stopFocus());
                  }
              }}>
            <StepOne />
        </form>
    );
};

export default Formulaire;