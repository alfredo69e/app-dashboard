

import { DarkModeOutlined, LightModeOutlined, MenuOutlined } from '@mui/icons-material';
import { AppBar, Grid, IconButton, Toolbar } from '@mui/material';
import { useAuth, useTheme } from './../../../hooks';
import { PaletteTypeEnum, RootState, useAppDispatch, useAppSelector, startThemeLoad } from './../../../store';
import { AvatarNavBar } from './AvatarNavBar';

interface props {
    drawerWidth: number;
    onOpenDrawer: () => void;
}

export const NavBar = ({ onOpenDrawer, drawerWidth }: props ) => {

    const { theme } = useTheme();

    const dispatch = useAppDispatch();

    const { avatar, name, lastName, roles } = useAuth();

    const fullName = `${name.substring(0,1).toLocaleUpperCase()}${name.substring(1,name.length)} ${lastName.substring(0,1).toLocaleUpperCase()}${lastName.substring(1,lastName.length)}`;

    const handleChangeTheme = () => dispatch( startThemeLoad( theme === PaletteTypeEnum.dark ? PaletteTypeEnum.light : PaletteTypeEnum.dark ) );

  return (
    <AppBar 
        position='fixed'
        elevation={0}
        sx={{ 
            width: { lg: `calc(100% - ${ drawerWidth }px)`, md: `100%` , sm: `100%` },
            mr: { lg: 18, md: 0, sm: 0 },
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
                        ( theme === PaletteTypeEnum.dark )
                        ? <LightModeOutlined fontSize='inherit' />
                        : <DarkModeOutlined fontSize='inherit' />
                    }
                   
                </IconButton>
                    
                <AvatarNavBar avatar={ avatar } name={ fullName } roles={ roles } />
               
            </Grid>
        </Toolbar>
    </AppBar>
  )
}
