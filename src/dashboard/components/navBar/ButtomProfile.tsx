

import { PermIdentityOutlined, VerifiedUser } from '@mui/icons-material'
import { Box, Button, Grid, SvgIconTypeMap, Typography } from '@mui/material'
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
            display: 'flex',
            justifyContent: 'flex-start',
            textTransform: 'none',
            height: 60
        }}
        >   
            <Box 
                sx={{
                display: 'flex',
                alignItems: 'center',
                transition: '0.5s',
                width: '100%',
                height: 60,
                '&:hover': {
                    transform: 'translate3d(10%, 0, 0px);'
                }
            }}>
                { icon }
                <Typography color={'colors.letterAvatar'} fontSize={ '1.5em' } marginLeft={ 1 } > { title } </Typography>
            </Box>
            
        </Button>
  )
}
