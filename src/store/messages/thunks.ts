
import { AppDispatch } from '../stores';
import { resetMessage, setMessage } from './messagesSlices';


export const startMsg = ( message: string ) => {
    return async( dispatch: AppDispatch ) => {
        
        dispatch( setMessage( message )  );

        setTimeout(() => {
            dispatch( resetMsg()  );
        }, 5000);
    }  
}

export const resetMsg = ( ) => {
    return async( dispatch: AppDispatch ) => {
        dispatch( resetMessage()  );
    }  
}

