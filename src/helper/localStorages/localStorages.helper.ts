import { localStorageEnum } from './../enums/localStorageEnum.enum';



export const localStorageSetToken = ( data: string ) => {
    localStorage.setItem(localStorageEnum.token, data )
}

export const localStorageGetToken = (): string => {
    return localStorage.getItem( localStorageEnum.token ) ?? '';
}

export const localStorageRemoveToken = () => {
    localStorage.removeItem( localStorageEnum.token )
}

export const localStorageSetRemember = ( data: string ) => {
    localStorage.setItem(localStorageEnum.remember, data )
}

export const localStorageGetRemember = (): string => {
    return localStorage.getItem( localStorageEnum.remember ) ?? '';
}

export const localStorageRemoveRemember = () => {
    localStorage.removeItem( localStorageEnum.remember )
}

export const localStorageSetTheme = ( data: string ) => {
    localStorage.setItem(localStorageEnum.theme, data )
}

export const localStorageGetTheme= (): string => {
    return localStorage.getItem( localStorageEnum.theme ) ?? '';
}

export const localStorageRemoveTheme = () => {
    localStorage.removeItem( localStorageEnum.theme )
}