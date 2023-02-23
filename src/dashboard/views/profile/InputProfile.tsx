

import { Button, Grid, TextField, Typography } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { InputDatePicker, InputSelectMulti, InputSelectSingle, RolesEnum } from '../../../common';
import { useAuth } from './../../../hooks';
import { btnStyle, inputStyle } from './../../../styles';
import { useState } from 'react';
import moment from 'moment';
import { authState, startUpdateUser, useAppDispatch } from './../../../store';


interface inputs {
    uid:       string;
    username:  string;
    email:     string;
    name:      string;
    lastName:  string;
    avatar:    string;
    birthdate: string;
    block:     boolean;
    mobile:    string;
    roles:     string[];
    token:     string;
}


export const InputProfile = () => {

    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const { isAutenticated, ...rest } = useAuth();

    const [ user, setUser ] = useState({...rest})

    const { register, handleSubmit, formState: { errors } } = useForm<inputs>({ defaultValues: { ...rest } });   

    const onSubmit: SubmitHandler<inputs> = ( data ) => {
        //TODO: Falta hacer la comunicacion para solicitar el cambio de pass;
       
        const userUpdate : authState = {
            ...data
        };

        dispatch( startUpdateUser( userUpdate ) );

        setUser( {...data} );

        
    };

    const onChangeBlock = ( value: string ) => {
        user.block =  value.includes('true');
        setUser({ ...user });
      }
  
    const onChangeRoles = ( values: string[] ) => {
        user.roles = [...values];
        setUser({...user});
    }

    const onChangeBirthdate = ( value: string ) => {
        user.birthdate = value;
        setUser({...user});
    }

    const disabledSuper = (): boolean => {
        for (const item of rest.roles) {
            if(item.includes( RolesEnum.super_admin )) {
                return false;
            }
        }
        return true;
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)} >

        <Grid  container spacing={2} p={2} >    

            <Grid item lg={6} md={12} xs={12}>
                <TextField 
                    variant='outlined'
                    type={ 'text' }
                    fullWidth
                    placeholder={ t('input.name')! }
                    label={ <Typography sx={{ fontSize: '1.2em' }} >{ t('input.name') }</Typography> }
                    defaultValue={ rest.name }
                    sx={[
                        inputStyle
                    ]} 
                    error={!!errors.name }
                    helperText={  errors.name && <span>{ t('alert.inputRequired') }</span>  }
                    { ...register( 'name', { required: true } ) }
                />
            </Grid>

            <Grid item lg={6} md={12} xs={12}>
                <TextField 
                    variant='outlined'
                    type={ 'text' }
                    fullWidth
                    placeholder={ t('input.lastName')! }
                    label={ <Typography sx={{ fontSize: '1.2em' }} >{ t('input.lastName') }</Typography> }
                    defaultValue={ rest.lastName }
                    sx={[
                        inputStyle
                    ]} 
                    error={!!errors.lastName }
                    helperText={  errors.lastName && <span>{ t('alert.inputRequired') }</span>  }
                    { ...register( 'lastName', { required: true } ) }
                />

            </Grid>

            <Grid item lg={6} md={12} xs={12}>
                <TextField 
                    disabled
                    variant='outlined'
                    type={ 'text' }
                    fullWidth
                    placeholder={ t('input.username')! }
                    label={ <Typography sx={{ fontSize: '1.2em' }} >{ t('input.username') }</Typography> }
                    defaultValue={ rest.username }
                    sx={[
                        inputStyle
                    ]} 
                    error={!!errors.username }
                    helperText={  errors.username && <span>{ t('alert.inputRequired') }</span>  }
                    { ...register( 'username' ) }
                />
            </Grid>

            <Grid item lg={6} md={12} xs={12}>
                <TextField 
                    disabled
                    variant='outlined'
                    type={ 'email' }
                    fullWidth
                    placeholder={ t('input.email')! }
                    label={ <Typography sx={{ fontSize: '1.2em' }} >{ t('input.email') }</Typography> }
                    defaultValue={ rest.email }
                    sx={[
                        inputStyle
                    ]} 
                    error={!!errors.email }
                    helperText={  errors.email && <span>{ t('alert.inputRequired') }</span>  }
                    { ...register( 'email' ) }
                />
            </Grid>

            <Grid item lg={6} md={12} xs={12}>
                <InputSelectSingle 
                    disabled={true}
                    value={ rest.block.toString() } 
                    label={ t('input.block') } 
                    menuItem={[{title: `${t( 'btn.yes' )}`, value: 'true'}, {title: `${t( 'btn.no' )}`, value: 'false'}]}
                    onChange={ onChangeBlock }
                />

            </Grid>

                <Grid item lg={6} md={12} xs={12} >
                <InputSelectMulti 
                    disabled={ disabledSuper() }
                    value={ rest.roles } 
                    label={ t('input.roles') } 
                    menuItem={ [...Object.values( RolesEnum ).map(( item ) => {
                    return {
                        title: item,
                        value: item
                    }
                    }) ] }
                    onChange={ onChangeRoles }
                />

                </Grid>

                <Grid item lg={6} md={12} xs={12}>
                    <InputDatePicker 
                    label={ t('input.birthdate') }
                    dates={ rest.birthdate } 
                    onChange={ onChangeBirthdate }
                    />
                </Grid>

            <Grid item lg={6} md={12} xs={12}>
                <TextField 
                    variant='outlined'
                    type={ 'tel' }
                    fullWidth
                    placeholder={ t('input.mobile')! }
                    label={ <Typography sx={{ fontSize: '1.2em' }} >{ t('input.mobile') }</Typography> }
                    defaultValue={ rest.mobile }
                    sx={[
                        inputStyle
                    ]} 
                    error={!!errors.mobile }
                    helperText={  errors.mobile && <span>{ t('alert.inputRequired') }</span>  }
                    { ...register( 'mobile' ) }
                />

            </Grid>

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