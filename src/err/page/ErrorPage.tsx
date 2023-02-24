
import styled from '@emotion/styled';
import { Box, Typography, Grid } from '@mui/material';
import { useTheme} from '@mui/material/styles';
import { BoxProps } from '@mui/system';
import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import './../style/errScss.scss';


export const ErrorPage = () => {

    const { t } = useTranslation();
    

  return (
    <Grid 
      container 
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ 
        height: '100vh'
      }}
      >

      <Box sx={{ zIndex: 1, p: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }} >
        <Typography className='animate__animated animate__zoomIn ' variant='h1' sx={{ mb: 1 }}> 404 </Typography>
        <Typography className='animate__animated animate__zoomIn ' variant='h3' sx={{ mb: 2, fontSize: '1.5rem !important' }}>
          { t('err.pageNotFound') }
        </Typography>
        <Typography className='animate__animated animate__zoomIn ' color={'text.secondary'} variant='h6' sx={{ mb: 5 }}> { t('err.pageErr') } </Typography>
        <Box
          className='animate__animated animate__zoomIn' 
          component={'img'} 
          sx={{ height: { sm: 450, md: 600, lg: 700,   } }}
          src={'./../../assets/pages/404.png'} alt="The house from the offer." 
        />
      </Box>

      <Fragment>
        <Box 
          className='animate__animated animate__fadeInUp'
          component={'img'} 
          position={'absolute'} 
          sx={{  zIndex: -1, bottom: 0, left: 0, display: { md: 'inline', sm: 'none' } }}
          src={'./../../assets/pages/misc-mask-light.png' } />
        <Box 
          className='animate__animated animate__fadeInUp'
          position={'absolute'} 
          component={'img'} 
          sx={{ zIndex: 0, bottom: 40, left: 40, display: { md: 'block', sm: 'none' }, height: 280 }}
          src={'./../../assets/pages/tree.png'} alt="tree" 
          />
      </Fragment>

    </Grid>
  )
}
