import { AppRegistration, HouseOutlined } from '@mui/icons-material';
import { Box, Grid, SwipeableDrawer, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link, NavLink } from 'react-router-dom';
import { PaletteTypeEnum, RootState, useAppSelector } from '../../../store';
import { useAuth } from '../../../hooks';
import { RouterEnum } from '../../helper';

interface props {
  drawerWidth: number;
  onOpenSideBar: boolean;
  onClickSideBar: ( value: boolean ) => void
}



export const SideBar = ({onClickSideBar, onOpenSideBar, drawerWidth = 250 }: props) => {

  const { theme: mode } = useAppSelector((state: RootState) => state.theme );

  const { t } = useTranslation();

  const toggleDrawer = (  open: boolean ) => {
    onClickSideBar( open );
  };

  const { name, lastName } = useAuth();

  const theme = useTheme();
  const upMd = useMediaQuery(theme.breakpoints.up('lg'));
  
  const isActiveDrawer = ( isActive : boolean ) => {

    if ( isActive ) {
      if( mode === PaletteTypeEnum.light ) {
        return `btnDrawerIsActiveLight`;
      }
      return 'btnDrawerIsActiveDark'
    } 

    if( mode === PaletteTypeEnum.light ) {
      return 'animate__animated animate__fadeIn btnDrawerIsNotActiveLight'
    }

    return 'animate__animated animate__fadeIn btnDrawerIsNotActiveDark'
  }
  
  

  return (
    <Box 
        component='nav' 
        sx={{ zIndex: 1, width: { lg: drawerWidth, md: `calc(100% - ${drawerWidth})px`, sm: `calc(100% - ${drawerWidth})px` }, flexShrink: { md: 0, sm: 0 } }}
        >
        <SwipeableDrawer
        hysteresis={ 0 }
        PaperProps={{
              sx: {
                backgroundColor: 'background.default'
              },
              elevation: 0,
            }}
          variant={ upMd ? 'permanent' : 'temporary' }
          open={ onOpenSideBar }
          onOpen={ () => toggleDrawer( true ) }
          onClose={ () => toggleDrawer( false ) }
          anchor={'left'}
          sx={{
              display: { lg: 'block' },
              // border: 'none',
              '& .MuiDrawer-paper': { 
                  width: drawerWidth,
                  border: 'none', 
              }
          }}
        >

            <Toolbar>
              <Link
                style={{ textDecoration: 'none', }}
                to={'/'}
              >
                <Typography noWrap
                  color={'drawer.colorText'}
                  fontWeight={'bold'}
                  sx={{
                    fontSize: '1.5em',
                  }}
                >
                  👨🏻‍💻 { `${name.substring(0,1).toLocaleUpperCase()}${name.substring(1,name.length)} ${lastName.substring(0,1).toLocaleUpperCase()}${lastName.substring(1,lastName.length)}` }
                </Typography>
                </Link>

            </Toolbar>

            <Grid item
            >

              <NavLink
                
                onClick={( event ) => {
                  toggleDrawer( false );
                }  }
                className={ ({ isActive }) => isActiveDrawer( isActive ) }
                to={'/'}
                > {
                  
                }
                  <HouseOutlined className='icon' />
                    <Typography
                     className='span'
                      > { t('dash.dashboard') } </Typography>
              </NavLink>
            

              <NavLink 
                onClick={( event ) => {
                  toggleDrawer( false );
                } }
                className={ ({ isActive }) => isActiveDrawer( isActive ) }
                to={`${RouterEnum.profile}`}
                >  
                  <AppRegistration className='icon' />
                  <Typography className='span' > { t('dash.registerInfo') } </Typography>
              </NavLink>
            </Grid>

        </SwipeableDrawer>

    </Box>
  )
}
