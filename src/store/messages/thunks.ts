import { AppDispatch } from '../stores';
import { setMessage } from './messagesSlices';


export const startMessage = ( message: string ) => {
    return async( dispatch: AppDispatch ) => {
        dispatch( setMessage( message )  );
    }  
}