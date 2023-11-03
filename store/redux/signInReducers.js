import {createSlice} from '@reduxjs/toolkit';
import moment from 'moment';

const initialState = {
  access_token: '',
  refresh_token: '',
  expiryTimestamp: '',
  // scope: [],
  token_type: '',
  id_token: '',
  userDetails: {},
};

const signInDetailsSlice = createSlice({
  name: 'signInDetails',
  initialState,
  reducers: {
    signInReducer: (state, action) => {
      // console.log('action.payload: ', action.payload);
      state.userDetails = action.payload.userDetails;
    },

    signOutReducer: state => {
      state.userDetails = {};
      state.access_token = '';
      state.refresh_token = '';
      state.expiryTimestamp = '';
      // state.scope = [];
      state.token_type = '';
      state.id_token = '';
    },

    saveTokenDetails: (state, action) => {
      // console.log('action.payload in saveTokenDetails: ', action.payload);
      state.access_token = action.payload.access_token;
      state.refresh_token = action.payload.refresh_token;
      state.expiryTimestamp = moment(
        moment() + moment(action.payload.expires_in * 1000),
      ).format('MM DD YYYY, HH:mm:ss'); // month day year, hour:minute:second 24hr format
      // expiryTimestamp:
      //   new Date(Date.now()) + action.payload.expires_in * 1000, // storing in milliseconds
      // state.scope = action.payload.scope;
      state.token_type = action.payload.token_type;
      state.id_token = action.payload.id_token;
    },

    refreshAccessToken: (state, action) => {
      state.access_token = action.payload.access_token;
      state.expiryTimestamp = moment(
        moment() + moment(action.payload.expires_in * 1000),
      ).format('MM DD YYYY, HH:mm:ss');
    },
  },
});

export const {
  signInReducer,
  signOutReducer,
  saveTokenDetails,
  refreshAccessToken,
} = signInDetailsSlice.actions;
export default signInDetailsSlice.reducer;
