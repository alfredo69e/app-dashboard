import { Alert, Box, Button, Checkbox, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { btnStyle, inputStyle } from './../../../styles';
import { localStorageEnum, localStorageRemoveRemember, localStorageSetRemember } from './../../../helper';
import { RootState, startLogin, useAppDispatch, useAppSelector } from './../../../store';
import { Visibility, VisibilityOff } from '@mui/icons-material';

type Inputs = {
    username: string,
    password: string,
  };
  
  interface remenber {
    usuario: string;
    remember: boolean
  }
  
  let rememberInput: remenber = {
    usuario: '',
    remember: false
  }

  type props = {
    changeCard: () => void
  }

export const LoginComponent = ( { changeCard }: props ) => {

    const { t } = useTranslation();
   
    const { isActive } = useAppSelector((state: RootState) => state.errMessage );

    const dispatch = useAppDispatch();
  
    const [remember, setLocalRemember] = useState(false);
  
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<Inputs>();
  
    useEffect(() => {
      const { usuario, remember } = localStorage.getItem(localStorageEnum.remember) !== null ? JSON.parse( localStorage.getItem(localStorageEnum.remember)! ) : rememberInput;
      setValue('username', usuario);
      setLocalRemember( remember );
  
    }, []);
  
    const handleClickRemember = () => setLocalRemember((remember) => !remember);
  
    const [showPassword, setShowPassword] = useState(false);
  
    const onSubmit: SubmitHandler<Inputs> = (data) => {
      
  
      if( remember )  {
        rememberInput.remember = remember;
        rememberInput.usuario = data.username;
  
        localStorageSetRemember( JSON.stringify(rememberInput) );
      } else {
        localStorageRemoveRemember();
      }
  
      dispatch( startLogin( data.username, data.password ) );
    };
    
    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };

    return(
        <>
        
        
          <Typography variant='h3'  >{ t( 'login.welcome' ) } 👨🏻‍💻</Typography>
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
                type={ 'text' } 
                fullWidth 
                size='medium'
                placeholder={ t('input.username')!  }
                label={ <Typography sx={{ fontSize: '1.2em' }} >{ t( 'input.username' ) }</Typography> }
                
                sx={[
                  {
                    mb: 2, mt: 2
                  },
                  inputStyle
                ]} 
                error={ !!errors.username }
                helperText={ errors.username && <span>{ t('alert.inputRequired') }</span>  }
                { ...register( 'username', { required: true } ) }
                />

           
           
              <TextField 
                type={ showPassword ? 'text' : 'password' }
                fullWidth 
                size='medium'
                placeholder={ t('input.password')!  }
                label={  <Typography sx={{ fontSize: '1.2em' }} >{ t( 'input.password' ) }</Typography> }
                sx={[
                  {
                    mb: 2
                  },
                  inputStyle
                ]} 
                error={ !!errors.password }
                helperText={ errors.password && <span>{ t('alert.inputRequired') }</span>  }
                { ...register( 'password', { required: true } ) }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        { showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              
                />

            <Box 
              display={'flex'} 
              flexDirection={'row'} 
              alignItems={'center'} 
              sx={{ mb: 2 }}
            >
              
              <Checkbox
                checked={ remember }
                onClick={ handleClickRemember }
                sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}
              />

                
                <Typography onClick={handleClickRemember} color={'colors.letterLight'} sx={{ cursor: 'pointer',  fontSize: '1em', width: '100%', opacity: 0.6 }}  >{ t( 'login.remember' ) }</Typography> 
                
              
              <Button
                onClick={ changeCard }
                sx={{ 
                  width: '100%',
                  color: 'primary.main',
                  textTransform: 'none',
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              >
              <Typography textAlign={'right'} fontSize={'1em'} >{ t( 'login.forgotPassword' ) }</Typography> 
              </Button>
              
            </Box>

           {

            ( isActive &&  <Alert severity="error"
                    sx={{ mb: 2 }}
                  >
                    <Typography >{ t( 'alert.userOrPass' ) }</Typography> 
                  </Alert>
           )

           }
           
            <Button
              type='submit'  
              fullWidth 
              variant="contained"
              sx={[
                {
                  mt: isActive ? 2 : 4
                },
                btnStyle()
              ]}
            >
               <Typography variant='h5'  >{ t( 'btn.login' ) }</Typography> 
            </Button>

          </form>
        </>
    );

}