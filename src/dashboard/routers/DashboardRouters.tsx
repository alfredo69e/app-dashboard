import { Navigate, Route, Routes } from 'react-router-dom';
import { ErrorPage } from './../../err';
import { DashboardPage, ProfilePage, RegisterUserPage, ListUsersPage, BriefcasePage } from './../pages';

export const DashboardRouters = () => {



  return (
    <Routes>
        <Route path='/' element={ <DashboardPage /> }/>
        <Route path='/profile' element={ <ProfilePage /> }/>
        <Route path='/user/register' element={ <RegisterUserPage /> }/>
        <Route path='/user/list' element={ <ListUsersPage /> }/>
        <Route path='/briefcase' element={ <BriefcasePage /> }/>
        <Route path='/err/404' element={ <ErrorPage /> }/>
        <Route path='/*' element={ <Navigate to='/' /> } />
    </Routes>
  )
}
