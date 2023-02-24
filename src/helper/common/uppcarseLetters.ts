

export const upperCaseFirstLetter = ( value: string ): string => {
    return `${value.substring(0,1).toLocaleUpperCase()}${value.substring(1,value.length)}`
}