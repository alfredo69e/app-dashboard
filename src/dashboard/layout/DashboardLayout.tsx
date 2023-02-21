import { useTheme } from '@mui/material/styles';
import { Box, Grid, Toolbar } from '@mui/material';
import { useState } from 'react';
import { SideBar, NavBar } from './../components';


interface props {
    children : JSX.Element | JSX.Element[]
}

const drawerWidth = 320;

export const DashboardLayout = ({ children }: props) => {

  const [openSideBar, setOpenSideBar] = useState( false );

  const onOpenDrawer = () => setOpenSideBar( ( openSideBar ) => !openSideBar );
  const onClickSideBar = ( value: boolean ) =>  setOpenSideBar( value );

  return (
    <Box sx={{ display: 'flex' }}>

        <NavBar onOpenDrawer={ onOpenDrawer } drawerWidth={ drawerWidth } />

        <SideBar onClickSideBar={ ( value ) => onClickSideBar( value ) } onOpenSideBar={ openSideBar } drawerWidth={ drawerWidth }/>

        <Box
            component='main' 
            sx={{ flexGrow: 1, mr: { md: 20, sm: 2 }, ml: { md: 20, sm: 2 } }}
          >
          <Toolbar />
            <Grid container sx={{ mt: 5 }}>
              { children }
            </Grid>
          </Box>

    </Box>
  )
}
