

import { PermIdentityOutlined, VerifiedUser } from '@mui/icons-material'
import { Button, Grid, SvgIconTypeMap, Typography } from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent';
import React, { ReactElement } from 'react'

type props = {
    onClick: () =>  void,
    title: string;
    icon: ReactElement
}

export const ButtomProfile = ({ onClick, title, icon }: props) => {
  return (
        <Button 
        fullWidth
        onClick={ onClick } 
        sx={{
            p: 2,
            textAlign: 'left',
            display: 'flex',
            justifyContent: 'flex-start',
            textTransform: 'none'
        }}
        >
            { icon }
            <Typography color={'colors.letterAvatar'} fontSize={ '1.5em' } marginLeft={ 1 } > { title } </Typography>
        </Button>
  )
}
