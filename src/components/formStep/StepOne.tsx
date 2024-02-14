"use client";

import React, {useEffect, useState} from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { startLoading, stopLoading} from '@/redux/loadingSlice';
import { stopFocus, focus as focusAction } from '@/redux/formFocusSlice';

import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';

import { addProspect } from '@/firebase/dataManager';

const StepOne = () => {

    const getFocus = useSelector((state: RootState) => state.focus.formFocus);
    const isLoading = useSelector((state: RootState) => state.loading.isLoading);
    const dispatch = useDispatch();

    const listIndicatif = [
        "FRANCE",
        "ROYAUME-UNI",
        "ETATS-UNIS",
        "ALLEMAGNE",
        "BELGIQUE",
        "CANADA",
        "ESPAGNE",
        "ITALIE",
        "LUXEMBOURG",
        "PAYS-BAS",
        "POLOGNE",
        "SUISSE",
        "AUTRE",
    ];

    const [step, setStep] = useState<number>(1);
    const [title, setTitle] = useState<string>('Pour plus d’informations, c’est ici ');
    const [placeholder, setPlaceholder] = useState<string>('Nom');
    const [phoneNumber, setPhoneNumber] = useState<[string, string] | null>(null);
    const [finalTitle, setFinalTitle] = useState<boolean>(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [checkbox, setCheckbox] = useState<boolean>(false);
    const [indicatif, setIndicatif] = useState<string>('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [isButtonDisabledTwo, setIsButtonDisabledTwo] = useState(true);

    const [valueDisplay, setValueDisplay] = useState<string>('');
    const [valueDisplayTwo, setValueDisplayTwo] = useState<string>('');

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
                    setValueDisplayTwo(indicatif);
                    break;
                default:
                    break;
                }
            }else{
            setValueDisplayTwo('');
            setValueDisplay('');
        }
    }, [getFocus, name, email, phone, step, indicatif]);


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
                isValid = true;
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
                setTitle('Pour plus d’informations, c’est ici ');
                setPlaceholder('mon adresse mail');
                break;
            case 3:
                setTitle('Pour plus d’informations, c’est ici ');
                setPhoneNumber(['Indicatif Pays', '06 XX XX XX XX']);
                break;
            case 4:
                setFinalTitle(true)
            default:
                setTitle('');
                setPlaceholder('Nom');
                break;
        }
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setIndicatif(e.target.value);
    };

    const handleSubmite = async (e: React.MouseEvent<HTMLButtonElement>)  => {
        dispatch(startLoading()) 
        addProspect({nom: name, email: email, telephone: phone, indicatif: indicatif}).then((success)=>{
            fetch("/api/send", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({nom: name, email: email, telephone: phone, indicatif: indicatif, date: new Date().toLocaleString()}),
          }).then((response) => {
             if (!response.ok) {
                return response.json().then((err) => {
                const errorMessage = err.message || "Une erreur inconnue est survenue";
                throw new Error(errorMessage);
                }).catch(() => {
                // Gestion des erreurs de parsing JSON ou d'autres erreurs réseau
                throw new Error("Erreur lors de la communication avec l'API");
                });
            } else {
                return response.json().then((data) => {
                console.log("API Response:", data);
                console.log(success);
                dispatch(stopFocus());
                setStep(1);
                setName('');
                setEmail('');
                setPhone('');
                setIndicatif('');
                setCheckbox(false);
                setIsButtonDisabled(true);
                setIsButtonDisabledTwo(true);
                window.location.href = '/merci';
                dispatch(stopLoading())
              });
            }
          });
        }).catch((error)=>{
            console.log(error);
            dispatch(stopLoading())
        })
    }

    useEffect(()=>{
        if(checkbox){
            setIsButtonDisabledTwo(false);
            
        }else{
            setIsButtonDisabledTwo(true);
        }
    }, [name, email, phone, indicatif, checkbox])

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
                .backgroundTelOne{
                    background-color: transparent !important;
                     outline: none; /* Supprime la bordure de focus native */
                     position: relative;
                }
                .backgroundTelOne:after{
                    content: '';
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    background-color: #1c1c1c;
                    height: 1px;
                    width: 100%;
                    z-index: 100;
                }
                .backgroundTelOneContainer {
                     border-bottom: 1px solid #1c1c1c;
                }
                .backgroudTelOneBorder {
                     border-bottom: 1px solid #1c1c1c;
                }
                @media (max-width: 768px) {
                    .backgroundThree:after{
                       width: 100%;
                    }
                }
                select {
                    /* for Firefox */
                    -moz-appearance: none;
                    /* for Chrome */
                    -webkit-appearance: none;
                    }

                    /* For IE10 */
                    select::-ms-expand {
                    display: none;
                }
                .finalPContainer{
                }
                .finalp{
                     border-bottom: 1px solid #1c1c1c; 
                }
            `}</style>
            <div className='font-outfit'>
                <div>
                    <div className={`${step < 3 && "backgroundThree"} bg-transparent relative  md:mr-48 md:min-w-[470px]`}>
                        <div className={` transition duration-300 ease-in-out ${getFocus ? "-translate-y-[calc(100%px)] " : "lg:flex  translate-y-[calc(100%px)] "}`}>
                            <p className={`lg:hidden flex flex-col font-outfit text-text uppercase text-[14px] transition duration-300 ease-in-out ${step < 4 ? " " : "hidden" } ${getFocus ? "-translate-y-[calc(100%px)] " : "lg:flex  translate-y-[calc(100%+5px)] "} " : ""} `}>{title} <span className='text-textClear text-[10px]'>
                                { getFocus ? (
                                    step === 1 ? 'Saisissez votre nom' : 
                                    step === 2 ? 'Votre adresse électronique' : 
                                    step === 3 ? 'Vos coordonnées téléphoniques' : ''
                                    ) : ''}
                                </span></p>
                            <p className={`lg:text-[16px] text-[16px] flex-col font-outfit uppercase items-end absolute top-0 left-0 transition duration-300 ease-in-out lg:flex hidden ${getFocus ? "lg:-translate-x-[calc(100%+15px)] " : ""} ${step < 4 ? " " : "hidden" }`}>{title}<span className='text-textClear text-[10px]'>
                                { getFocus ? (
                                    step === 1 ? 'Saisissez votre nom' : 
                                    step === 2 ? 'Saisissez votre adresse électronique' : 
                                    step === 3 ? 'Saisissez vos coordonnées téléphoniques' : ''
                                    ) : ''}
                                </span></p>
                        </div>
                        <div className='flex'>
                            {
                                step < 3 ?
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
                                            getFocus ?(
                                                step === 1 ? 'Nom' : 
                                                step === 2 ? 'Adresse e-mail' : 
                                                'Numéro de téléphone'
                                            ) : ''
                                        }
                                    /> 
                                </>
                                : 
                                step === 3 ?
                                <div className={`flex md:w-[450px] justify-between ${!getFocus && "backgroundTelOneContainer"}`}>
                                    <select 
                                        value={valueDisplayTwo} 
                                        onChange={handleSelectChange} 
                                        className={`backgroundTelOne ${getFocus && "backgroudTelOneBorder"} bg-transparent w-[25%] relative pb-3 text-[14px]`}
                                    >
                                        <option value="" disabled>{getFocus ? 'Indicatif pays' : ""}</option>
                                        {/* Mise à jour pour afficher correctement les options d'indicatif */}
                                        {
                                            listIndicatif.map((indicatif, index) => (
                                                <option key={index} value={indicatif}>{indicatif}</option> // Utilisez indicatif ou une structure appropriée pour `value`
                                            ))
                                        }
                                    </select>
                                    <input 
                                            type={'text'}
                                            value={valueDisplay}
                                            onChange={handleInputChange} 
                                            className={`backgroundTelOne bg-transparent w-[67%] relative pb-3 placeholder:text-text text-[14px]  ${getFocus && "backgroudTelOneBorder"}`}
                                            placeholder={
                                                getFocus ? '06 XX XX XX XX' : ""
                                            }
                                    /> 
                                </div> : 
                                <div className='w-full flex flex-col mb-5'>
                                    <div className=' text-[14px] text-text flex md:flex-row flex-col justify-between'>
                                        <div className='finalPContainer w-full md:w-[30%] overflow-hidden'>
                                            <p className='finalp'>{phone}</p>
                                        </div>
                                        <div className='finalPContainer w-full md:w-[30%] overflow-hidden md:mt-0 mt-3'>
                                            <p className='finalp uppercase'>{name}</p>
                                        </div >
                                        <div className='finalPContainer w-full md:w-[30%] overflow-hidden md:mt-0 mt-3'>
                                            <p className='finalp'>{email}</p>
                                        </div>
                                    </div>
                                    <div className='mt-5'>
                                        <input type="checkbox" className="mt-3" onChange={(e)=>setCheckbox(e.target.checked)} />
                                        <label className='ml-3'>J’ai lu et accepte la politique de confidentialité de ce site.*</label>
                                    </div>
                                    <div className='w-full flex md:justify-end'>
                                        <button type="button" className="bg-or text-white text-[20px] font-outfit py-3 w-full max-w-[129px] mt-5 rounded-full" disabled={isButtonDisabledTwo} onClick={handleSubmite} id={step === 4 ? "conversion" : ""}>Envoyer</button>
                                    </div>
                                </div>
                            }
                            <button type="button" onClick={handleStep} disabled={isButtonDisabled} className={`${step < 4 ? " " : "hidden" }`}>
                                {/* <ArrowRightCircleIcon className="h-[17px] w-auto" /> */}
                                <img src="/icons/arrow-button.png" alt="arrow-right" className="h-[17px] w-auto" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StepOne;