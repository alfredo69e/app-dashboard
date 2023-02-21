import { dashboardApi } from './../../api';
import { AppDispatch, RootState } from './../stores';
import { activeLoading, desactiveLoading } from './../loading';
import { logoutUser, setUser } from './authSlice';
import { AxiosError } from 'axios';
import { resetErrMessage, setErrMessage } from './../errMessages';
import { localStorageSetToken, localStorageRemoveToken } from './../../helper';
import { resetMessage } from './../messages';
import { useNavigate } from 'react-router-dom';
import { RouterEnum } from './../../dashboard/helper';

//! getState: () => RootState

export const startLogin = ( username: string, password: string ) => {
    return async( dispatch: AppDispatch,   ) => {

         dispatch( activeLoading() );
         dispatch( resetErrMessage() );
         dispatch( resetMessage() );

        try {

            const { data } = await dashboardApi.post(`/auth/login`, { username, password });

            localStorageSetToken( data.token );
        
            dispatch( setUser( data ) );
            
            dispatch( desactiveLoading() );


        } catch ( error : any ) {

            dispatch( desactiveLoading() );

            const err : AxiosError = error;

            const { status, name, message }: any = err.response?.data;

            dispatch( setErrMessage( { status: status ?? 0, name, message } ) );

            dispatch( startLogout() );
            
        }
    }
}

export const startLogout = () => {
    return async( dispatch: AppDispatch ) => { 

        localStorageRemoveToken();

        dispatch( logoutUser() );
    }
}

export const startRefreshToken = () => {
    return async( dispatch: AppDispatch ) => {

        dispatch( activeLoading() );

        // setTimeout( async () => {

            try {

                const { data } = await dashboardApi.get(`/auth`);

                localStorageSetToken( data.token );
            
                dispatch( setUser( data ) );
                dispatch( desactiveLoading() );

            } catch ( error : any ) {

                dispatch( startLogout() );

                dispatch( desactiveLoading() );
            }

        // }, 3000 );
    }
}