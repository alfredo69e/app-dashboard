import { Box, Button, Grid, IconButton, InputAdornment, TextField, Typography, Divider } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { btnStyle, inputStyle } from './../../../styles';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Visibility, VisibilityOff } from '@mui/icons-material';

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

  const { register, handleSubmit, formState: { errors } } = useForm<inputs>(); 

  const [passBlock, setPassBlock] = useState(viewsPass);

  const onSubmit: SubmitHandler<inputs> = ( data ) => {
    
  };

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

  return (
    <form onSubmit={handleSubmit(onSubmit)} >

    <Grid  container mt={4} mb={4} spacing={2} p={2} >    

       <Grid item lg={ 6 } md={6} xs={ 12 }>

       <Grid item >
        <TextField 
                type={ passBlock.oldPass ? 'text' : 'password' }
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
        </Grid>

        <Grid item>
          <TextField 
                type={ passBlock.newPass ? 'text' : 'password' }
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

        </Grid>

        <Grid item >
        <TextField 
                type={ passBlock.repPass ? 'text' : 'password' }
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

       </Grid>

       <Grid container
            justifyContent="center"
            alignItems="center"
            lg={ 6 } md={6} xs={ 12 }>
          
        <Box
          component={'img'} 
          width={ 183 }
          height={ 256 }
          src={'./../../assets/pages/pose-m-1.png'}
          alt={ 'password' }
          loading={'lazy'}
        />
       </Grid>

       <Divider />
        <Button 
              type='submit'
              sx={[
                btnStyle(),
                {
                  mt: 4,
                  ml: 2,
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
