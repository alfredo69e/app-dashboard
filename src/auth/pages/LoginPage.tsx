

import { Card, Grid, } from '@mui/material';
import { RootState, useAppSelector } from './../../store';
import { Loading } from './../../components';
import { FooterComponent, ForgotPassComponent, LoginComponent } from './../components';
import { loginStatus, useSelectCard } from '../hooks';
import ReactCardFlip from 'react-card-flip';



export const LoginPage = () => {

  const { isLoading } = useAppSelector((state: RootState) => state.loading );

  const { status, onPress } = useSelectCard();

  return (

    <>
    { isLoading && <Loading /> } 
    <Grid 
        container 
        direction="row"
        justifyContent='center'
        alignItems="center"
        sx={{ 
          height: '100vh',
        }}
      >

            <ReactCardFlip
              containerClassName={'animate__animated animate__backInUp'}
              isFlipped={ status === loginStatus.forgot }>

              <Card
                sx={{
                  boxShadow: 10, 
                  p: 5, 
                  borderRadius: 3,
                  m: 4,
                  backgroundColor: 'colors.cards'
                }}
              >

                <LoginComponent changeCard={ () => onPress( loginStatus.forgot ) } />

              </Card>

              <Card
                sx={{ 
                  boxShadow: 10, 
                  p: 5, 
                  borderRadius: 3,
                  backgroundColor: 'colors.cards'
                }}
              >
              
               <ForgotPassComponent changeCard={ () => onPress( loginStatus.login ) }  />

              </Card>

            </ReactCardFlip>


            

        <FooterComponent />

    </Grid>
    
    </>

    
  )
}
