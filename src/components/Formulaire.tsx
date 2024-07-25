"use client";

import StepEng from "./formStep/StepEng";
import StepOne from "./formStep/StepOne";

import { focus as focusAction, stopFocus } from "@/redux/formFocusSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Formulaire = () => {
  const focus = useSelector((state: RootState) => state.focus);
  const language = useSelector((state: any) => state.language.language);

  const dispatch = useDispatch();

  const fr = () => {
    return (
      <form
        className="mt-10"
        onClick={() => dispatch(focusAction())}
        onBlur={(e) => {
          // Empêche le déclenchement de onBlur lors du passage entre les éléments du formulaire
          if (!e.currentTarget.contains(e.relatedTarget)) {
            dispatch(stopFocus());
          }
        }}
      >
        <StepOne />
      </form>
    );
  };

  return <>{fr()}</>;
};

export default Formulaire;
