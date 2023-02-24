

import { Box, Typography, Grid, Button, Divider } from '@mui/material';
import { SvgIconProps } from '@mui/material';

type props = {
    title: string;
    active: boolean;
    icon: SvgIconProps,
    onClik: () => void;
}

export const HeaderCard = ({ title, active, icon, onClik } : props ) => {

  return (
    
    <Button
      onClick={ onClik }
        sx={( active  ) ? {
          width: '18vw',
          height: '60px',
          color: 'primary.main',
          borderRadius: 0,
          cursor: 'pointer',
          borderStyle: 'solid',
          borderBottomWidth: '4px', 
          borderBottomColor: 'primary.main'
        } 
        : {
          width: '18vw',
          height: '60px',
          color: 'drawer.colorText',
          borderRadius: 0,
          cursor: 'pointer',
          borderStyle: 'solid',
          borderBottomColor: 'primary.main',
          transition: '0.1s all',
          '&:hover': {
            borderBottomWidth: '4px',
          }
        }} >
          <>
          { icon }
          <Typography sx={
            ( active ) 
            ? {
              fontSize: '1.2em',
              fontWeight: 'bold',
              ml: 1,
              display: { md: 'block', xs: 'none' }
            }
            : {

              fontSize: '1.2em',
              ml: 1,
              display: { md: 'block', xs: 'none' }

            }} > { title } 
            </Typography>
            </>
         
    </Button>
    
  )
}
