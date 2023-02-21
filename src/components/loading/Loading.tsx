import { Box, Grid } from "@mui/material"



export const Loading = () => {

    return (
        <Grid 
        // className='animate__animated animate__zoomIn animate__faster' 
            position={'absolute'}
            sx={{
                zIndex: 100,
                width: '100%',
                height: '100%',
                backgroundColor: '#000000',
                opacity: 0.6
          }} >

        <Box
          position={'absolute'}
          className='animate__animated animate__zoomIn animate__faster' 
          component={'img'}
          sx={{ height: 150, top: 'calc(50% - 100px)', left: 'calc(50% - 80px)' }}
          src={'./../../assets/gif/loading.gif'} alt="The house from the offer." 
        />

        </Grid>
    )
    
}