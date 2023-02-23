
import { Alert, Typography, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { resetMessage, RootState, useAppDispatch, useAppSelector } from './../../../store';


export const AlertSuccess = () => {

    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const { isMessage, message } = useAppSelector((state: RootState) => state.message );
  return (
      <Grid container 
          display={ `${ isMessage ? 'block' : 'none' }` }
          pt={2}
        >
        <Alert 
            className='animate__animated animate__zoomIn'
            onClose={() => dispatch( resetMessage() ) }
            severity="success"
            sx={{ 
              width: '100%',
            }}
            >
            <Typography >{ message || t( 'alert.updateSuccess' ) }</Typography> 
        </Alert>
      </Grid>
    
  )
}
