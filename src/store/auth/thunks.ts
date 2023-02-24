import { dashboardApi } from './../../api';
import { AppDispatch } from './../stores';
import { activeLoading, desactiveLoading } from './../loading';
import { authState, logoutUser, setUser, setUserAvatar } from './authSlice';
import { AxiosError } from 'axios';
import { resetErrMsg, startErrMsg } from './../errMessages';
import { localStorageSetToken, localStorageRemoveToken } from './../../helper';
import { resetMsg, startMsg } from './../messages';

//! getState: () => RootState

export const startLogin = ( username: string, password: string ) => {
    return async( dispatch: AppDispatch,   ) => {

         dispatch( activeLoading() );
         dispatch( resetErrMsg() );
         dispatch( resetMsg() );

        try {

            const { data } = await dashboardApi.post(`/auth/login`, { username, password });

            localStorageSetToken( data.token );
        
            dispatch( setUser( data ) );
            

        } catch ( error : any ) {

            _handlerError( dispatch, error );

            dispatch( startLogout() );
            
        } finally {
            dispatch( desactiveLoading() );
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
               

            } catch ( error : any ) {

                dispatch( startLogout() );

               
            } finally {
                dispatch( desactiveLoading() );
            }

        // }, 3000 );
    }
}

export const startChangeAvatar = ( files: FileList ) => {
    return async( dispatch: AppDispatch ) => {
        
        dispatch( activeLoading() );
        dispatch( resetErrMsg() );
        dispatch( resetMsg() );
        
        try {

            const formData = new FormData();

            formData.append('avatar', files[0]);

            const { data } = await dashboardApi.patch(`/users/updatePhoto`, formData );

            dispatch( setUserAvatar( data.avatar ) );

            dispatch( startMsg( '' ) );
            
        } catch ( error : any ) {

            _handlerError( dispatch, error );
            
            
        } finally {
            dispatch( desactiveLoading() );
        }



    }
}

export const startResetAvatar = () => {
    return async( dispatch: AppDispatch ) => {
        dispatch( activeLoading() );
        dispatch( resetErrMsg() );
        dispatch( resetMsg() );

        try {

            const { data } = await dashboardApi.patch(`/users/updatePhoto`);

            dispatch( setUserAvatar( data.avatar ) );

            dispatch( startMsg( '' ) );
   
        } catch ( error: any ) {

            _handlerError( dispatch, error );
            
            
        } finally {
            dispatch( desactiveLoading() );
        }
    }
}

export const startUpdateUser = ( user: authState ) => {
    return async( dispatch: AppDispatch ) => {
        dispatch( activeLoading() );
        dispatch( resetErrMsg() );
        dispatch( resetMsg() );

        try {

            // user.birthdate = moment(user.birthdate, 'MM/DD/YYYY').format('MM/DD/YYYY');

            const { data } = await dashboardApi.patch(`/users/update`, { ...user });

            dispatch( startMsg( '' ) );

            dispatch( setUser( data ) );

            
   
        } catch ( error: any ) {

            _handlerError( dispatch, error );
            
            
        } finally {
            dispatch( desactiveLoading() );
        }
    }
}

export const startChangePass = (oldPass: string, newPass: string) => {
    return async( dispatch: AppDispatch ) => {
        dispatch( activeLoading() );
        dispatch( resetErrMsg() );
        dispatch( resetMsg() );

        try {

            await dashboardApi.post(`/users/changePass`, { oldPass, newPass });

            dispatch( startMsg( '' ) );
            
        } catch (error: any) {

            _handlerError( dispatch, error );
            
        } finally {
            dispatch( desactiveLoading() );
        }
    }
}

const _handlerError = ( dispatch: AppDispatch, error: any, messageValidate: boolean = false ) => {
    console.log( error );

    const err : AxiosError = error;

    const { status, name, message }: any = err.response?.data;

    dispatch( startErrMsg( { status: status ?? 0, name, message: `${ messageValidate ? message : '' }`  } ) );
}