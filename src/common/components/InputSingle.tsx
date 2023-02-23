

import { TextField, Typography } from '@mui/material';
import React, { ChangeEvent } from 'react'
import { FieldErrors, SubmitHandler, useForm, UseFormRegister } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { inputStyle } from '../../styles';

  
type props = {
    value: string;
    label: string;
    type?: string;
    pattern?: string;
    input: string;
    required?: boolean;
    disabled?: boolean;
    err?: FieldErrors<any>
    register: UseFormRegister<any>;
    onChange: ( value: string ) => void;
}



export const InputSingle = ({ register, input, err, value, type = 'text', label, disabled = false, required = true, onChange, pattern = ''}: props) => {

    const { t } = useTranslation();

    const handleChange = ( { target: { value } }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
        onChange( value )
    }

  return (
            <TextField 
                disabled={ disabled }
                variant='outlined'
                inputProps={{ pattern }}
                type={ type }
                fullWidth
                placeholder={ label  }
                label={ <Typography sx={{ fontSize: '1.2em' }} >{ label }</Typography> }
                defaultValue={ value }
                sx={[
                    inputStyle
                ]} 
                onChange={(event) => {
                    register( input, { required } ),
                    handleChange( event )
                }}
                error={!!err?.value }
                helperText={  err?.value && <span>{ t('alert.inputRequired') }</span>  }
            />
  )
}
