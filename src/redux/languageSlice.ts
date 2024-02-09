import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface LanguageState {
    language: string;
}

const initialState: LanguageState = {
    language: "fr", // Langue initiale
};

// Utilisez directement le résultat de createSlice
const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguage: (state, action: PayloadAction<string>) => {
            state.language = action.payload;
        }
    }
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;