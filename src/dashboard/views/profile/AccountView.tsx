import { Box, FormControl, Grid, InputLabel, MenuItem, 
         Select, TextField, Typography, Button, Chip } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { btnOutLineStyle, btnStyle, inputStyle } from './../../../styles';
import { SelectChangeEvent } from '@mui/material/Select';
import { useState, useEffect } from 'react';
import { useAuth } from './../../../hooks';
import { useTranslation } from 'react-i18next';
import { ArrowDropDownCircleOutlined } from '@mui/icons-material';
import { RolesEnum } from './../../../common';

type inputs = {
    uid:       string;
    username:  string;
    email:     string;
    name:      string;
    lastName:  string;
    avatar:    string;
    birthdate: number;
    block:     boolean;
    mobile:    string;
    roles:     string[];
    token:     string;
}

export const AccountView = () => {

    const { t } = useTranslation();

    const { isAutenticated, ...rest } = useAuth();
  
    const [block, setBlock] = useState( `${rest.block}` );
    const [roles, setRoles] = useState<string[]>([...rest.roles]);

    const { register, handleSubmit, setValue, formState: { errors } } = useForm<inputs>();

    const onSubmit: SubmitHandler<inputs> = ( data ) => {
        //TODO: Falta hacer la comunicacion para solicitar el cambio de pass;
          // dispatch( startForgotPass( data.username, data.password ) );
      };
    
    
    const handleChange = ( event: SelectChangeEvent ) => {
      rest.block = event.target.value.includes( 'true' );
      setBlock( event.target.value );
    }
    

    const handleChangeRoles = ( { target: { value } }: SelectChangeEvent<typeof roles> ) => {
      setRoles( typeof value === 'string' ? value.split(',') : value );
      rest.roles = [...value];
    }
    

  return (
          <form
            onSubmit={handleSubmit(onSubmit)}
            >

            <Grid 
            
            container spacing={2} p={4} >

            <Grid
            mt={2}
            mb={4}
            item lg={12} md={12} xs={12}
            
            display={'flex'}
            justifyContent={'flex-start'}
            alignItems={ 'center' }
            
            >
              <Box
                  className='animate__animated animate__zoomIn' 
                  component={'img'} 
                  sx={{ 
                    height: 150,
                    borderRadius: 3,
                    boxShadow: 5,
                    animation: '1s slidein2',
                    cursor: 'pointer',
                    transition: '0.3s',
                    ':hover': {
                      scale: 2,
                      transform: 'translateY(-0.50em);'
                    }
                  }}
                  src={ rest.avatar ?? './../../assets/avatars/1.png'} alt={ rest.name } 
                />
                <Button 
                  sx={[
                    btnStyle(),
                    {
                      ml: 2,
                    }
                  ]}
                >
                  <Typography sx={{ fontSize: '1.2em' }} >{ t( 'btn.uploadNewPhoto' ) }</Typography> 
                </Button>

                <Button 
                  sx={[
                   
                    btnOutLineStyle( 'white', 'red', 'red'),
                    {
                      ml: 2,
                    }
                  ]}
                >
                  <Typography sx={{ fontSize: '1.2em' }} >{ t( 'btn.reset' ) }</Typography> 
                </Button>
            </Grid>

            <Grid item lg={6} md={12} xs={12}>
             <TextField 
                    variant='outlined'
                    type={ 'text' }
                    fullWidth
                    placeholder={ t('input.name')!  }
                    label={ <Typography sx={{ fontSize: '1.2em' }} >{ t( 'input.name' ) }</Typography> }
                    value={ rest.name }
                    sx={[
                      inputStyle
                    ]} 
                    error={ !!errors.name }
                    helperText={ errors.name && <span>{ t('alert.inputRequired') }</span>  }
                    { ...register( 'name', { required: true } ) }
                  />
            </Grid>

            <Grid item lg={6} md={12} xs={12}>
             <TextField 
                    variant='outlined'
                    type={ 'text' }
                    fullWidth
                    placeholder={ t('input.lastName')!  }
                    label={ <Typography sx={{ fontSize: '1.2em' }} >{ t( 'input.lastName' ) }</Typography> }
                    value={ rest.lastName }
                    sx={[
                      inputStyle
                    ]} 
                    error={ !!errors.lastName }
                    helperText={ errors.lastName && <span>{ t('alert.inputRequired') }</span>  }
                    { ...register( 'lastName', { required: true } ) }
                  />
            </Grid>


             <Grid item lg={6} md={12} xs={12}>
             <TextField 
                    variant='outlined'
                    type={ 'text' } 
                    disabled
                    fullWidth
                    placeholder={ t('input.username')!  }
                    label={ <Typography sx={{ fontSize: '1.2em' }} >{ t( 'input.username' ) }</Typography> }
                    value={ rest.username }
                    sx={[
                      inputStyle
                    ]} 
                    error={ !!errors.username }
                    helperText={ errors.username && <span>{ t('alert.inputRequired') }</span>  }
                    { ...register( 'username', { required: true } ) }
                  />
            </Grid>
                

             
            <Grid item lg={6} md={12} xs={12} >
              <TextField 
                variant='outlined'
                type={ 'email' } 
                fullWidth
                placeholder={ t('input.email')!  }
                label={ <Typography sx={{ fontSize: '1.2em' }} >{ t( 'input.email' ) }</Typography> }
                value={ rest.email }
                sx={[
                  inputStyle
                ]} 
                error={ !!errors.email }
                helperText={ errors.email && <span>{ t('alert.inputRequired') }</span>  }
                { ...register( 'email', { required: true } ) }
              />

              </Grid>

              <Grid item lg={6} md={12} xs={12} >
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{ t('input.block') }</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={ block }
                  label={ t('input.block') }
                  onChange={handleChange}
                  IconComponent={ ArrowDropDownCircleOutlined }
                  sx={[
                    inputStyle,
                    {
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'primary.main',
                        borderWidth: 3
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'primary.main',
                      },
                    },
                   
                    
                  ]}
                >
                  <MenuItem value={ 'true' } > { t('input.active') } </MenuItem>
                  <MenuItem value={ 'false'  }> { t('input.inactive') }</MenuItem>
                </Select>
              </FormControl>
              </Grid>

              <Grid item lg={6} md={12} xs={12} >
              <FormControl fullWidth>
                <InputLabel id="multiple-roles">{ t('input.roles') }</InputLabel>
                <Select
                  disabled
                  multiple
                  labelId="multiple-roles"
                  id="multiple-roles"
                  value={ roles }
                  label={ t('input.roles') }
                  onChange={ handleChangeRoles }
                  IconComponent={ ArrowDropDownCircleOutlined }
                  MenuProps={{
                    variant: 'menu' as 'menu'
                  }}
                  sx={[
                    inputStyle,
                    {
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'primary.main',
                        borderWidth: 3
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'primary.main',
                      },
                    },
                   
                    
                  ]}
                  renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                >
                  {
                    Object.values( RolesEnum ).map(( item ) => {
                      return <MenuItem  key={ item } value={ item } > { `${item.replace('_', ' ').toLowerCase().substring(0,1).toUpperCase()}${item.replace('_', ' ').toLowerCase().substring(1, item.replace('_', ' ').length )}` } </MenuItem>
                    })
                  }
                </Select>
              </FormControl>

              </Grid>
              </Grid>
              </form>
  )
}
