import { TextField } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';
import { inputStyle } from './../../styles';

type props = {
    dates?: number | string;
    label: string;
    disableFuture?: boolean;
    disablePast?: boolean;
    disabled?: boolean;
    onChange: ( value: string ) => void
}

export const InputDatePicker = ({ dates, label, onChange, disableFuture = false, disablePast = false, disabled = false }: props) => {

    // console.log( 'dates ',  );
    

    const [date, setDate] = useState<Dayjs | null>(dayjs(dates));

    const handleChange = ( value: Dayjs | null ) => {
        setDate(value);
        onChange(dayjs(value).format('MM/DD/YYYY') );
    };

   
    

  return (
        <DesktopDatePicker
            disableFuture={ disableFuture }
            disablePast={ disablePast }
            disabled={ disabled }
            label={ label }
            inputFormat="MM/DD/YYYY"
            value={ date }
            onChange={handleChange}
            renderInput={(params) => <TextField fullWidth sx={[ inputStyle ]} {...params} />}
        />
  )
}
