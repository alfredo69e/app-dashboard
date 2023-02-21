import { RootState, useAppSelector } from './../store';
import { useCallback, useEffect, useMemo, useState } from 'react';


export const useAuth = () => {


  const { ...rest } = useAppSelector((state: RootState) => state.auth );

  

  

  return {
    ...rest,
  }
}
