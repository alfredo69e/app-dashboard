import { ThemeProvider,  } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { createContext, useMemo } from 'react';
import { createTheme } from '@mui/material/styles';
import { getDesignTokens } from './theme';
import { useTheme } from './../hooks';

const ColorModeContext = createContext({});



export const AppTheme = ({ children }: any) => {

  const { theme } = useTheme();

  // Update the theme only if the mode changes
  const customTheme = useMemo(() => createTheme( getDesignTokens(theme) ), [ theme ]);
  

  return (
       <ThemeProvider theme={ customTheme }>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          { children }
        </ThemeProvider>
   
  )
}
