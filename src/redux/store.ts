import { combineReducers, createStore } from 'redux';
import loadingReducer from '../redux/loadingSlice';
import formFocusSlice from '../redux/formFocusSlice';
// Importez d'autres réducteurs si nécessaire

// Combine tous vos réducteurs
const rootReducer = combineReducers({
    loading: loadingReducer, 
    focus: formFocusSlice
});

// Créez et exportez le type RootState basé sur le rootReducer
export type RootState = ReturnType<typeof rootReducer>;

// Créez et exportez votre store
export const store = createStore(rootReducer);

// Vous pouvez également avoir besoin d'exporter le rootReducer selon votre configuration
export default rootReducer;
