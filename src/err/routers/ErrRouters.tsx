import { Navigate, Route, Routes } from 'react-router-dom';
import { ErrorPage } from './../page';

export const ErrRouters = () => {
    return(
        <Routes>
            <Route path='/404' element={ <ErrorPage /> }  />
            <Route path='/*' element={ <Navigate to='/err/404' /> } />
        </Routes>
    );
}