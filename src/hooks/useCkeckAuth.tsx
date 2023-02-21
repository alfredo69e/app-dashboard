import { useEffect } from 'react';
import { useAppDispatch } from './../store';
import { startRefreshToken } from '../store/auth/thunks';
import { useAuth } from './useAuth';


export const useCkeckAuth = () => {

    const { isAutenticated } = useAuth();
    const dispatch = useAppDispatch();

    useEffect(() => {
    
      dispatch( startRefreshToken() )
      
      }, []);

    return {
      isAutenticated
    }
}