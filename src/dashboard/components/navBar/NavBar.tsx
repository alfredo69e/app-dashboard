

import { DarkModeOutlined, LightModeOutlined, MenuOutlined } from '@mui/icons-material';
import { AppBar, Grid, IconButton, Toolbar } from '@mui/material';
import { useAuth, useTheme } from './../../../hooks';
import { PaletteTypeEnum, useAppDispatch, startThemeLoad } from './../../../store';
import { AvatarNavBar } from './AvatarNavBar';
import { useState, useEffect } from 'react';
import { upperCaseFirstLetter } from './../../../helper';

interface props {
    drawerWidth: number;
    onOpenDrawer: () => void;
}

export const NavBar = ({ onOpenDrawer, drawerWidth }: props ) => {

    const { theme } = useTheme();

    const dispatch = useAppDispatch();

    const [animation, setAnimation] = useState(true);

    useEffect(() => {
        console.log( 'useEffect' );
        
      setTimeout(() => {
        setAnimation( false );
      }, 200);
    }, []);
    

    const { avatar, name, lastName, roles } = useAuth();

    const fullName = `${upperCaseFirstLetter( name )} ${upperCaseFirstLetter( lastName )}`;

    const handleChangeTheme = () => {
        dispatch( startThemeLoad( theme.includes( PaletteTypeEnum.dark ) ? PaletteTypeEnum.light : PaletteTypeEnum.dark ) );
    };

  return (
    <AppBar 
        position='fixed'
        elevation={0}
        sx={{ 
            width: { lg: `calc(100% - ${ drawerWidth }px)`, md: `100%` , sm: `100%` },
            mr: { lg: 18, md: 0, sm: 0 },
            zIndex: 1
        }}>
        <Toolbar
            sx={{
                backgroundColor: 'background.default',
                p: 2,
            }}
            >
           <IconButton
                size="large"
                onClick={ onOpenDrawer }
                edge='start'
                sx={{ 
                    color: 'primary.main',
                    fontSize: '2em',
                    mr: 2, display: { lg: 'none', md: 'block', sm: 'block' } }}
            >
                <MenuOutlined />
            </IconButton>

            <Grid container display={'flex'} justifyContent='right' alignItems='center'> 

                <IconButton
                    onClick={ handleChangeTheme }
                    size={'large'}
                    sx={{
                        width: '60px',
                        height: '60px',
                        mr: 2,
                    }}
                >
                    {
                        ( theme.includes( PaletteTypeEnum.dark )  )
                        ? <LightModeOutlined fontSize='large' className={ animation ? 'animate__animated animate__rubberBand' : ''} />
                        : <DarkModeOutlined fontSize='large' className={ animation ? 'animate__animated animate__jello' : ''}/>
                    }
                   
                </IconButton>
                    
                <AvatarNavBar avatar={ avatar } name={ fullName } roles={ roles } />
               
            </Grid>
        </Toolbar>
    </AppBar>
  )
}
