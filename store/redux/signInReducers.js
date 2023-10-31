import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  access_token: '',
  refresh_token: '',
  expires_in: 0,
  scope: [],
  token_type: '',
  id_token: '',
  userDetails: {},
};

const signInDetailsSlice = createSlice({
  name: 'signInDetails',
  initialState,
  reducers: {
    signInReducer: (state, action) => {
      console.log('action.payload: ', action.payload);
      state.userDetails = action.payload.userDetails;
    },

    signOutReducer: state => {
      state.userDetails = {};
      state.access_token = '';
      state.refresh_token = '';
      state.expires_in = 0;
      state.scope = [];
      state.token_type = '';
      state.id_token = '';
    },

    saveTokenDetails: (state, action) => {
      console.log('action.payload in saveTokenDetails: ', action.payload);
      state.access_token = action.payload.access_token;
      state.refresh_token = action.payload.refresh_token;
      state.expires_in = action.payload.expires_in;
      state.scope = action.payload.scope;
      state.token_type = action.payload.token_type;
      state.id_token = action.payload.id_token;
    },
  },
});

export const {signInReducer, signOutReducer, saveTokenDetails} =
  signInDetailsSlice.actions;
export default signInDetailsSlice.reducer;
