import { SxProps } from '@mui/material'

export const inputStyle = () => {
    const style: SxProps = {
        //  width: { md: '50%', xs: '100%' },
        '& input': {
            fontSize: '1.2em'
          },
          '& fieldset': {
            borderRadius: '10px',
            borderWidth: 3
          },
          '& label.Mui-focused': {
            color: 'primary.main',
            fontSize: '1.1em'
          },
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: 'primary.main',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'primary.main',
              borderWidth: 3
            },
          },
      }

    return style;
}


