import { Box } from '@mui/material';
import { Fragment } from 'react';
import { PaletteTypeEnum } from '../../../store';
import { useTheme } from './../../../hooks';



export const FooterComponent = () => {

    const { theme } = useTheme();

    return(
        <>
       <Fragment>
        <Box 
          className='animate__animated animate__fadeInUp'
          component={'img'} 
          position={'absolute'} 
          sx={{  zIndex: -1, bottom: 0, left: 0, width: '100%', display: { md: 'inline', sm: 'none', xs: 'none'  } }}
          src={( theme === PaletteTypeEnum.light ) ? './../../assets/pages/auth-v1-mask-light.png' : './../../assets/pages/auth-v1-mask-dark.png' } />
        <Box 
          className='animate__animated animate__fadeInUp'
          position={'absolute'} 
          component={'img'} 
          sx={{ zIndex: 0, bottom: 10, left: 20, display: { lg: 'block',  md: 'none', sm: 'none', xs: 'none' }, height: 230 }}
          src={'./../../assets/pages/auth-v1-tree.png'} alt="tree" 
          />

         <Box 
          className='animate__animated animate__fadeInUp'
          position={'absolute'} 
          component={'img'} 
          sx={{ zIndex: 0, bottom: 10, right: 40, display: { lg: 'block', md: 'none', sm: 'none', xs: 'none' }, height: 280 }}
          src={'./../../assets/pages/auth-v1-tree-2.png'} alt="tree" 
          />
      </Fragment>
        </>
    )
}