
import { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { ArrowDropDownCircleOutlined } from '@mui/icons-material';
import { inputStyle } from './../../styles';


interface menuItemsInterface {
    value: string;
    title: string;
}

type props = {
    value?: string;
    label: string;
    disabled?: boolean;
    menuItem?: menuItemsInterface[];
    onChange: ( value: string ) => void
}

export const InputSelectSingle = ({ value = '', label, onChange, disabled = false, menuItem = [] }: props) => {

    const [input, setInput] = useState<string>( value );

    const handleChange = ( event: SelectChangeEvent ) => {
        setInput( event.target.value );
        onChange( event.target.value );
    }


  return (
        <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{ label }</InputLabel>
                <Select
                  disabled={ disabled }
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={ input }
                  label={ label }
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
                 {
                  menuItem.map(({ title, value }) => {
                    return <MenuItem key={ value } value={ value }> { title } </MenuItem>
                  }) 
                }
                </Select>
        </FormControl>
  )
}
