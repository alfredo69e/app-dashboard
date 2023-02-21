

export const apiUrl = (): string => {

    if( import.meta.env.PROD ) {
        return '';
    }

    return 'http://localhost:3000/api/v1';

}