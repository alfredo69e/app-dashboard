import { SxProps } from '@mui/material'

export const cardStyle = () => {
    const style: SxProps = {
        boxShadow: 3,  
        borderRadius: 2,
        backgroundColor: 'colors.cards',
        width: '100%',
        height: 'auto',
      }

    return style;
}