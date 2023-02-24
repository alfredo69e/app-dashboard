import { BusinessCenterOutlined, HouseOutlined, ListAltOutlined, PermIdentityOutlined } from '@mui/icons-material';
import { Box, Grid, SwipeableDrawer, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link, NavLink } from 'react-router-dom';
import { PaletteTypeEnum, RootState, useAppSelector } from '../../../store';
import { useAuth } from '../../../hooks';
import { RouterEnum } from '../../helper';
import { RolesEnum } from '../../../common';
import { SideBarDivider } from './SideBarDivider';
import { upperCaseFirstLetter } from '../../../helper';

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

  const { name, lastName, roles } = useAuth();

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
      return 'btnDrawerIsNotActiveLight'
    }

    return 'btnDrawerIsNotActiveDark'
  }
  
  const validateRoles = (): boolean => {
    for (const item of roles) {
      if( item.includes( RolesEnum.super_admin ) ) {
        return true;
      }
    }
    return false;
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
                  👨🏻‍💻 { `${upperCaseFirstLetter( name )} ${upperCaseFirstLetter( lastName )}` }
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
                style={{ marginTop: '30px' }}
                > {
                  
                }
                  <HouseOutlined className='icon' />
                    <Typography
                     className='span'
                      > { t('dash.dashboard') } </Typography>
              </NavLink>
            
              

             {
               ( validateRoles() ) &&  
               <>
               <SideBarDivider title={ t('dash.users') } />

               <NavLink 
                onClick={( event ) => {
                  toggleDrawer( false );
                } }
                className={ ({ isActive }) => isActiveDrawer( isActive ) }
                to={`${RouterEnum.registerUser}`}
                >  
                  <PermIdentityOutlined className='icon' />
                  <Typography className='span' > { t('dash.registerUsers') } </Typography>
                </NavLink> 

                <NavLink 
                onClick={( event ) => {
                  toggleDrawer( false );
                } }
                className={ ({ isActive }) => isActiveDrawer( isActive ) }
                to={`${RouterEnum.listUsers}`}
                >  
                  <ListAltOutlined className='icon' />
                  <Typography className='span' > { t('dash.listUsers') } </Typography>
                </NavLink> 
              </>
                
              }

              <SideBarDivider title={ t('dash.briefcase') } />

              <NavLink 
                onClick={( event ) => {
                  toggleDrawer( false );
                } }
                className={ ({ isActive }) => isActiveDrawer( isActive ) }
                to={`${ RouterEnum.briefcase }`}
                >  
                  <BusinessCenterOutlined className='icon' />
                  <Typography className='span' > { t('dash.briefcase') } </Typography>
              </NavLink>
            </Grid>

        </SwipeableDrawer>

    </Box>
  )
}
