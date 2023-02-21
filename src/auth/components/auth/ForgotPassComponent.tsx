import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { RootState, useAppDispatch, useAppSelector } from './../../../store';
import { btnStyle, inputStyle } from './../../../styles';


type props = {
    changeCard: () => void
  }

  type Inputs = {
    email: string,
  };

export const ForgotPassComponent = ( { changeCard }: props ) => {

    const { t } = useTranslation();

    const { isMessage } = useAppSelector((state: RootState) => state.message );

    const { register, handleSubmit, setValue, formState: { errors } } = useForm<Inputs>();

    const dispatch = useAppDispatch();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
      //TODO: Falta hacer la comunicacion para solicitar el cambio de pass;
        // dispatch( startForgotPass( data.username, data.password ) );
    };


    return (
        <>
            <Typography variant='h4'  >{ t( 'login.forgotPassword' ) } 👻</Typography>
            <Typography 
            color={'colors.letterLight'}
            sx={{
              opacity: 0.6,
              fontSize: '1em',
              mt: 1,
            }} 
            >{ t( 'login.adventure' ) }</Typography>


          <form
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextField 
                variant='outlined'
                type={ 'email' } 
                fullWidth
                placeholder={ t('input.email')!  }
                label={ <Typography sx={{ fontSize: '1.2em' }} >{ t( 'input.email' ) }</Typography> }
                
                sx={[
                  {
                    mb: 2, mt: 2
                  },
                  inputStyle
                ]} 
                error={ !!errors.email }
                helperText={ errors.email && <span>{ t('alert.inputRequired') }</span>  }
                { ...register( 'email', { required: true } ) }
              />

            <Button
              type='submit'  
              fullWidth 
              variant="contained"
              sx={[
                {
                  mt: isMessage ? 2 : 4
                },
                btnStyle
              ]}
            >
               <Typography variant='h5'  >{ t( 'btn.login' ) }</Typography> 
            </Button>

          </form>

            <Box
              display={'flex'}
              justifyContent={'flex-end'}
              
              // alignItems={'center'}
              sx={{ mt: 4 }}
            >
              <Button
                  onClick={ changeCard }
                  sx={{ 
                    textTransform: 'none',
                   
                  }}
                >
              <Typography color={'primary.main'} fontSize={'1.2em'} >{ t( 'btn.back' ) }</Typography> 
              </Button>
            </Box>


        </>
    );
}