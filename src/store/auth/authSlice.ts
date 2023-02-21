import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export enum authStatus {
    authenticated = 'authenticated',
    noAuthenticated = 'noAuthenticated',
    checking = 'checking'
}

export interface authState {
    isAutenticated: authStatus;
    uid:       string;
    username:  string;
    email:     string;
    name:      string;
    lastName:  string;
    avatar:    string;
    birthdate: number;
    block:     boolean;
    mobile:    string;
    roles:     string[];
    token:     string;
}

const initialState: authState = {
    isAutenticated: authStatus.checking,
    uid:       '',
    username:  '',
    email:     '',
    name:      '',
    lastName:  '',
    avatar:    '',
    birthdate: 0,
    block:     false,
    mobile:    '',
    roles:     [],
    token:     '',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<authState>) => {
        state.isAutenticated = authStatus.authenticated,
        state.uid            = payload.uid;
        state.username       = payload.username;
        state.email          = payload.email;
        state.name           = payload.name;
        state.lastName       = payload.lastName;
        state.avatar         = payload.avatar;
        state.birthdate      = payload.birthdate;
        state.block          = payload.block;
        state.mobile         = payload.mobile;
        state.roles          = payload.roles;
        state.token          = payload.token;
    },
    logoutUser: ( state ) => {
        state.isAutenticated = authStatus.noAuthenticated;
        state.uid            = '';
        state.username       = '';
        state.email          = '';
        state.name           = '';
        state.lastName       = '';
        state.avatar         = '';
        state.birthdate      = 0;
        state.block          = false;
        state.mobile         = '';
        state.roles          = [];
        state.token          = '';
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUser, logoutUser } = authSlice.actions;