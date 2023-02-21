

import { Box, Typography, Grid } from '@mui/material';
import { SvgIconProps } from '@mui/material';

type props = {
    title: string;
    active: boolean;
    icon: SvgIconProps,
    onClik: () => void;
}

export const HeaderCard = ({ title, active, icon, onClik } : props ) => {

  return (
    
    <Grid
      onClick={ onClik }
      container
      direction="row"
      justifyContent="center"
       alignItems="center"
        
        sx={( active  ) ? {
          width: '18rem',
          height: '60px',
          color: 'primary.main',
          borderStyle: 'solid',
          borderWidth: '0px 0px 4px 0px', 
          borderColor: 'primary.main',
          cursor: 'pointer',
          animation: ' fadeIn 0.5s 1'
        } 
        : {
          width: '18rem',
          height: '60px',
          color: 'drawer.colorText',
          cursor: 'pointer',
          '&:hover': {
            color: 'primary.main',
            borderStyle: 'solid',
            borderWidth: '0px 0px 4px 0px', 
            borderColor: 'primary.main',
          },
        }} >
          <>
          { icon }
          <Typography sx={
            ( active ) 
            ? {
              fontSize: '1.2em',
              fontWeight: 'bold',
              ml: 1,
            }
            : {

              fontSize: '1.2em',
              ml: 1,

            }} > { title } 
            </Typography>
             </>
         
    </Grid>
    
  )
}
