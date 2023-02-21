import { createSlice } from '@reduxjs/toolkit';

export interface loadingState {
    isLoading: boolean;
}

const initialState: loadingState = {
    isLoading: false,
}

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    activeLoading: (state) => {
        state.isLoading = true;
    },
    desactiveLoading: (state) => {
        state.isLoading = false;
    },
  },
})

// Action creators are generated for each case reducer function
export const { activeLoading, desactiveLoading } = loadingSlice.actions;