import { AppDispatch } from './../stores';
import { errMessageState, resetErrMessage, setErrMessage } from './errMessagesSlice';



export const startErrMsg = ( data : errMessageState ) => {
 return async( dispatch: AppDispatch ) => {

    dispatch( setErrMessage( data ) );

    setTimeout(() => {
        dispatch( resetErrMsg() );
    }, 5000 );
 } 
}

export const resetErrMsg = (  ) => {
    return async( dispatch: AppDispatch ) => {
        dispatch( resetErrMessage() );
    } 
}