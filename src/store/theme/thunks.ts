

import { AppDispatch } from './../stores';
import { PaletteTypeEnum, setTheme } from './themeSlice';
import { localStorageSetTheme } from './../../helper';


export const startThemeLoad = ( theme: PaletteTypeEnum ) => {
    return async( dispatch: AppDispatch ) => {
       
        localStorageSetTheme( theme );
        dispatch( setTheme({ theme }) );

    }  
}