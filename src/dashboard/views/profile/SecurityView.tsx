import { Box, Button, Grid, IconButton, InputAdornment, TextField, Typography, Divider } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { btnStyle, inputStyle } from './../../../styles';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { startChangePass, startErrMsg, useAppDispatch } from './../../../store';
import { AlertDanger, AlertSuccess } from './../../components';

interface inputs {
  oldPass: string;
  newPass: string;
  repPass: string;
}

const viewsPass = {
  oldPass: false,
  newPass: false,
  repPass: false,
}

export const SecurityView = () => {

  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const { register, handleSubmit, setValue, formState: { errors } } = useForm<inputs>(); 

  const [passBlock, setPassBlock] = useState(viewsPass);

 

  const handleClickShowPassword = ( value: number ) => {
    switch ( value ) {
      case 1:
        return setPassBlock(({ newPass, ...rest}) => ({
          newPass: newPass = !newPass,
          ...rest
        }));
      case 2:
        
      return setPassBlock(({ repPass, ...rest}) => ({
        repPass: repPass = !repPass,
        ...rest
        }));
    
      default:
        return setPassBlock(({ oldPass, ...rest}) => ({
          oldPass: oldPass = !oldPass,
          ...rest
        }));
    }
  };
  
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const onSubmit: SubmitHandler<inputs> = ( data ) => {
    const { oldPass, newPass, repPass } = data;

    if ( newPass !== repPass  ) {
      dispatch( startErrMsg({ name: '', status: 0, message: `${t('alert.passwordNotSame')}` } ) );
      return;
    }
    dispatch( startChangePass( oldPass, newPass ) );
    setValue('oldPass', '');
    setValue('newPass', '');
    setValue('repPass', '');

  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} >

    <Grid container pb={4}>    

      <Grid container mt={4} spacing={2} pl={2} pr={2} > 

       <Grid item lg={ 6 } md={6} xs={ 12 }>

    
        <TextField 
                type={ passBlock.oldPass ? 'text' : 'password' }
                fullWidth 
                size='medium'
                placeholder={ t('input.oldPass')!  }
                label={  <Typography sx={{ fontSize: '1.2em' }} >{ t( 'input.oldPass' ) }</Typography> }
                sx={[
                  {
                    mb: 2
                  },
                  inputStyle
                ]} 
                error={ !!errors.oldPass }
                helperText={ errors.oldPass && <span>{ t('alert.inputRequired') }</span>  }
                { ...register( 'oldPass', { required: true } ) }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => handleClickShowPassword( 0 )}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        { passBlock.oldPass ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              
                />
       
          <TextField 
                type={ passBlock.newPass ? 'text' : 'password' }
                fullWidth 
                size='medium'
                placeholder={ t('input.newPass')!  }
                label={  <Typography sx={{ fontSize: '1.2em' }} >{ t( 'input.newPass' ) }</Typography> }
                sx={[
                  {
                    mb: 2
                  },
                  inputStyle
                ]} 
                error={ !!errors.newPass }
                helperText={ errors.newPass && <span>{ t('alert.inputRequired') }</span>  }
                { ...register( 'newPass', { required: true } ) }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => handleClickShowPassword( 1 )}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        { passBlock.newPass ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              
                />

        <TextField 
                type={ passBlock.repPass ? 'text' : 'password' }
                fullWidth 
                size='medium'
                placeholder={ t('input.repPass')!  }
                label={  <Typography sx={{ fontSize: '1.2em' }} >{ t( 'input.repPass' ) }</Typography> }
                sx={[
                  {
                    mb: 2
                  },
                  inputStyle
                ]} 
                error={ !!errors.repPass }
                helperText={ errors.repPass && <span>{ t('alert.inputRequired') }</span>  }
                { ...register( 'repPass', { required: true } ) }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => handleClickShowPassword( 2 )}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        { passBlock.repPass ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              
                />
 

       </Grid>

       <Grid container
            justifyContent="center"
            alignItems="center"
            lg={6} md={6} xs={12}
            >
          
        <Box
          className='animate__animated animate__fadeInRight'
          component={'img'} 
          width={ 183 }
          height={ 256 }
          src={'./../../assets/pages/pose-m-1.png'}
          alt={ 'password' }
          loading={'lazy'}
        />
       </Grid>

       </Grid>

      

       <Divider sx={{
        height: 2,
        width: '100%',
       }} />

        <AlertDanger />

        <AlertSuccess />

        <Button 
              type='submit'
              sx={[
                btnStyle(),
                {
                  m: 2,
                  width: {
                    md: 'auto',
                    xs: '100%',
                  }
                }
              ]}
            >
              <Typography sx={{ fontSize: '1.2em' }} >{ t( 'btn.update' ) }</Typography> 
        </Button>
    </Grid>

</form>
  )
}
