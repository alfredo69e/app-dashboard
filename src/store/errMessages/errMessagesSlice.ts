import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface errMessageState {
     isActive?: boolean;
     message: string;
     name: string;
     status: number;
}

const initialState: errMessageState = {
    isActive: false,
    message: '',
    name: '',
    status: 0
}

export const errMessageSlice = createSlice({
  name: 'errMessage',
  initialState,
  reducers: {
    setErrMessage: ( state, { payload }: PayloadAction<errMessageState>) => {
      state.isActive = true;
      state.message = payload.message;
      state.name = payload.name;
      state.status = payload.status;
    },
    resetErrMessage: ( state ) => {
        state.isActive = false;
        state.message = '';
        state.name = '';
        state.status = 0;
   },
  },
})

// Action creators are generated for each case reducer function
export const { setErrMessage, resetErrMessage } = errMessageSlice.actions;