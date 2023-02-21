

import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export enum PaletteTypeEnum {
  light = 'light',
  dark  = 'dark' 
}

export interface themeState {
    theme: PaletteTypeEnum
}

const initialState: themeState = {
  theme: PaletteTypeEnum.light,
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, { payload }: PayloadAction<themeState>) => {
     state.theme = payload.theme
   },
  },
})

// Action creators are generated for each case reducer function
export const { setTheme } = themeSlice.actions;