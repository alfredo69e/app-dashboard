import { useEffect } from 'react';
import { localStorageGetTheme } from './../helper';
import { RootState, useAppDispatch, useAppSelector, startThemeLoad, PaletteTypeEnum } from './../store';

export const useTheme = () => {


  const { theme } = useAppSelector((state: RootState) => state.theme );

  const dispatch = useAppDispatch();
  
  useEffect( () => {
      const localTheme = localStorageGetTheme();
      let mode: PaletteTypeEnum = PaletteTypeEnum.light;
      if ( localTheme ) {
        const index: number = Object.keys(PaletteTypeEnum).indexOf(localTheme);
        mode = Object.values(PaletteTypeEnum)[index];
      }

      dispatch( startThemeLoad( mode ) );

  }, []);



  return {
    theme,

  }
}