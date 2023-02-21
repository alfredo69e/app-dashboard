import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { DashboardRouters } from './../dashboard';
import { AuthRoutes } from './../auth';
import { useCkeckAuth } from './../hooks/useCkeckAuth';
import { authStatus } from './../store';
import { Loading } from './../components';

export const AppRouter = () => {

    const { isAutenticated } = useCkeckAuth();

    if ( isAutenticated === authStatus.checking ) {
      return <Loading />
    }

    return (
      <Routes>
        
        {
          ( isAutenticated === authStatus.authenticated )
          ? <Route path='/*' element={ <DashboardRouters /> } />
          : <Route path='/auth/*' element={ <AuthRoutes /> } />
        }

        <Route path='/*' element={ <Navigate to='/auth/login' />} />
          
      </Routes>
    )
  }