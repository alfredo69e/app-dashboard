

import { Alert, Typography, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { resetErrMessage, RootState, useAppDispatch, useAppSelector } from './../../../store';

export const AlertDanger = () => {

  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { isActive, message } = useAppSelector((state: RootState) => state.errMessage );

  return (
       <Grid container 
        display={ `${ isActive ? 'block' : 'none' }` }
        p={2}
        >
        <Alert 
              className='animate__animated animate__zoomIn'
              onClose={() => dispatch( resetErrMessage() ) }
              severity="error"
              sx={{ 
                  width: '100%',
              }}
              >
              <Typography >{ message || t( 'alert.noUpdate' ) }</Typography> 
          </Alert>
        </Grid>
  

  )
}
