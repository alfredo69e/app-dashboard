

import { ArrowDropDownCircleOutlined } from '@mui/icons-material';
import { Box, Chip, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import { inputStyle } from '../../styles';

interface menuItemsInterface {
    value: string;
    title: string;
}

type props = {
    value?: string[];
    label: string;
    disabled?: boolean;
    menuItem?: menuItemsInterface[];
    onChange: ( value: string[] ) => void
}

export const InputSelectMulti = ({ value = [], label, onChange, disabled = false, menuItem = [] }: props) => {


    const [inputs, setInputs] = useState<string[]>([...value]);


    const handleChangeRoles = ( { target: { value } }: SelectChangeEvent<typeof inputs> ) => {
        setInputs( typeof value === 'string' ? value.split(',') : value );
        onChange( [...value] );
      }

  return (
        <FormControl fullWidth>
                <InputLabel id="multiple-roles">{ label }</InputLabel>
                <Select
                  disabled={ disabled }
                  multiple
                  labelId="multiple-roles"
                  id="multiple-roles"
                  value={ inputs }
                  label={ label }
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
                    menuItem.map(({ title, value }) => {
                        return <MenuItem key={ value } value={ value }> { title } </MenuItem>
                    }) 
                    }
                </Select>
        </FormControl>
  )
}
