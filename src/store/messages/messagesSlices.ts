import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface messagesState {    
    isMessage: boolean;
    message: string;
}

const initialState: messagesState = {
    isMessage: false,
    message: ''
}

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    setMessage: (state, { payload }: PayloadAction<string>) => {
      state.isMessage = true;
      state.message = payload;
    },
    resetMessage: ( state ) => {
      state.isMessage = false;
      state.message = '';
    }
  },
})

// Action creators are generated for each case reducer function
export const { setMessage, resetMessage } = messagesSlice.actions;