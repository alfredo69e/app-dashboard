

import { InstallMobile, LogoutOutlined, Opacity, PermIdentityOutlined, SettingsOutlined } from '@mui/icons-material';
import { Badge, Button, Avatar, Popover, Typography, Grid, Box, Divider } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Navigate, useNavigate } from 'react-router-dom';
import { startLogout, useAppDispatch } from '../../../store';
import { RouterEnum } from '../../helper';
import { ButtomProfile } from './ButtomProfile';

type props = {
    avatar: string;
    name: string;
    roles: string[];
}

export const AvatarNavBar = ({ avatar, name, roles } : props) => {

    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const naviagate = useNavigate();

    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClickAvatar = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleSelectProfile = ( link: RouterEnum ) => {
        handleClose();
        if( link === RouterEnum.logout ) {
            dispatch( startLogout() );
            return;
        }
       
        setTimeout(() => {
            naviagate( link, { relative: 'path' } );
        }, 300);
        
    }

    const divider = () => <Divider
    sx={{
        backgroundColor: 'primary.gray',
        // height: 2,
    }} />

    //animate__animated animate__bounceIn

  return (
    <>
        <Badge 
            onClick={ handleClickAvatar }
            className={ '' }
            
            overlap='circular'
            badgeContent='' 
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            sx={{
                borderRadius: 50,
                boxShadow: 5,
                cursor: 'pointer',
                "& .MuiBadge-badge": {
                    backgroundColor: '#00ff00',
                    boxShadow: 4,
                    border: 'solid 3px #ffffff'
                }
            }}
            >
            <Avatar
                alt={ `${ ( avatar.length > 0 ) ? avatar.split('/').pop() : 'avatars' }` }
                src={( avatar.length > 0 ) ? avatar : './../../assets/avatars/1.png' }
                sx={{ width: 60, height: 60, }}
            />
        </Badge>
            <Popover
            
            style={{ marginTop: 5 }}
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
             
            >
            <Grid item
                sx={{
                    width: '350px',
                }}
            >
                <Box display={'flex'} 
                     sx={{
                        p: 2,
                    }}
                >
                    <Badge 
                        overlap='circular'
                        badgeContent='' 
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        sx={{
                            borderRadius: 50,
                            "& .MuiBadge-badge": {
                                backgroundColor: '#00ff00',
                                border: 'solid 3px #ffffff'
                            }
                        }}
                        >
                        <Avatar
                            alt={ `${ ( avatar.length > 0 ) ? avatar.split('/').pop() : 'avatars' }` }
                            src={( avatar.length > 0 ) ? avatar : './../../assets/avatars/1.png' }
                            sx={{ width: 50, height: 50, }}
                        />
                    </Badge>
                    <Box display={'column'  } 
                        sx={{ ml: 2 }}
                    >
                        <Typography 
                            sx={{
                                fontWeight: 'bold',
                                fontSize: '1.2em'
                            }}
                        > { name } </Typography>
                        {
                            roles.map((role: string) => {
                                return <Typography key={ role } color={'primary.main'} 
                                sx={{ opacity: 0.5,
                                    fontWeight: 'bold',
                                    fontSize: '1em'
                                }}> <span > { role.replace('_', ' ').toLowerCase() } </span> </Typography>
                            })    
                        }

                    </Box>
                </Box>

               { divider() }
            
               <ButtomProfile onClick={ () => { handleSelectProfile( RouterEnum.profile ) } } 
               icon={
                <PermIdentityOutlined sx={{
                    fontSize: '2.2em',
                    color: 'colors.letterAvatar'
                }} />
               } title={ t('btn.profile') } />
            
               <ButtomProfile onClick={ () => { handleSelectProfile( RouterEnum.setting ) } } 
               icon={
                <SettingsOutlined sx={{
                    fontSize: '2.2em',
                    color: 'colors.letterAvatar'
                }} />
               }
               title={ t('btn.setting') } />

               { divider() }
            
               <ButtomProfile onClick={ () => { handleSelectProfile( RouterEnum.logout ) } } 
               icon={
                <LogoutOutlined sx={{
                    fontSize: '2.2em',
                    color: 'colors.letterAvatar'
                }} />
               }
               title={ t('btn.logout') } />
                
            </Grid>

            
                
            </Popover>
    </>
  )
}
