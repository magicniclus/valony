"use client";

import React, {useEffect, useState} from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { stopFocus, focus as focusAction } from '@/redux/formFocusSlice';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import { get } from 'http';

const StepOne = () => {
    const getFocus = useSelector((state: RootState) => state.focus.formFocus);
    const dispatch = useDispatch();

    const [step, setStep] = useState<number>(1);
    const [title, setTitle] = useState<string>('Pour plus d’informations, c’est ici ');
    const [placeholder, setPlaceholder] = useState<string>('Nom');
    const [phoneNumber, setPhoneNumber] = useState<[string, string] | null>(null);
    const [finalTitle, setFinalTitle] = useState<boolean>(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const [valueDisplay, setValueDisplay] = useState<string>('');

    useEffect(()=>{
        if(getFocus){
            switch (step) {
                case 1:
                    setValueDisplay(name);
                    break;
                case 2:
                    setValueDisplay(email);
                    break;
                case 3:
                    setValueDisplay(phone);
                    break;
                default:
                    break;
            }
        }else{
            setValueDisplay('');
        }
    }, [getFocus, name, email, phone, step]);


    useEffect(() => {
        handleTitle(step); // Appel de handleTitle lors du changement de step
    }, [step]);

    const handleStep = () => {
        if (step < 4) {
            setStep((e) => e + 1);
        }
    };

      useEffect(() => {
        let isValid = false;
        switch (step) {
            case 1:
                isValid = /^[a-zA-Z\s]+$/.test(name);
                break;
            case 2:
                isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
                break;
            case 3:
                isValid = /^\+[1-9]{1}[0-9]{3,14}$/.test(phone);
                break;
            default:
                isValid = false;
        }
        setIsButtonDisabled(!isValid);
    }, [name, email, phone, step]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        switch (step) {
            case 1:
                setName(value);
                break;
            case 2:
                setEmail(value);
                break;
            case 3:
                setPhone(value);
                break;
            default:
                break;
        }
    };

    const handleTitle = (step: number) => { // Correction de la faute de frappe "hangleTitle" à "handleTitle"
        switch (step) {
            case 1:
                setTitle('Pour plus d’informations, c’est ici ');
                setPlaceholder('Nom');
                break;
            case 2:
                setTitle('Je laisse ');
                setPlaceholder('mon adresse mail');
                break;
            case 3:
                setTitle('Je souhaite être rappelé au');
                setPhoneNumber(['Indicatif Pays', '06 XX XX XX XX']);
                break;
            case 4:
                setFinalTitle(true)
            default:
                setTitle('Pour plus d’informations, c’est ici ');
                setPlaceholder('Nom');
                break;
        }
    };

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
                    height: 1px;
                    width: 470px;
                }
                .backgroundFour{
                    background-color: transparent !important;
                     outline: none; /* Supprime la bordure de focus native */
                }
                @media (max-width: 768px) {
                    .backgroundThree:after{
                       width: 100%;
                    }
                }
            `}</style>
            <div>
                <div>
                    <div className='backgroundThree bg-transparent relative  md:mr-48'>
                        <p className={`text-[18px] font-outfit uppercase items-center absolute top-0 left-0 transition duration-300 ease-in-out xl:flex hidden ${getFocus ? "lg:-translate-x-[calc(100%+15px)] " : "md:flex"}`}>{title}</p>
                        <div className='flex'>
                            {
                                step <= 3 ?
                                <>
                                    <input 
                                        type={step === 2 ? 'email' : 'text'}
                                        value={valueDisplay}
                                        onChange={handleInputChange} 
                                        className="backgroundFour bg-transparent w-[95%] md:w-[450px] relative pb-3 placeholder:text-text text-[14px] md:block hidden"
                                        placeholder={
                                            getFocus ? (
                                                step === 1 ? 'Nom' : 
                                                step === 2 ? 'Adresse e-mail' : 
                                                'Numéro de téléphone'
                                            ) : ''
                                        }
                                    /> 
                                    <input 
                                        type={step === 2 ? 'email' : 'text'}
                                        value={valueDisplay}
                                        onChange={handleInputChange} 
                                        className="backgroundFour bg-transparent w-[95%] md:w-[450px] relative pb-3 placeholder:text-text text-[14px] md:hidden block"
                                        placeholder={
                                                step === 1 ? 'Nom' : 
                                                step === 2 ? 'Adresse e-mail' : 
                                                'Numéro de téléphone'
                                        }
                                    /> 
                                </>
                                : 
                                <>
                                    <input 
                                            type={step === 2 ? 'email' : 'text'}
                                            value={valueDisplay}
                                            onChange={handleInputChange} 
                                            className="backgroundFour bg-transparent w-[95%] md:w-[450px] relative pb-3 placeholder:text-text text-[14px] md:block hidden"
                                            placeholder={
                                                    'Numéro de téléphone'
                                            }
                                    /> 
                                    <input 
                                        type={step === 2 ? 'email' : 'text'}
                                        value={valueDisplay}
                                        onChange={handleInputChange} 
                                        className="backgroundFour bg-transparent w-[95%] md:w-[450px] relative pb-3 placeholder:text-text text-[14px] md:block hidden"
                                        placeholder={
                                                'Numéro de téléphone'
                                        }
                                    /> 
                                </>
                            }
                            <button type="button" onClick={handleStep} disabled={isButtonDisabled}>
                                <ArrowRightCircleIcon className="h-[17px] w-auto" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StepOne;