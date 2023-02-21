import { Navigate, Route, Routes } from 'react-router-dom';
import { RouterEnum } from '../helper';
import { ErrorPage } from './../../err';
import { DashboardPage, ProfilePage } from './../pages';

export const DashboardRouters = () => {

  return (
    <Routes>
        <Route path='/' element={ <DashboardPage /> }/>
        <Route path='/profile' element={ <ProfilePage /> }/>
        <Route path='/err/404' element={ <ErrorPage /> }/>
        <Route path='/*' element={ <Navigate to='/' /> } />
    </Routes>
  )
}
