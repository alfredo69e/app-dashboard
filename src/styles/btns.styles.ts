import { SxProps } from '@mui/material'

export const btnStyle = ( backgroundColor: string = 'btn.primary', color: string = 'white' ) => {
    const style: SxProps = {
        backgroundColor, 
        color, 
        height: 55,
        fontSize: 16,
        fontWeight: 'Bold',
        transition: '0.3s',
        borderRadius: 3,
        p: 3,
        '&:hover': {
          boxShadow: 6,
          backgroundColor, 
          opacity: 0.9,
          color,
          transform: 'translateY(-0.50em);'
        },
        // ':focus': {
        // transform: 'translateY(0em);'
        // }
      }

    return style;
}

export const btnOutLineStyle = ( backgroundColor: string = 'btn.primary', color : string = 'white', borderColor: string = 'transparent') => {
  const style: SxProps = {
      backgroundColor, 
      color, 
      height: 55,
      fontSize: 16,
      borderStyle: 'solid',
      borderRadius: 3,
      borderColor,
      borderWidth: 1, 
      fontWeight: 'Bold',
      transition: '0.3s',
      p: 3,
      '&:hover': {
        boxShadow: 6,
        backgroundColor, 
        opacity: 0.9,
        color,
        transform: 'translateY(-0.50em);'
      },
      // ':focus': {
      // transform: 'translateY(0em);'
      // }
    }

  return style;
}

export const btnDrawerIsActive = () => {
  const style: SxProps = {
      color: 'drawer.colorText',
      backgroundImage: 'linear-gradient(98deg, #C6A7FE, #9155FD 94%)',
      p: 2,
      pl: 5,
      mr: 2,
      mt: 4,
      borderRadius: '0px 50px 50px 0px',
      cursor: 'pointer',
      boxShadow: 5,
  }

return style;
}
export const btnDrawerIsNotActive = () => {
  const style: SxProps = {
    color: 'drawer.colorText',
    p: 2,
    pl: 5,
    mr: 2,
    mt: 2,
    cursor: 'pointer',
  }

return style;
}