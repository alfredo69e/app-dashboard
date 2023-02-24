

import { Box, Grid, Typography } from '@mui/material';

type props = {
    title: string;
}

export const SideBarDivider = ({ title }: props) => {
  return (
    <Grid container
        height={40}
        position={'relative'}
        alignContent={'center'}
        mt={2}
        // alignItems={'center'}
        >
        <Grid
            sx={{
            position:'absolute',
            zIndex: 0, 
            height: '1px',
            width: '95%',
            backgroundColor: 'drawer.colorText',
            top: '50%',
            opacity: 0.5,
        }}/>
        <Typography variant="h6" sx={{
            ml: 3,
            zIndex: 1,
            backgroundColor: 'background.default',
            color: 'drawer.colorText',
            pl: 1,
            pr: 1,
            // opacity: 0.5,
        }} >{ title }</Typography>
        
    </Grid>
    
  )
}
