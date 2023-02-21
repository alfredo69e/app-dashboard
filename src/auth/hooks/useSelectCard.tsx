import { useEffect, useState } from 'react';

export enum loginStatus {
    auth = 'auth',
    login = 'login',
    forgot = 'forgot'
}

export const useSelectCard = () => {

    const [ status, setStatus ] = useState<loginStatus>( loginStatus.auth );

    const onPress = ( statusPage: loginStatus ) => setStatus( () => statusPage );

    
    return {
        status,
        onPress
    }


}