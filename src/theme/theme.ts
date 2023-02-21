import { PaletteMode } from '@mui/material';
import { green, red } from '@mui/material/colors';
import { PaletteTypeEnum } from './../store';

export const getDesignTokens = (mode: PaletteMode) => ({

  palette:  {
      mode,
      ...(mode === PaletteTypeEnum.light
        ? {
            // palette values for light mode
            success: green,
            primary: {
              main: 'rgb(145, 85, 253)',
              gray: '#e9e9ea'
            },
            colors: {
              cards: '#ffffff',
              letterLight: '#3a3541',
              letterAvatar: '#7D7A82',
            },
            btn: {
              primary: '#9155fd'
            },
            background: {
              default: '#f4f5fa',
            },
            drawer: {
              colorText: 'rgba(58, 53, 65, 0.87)',
              colorNoActive: '#ffffff'
            },
            text: {
              primary: '#000000',
            },
            error: {
              main: red.A400,
            },

            specialOutline: {
              borderColor: "pink",
              borderWidth: 4
            },
            
          }
        : {
            // palette values for dark mode
            success: green,
            primary: {
              main: 'rgb(145, 85, 253)',
              gray: '#e9e9ea'
            },
            colors: {
              cards: 'rgb(49, 45, 75)',
              letterLight: '#ffffff',
              letterAvatar: '#D2CDE7',
            },
            btn: {
              primary: '#9155fd'
            },
            background: {
              default: 'rgb(40, 36, 61)',
            },
            drawer: {
              colorText: 'rgba(231, 227, 252, 0.87)',
              colorNoActive: '#ffffff'
            },
            text: {
              primary: '#fff',
            },
            error: {
              main: red.A400,
            },
            specialOutline: {
              borderColor: "pink",
              borderWidth: 4
            }
          }),
        },
      });