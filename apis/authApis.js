/* eslint-disable no-unused-vars */
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {WEB_CLIENT_ID, WEB_CLIENT_SECRET} from '@env';
import {
  refreshAccessToken,
  saveTokenDetails,
} from '../store/redux/signInReducers';

const useAccessToken = () => {
  const {serverAuthCode} = useSelector(
    state => state.signInDetails.userDetails,
  );

  const dispatch = useDispatch();

  const accessToken = async () => {
    try {
      const apiEndpoint = 'https://oauth2.googleapis.com/token';
      const response = await axios
        .post(
          apiEndpoint,
          {
            client_id: WEB_CLIENT_ID,
            client_secret: WEB_CLIENT_SECRET,
            code: serverAuthCode,
            grant_type: 'authorization_code',
          },
          {
            //   signal: controller.signal,
            headers: {
              'Content-Type': 'application/json',
            },
            withCredentials: true,
          },
        )
        .then(res => {
          return res.data;
        })
        .catch(error => console.error(error));

      //   /* isMounted &&  */ dispatch(saveTokenDetails(response));
      // console.log('response access token: ', response);

      return response.data.access_token;
    } catch (error) {
      console.error('Error in access token generation: ', error);
    }
  };

  return accessToken;
};

export const useRefreshToken = () => {
  const {access_token, expiryTimestamp, refresh_token} = useSelector(
    state => state.signInDetails,
  );

  const dispatch = useDispatch();

  const refreshedAccessToken = async () => {
    try {
      // console.log('refresh_token: ', refresh_token);
      // const apiEndpoint = 'https://oauth2.googleapis.com/token';
      const response = await axios
        .post(
          '/token',
          {
            client_id: WEB_CLIENT_ID,
            client_secret: WEB_CLIENT_SECRET,
            refresh_token: refresh_token,
            grant_type: 'refresh_token',
          },
          {
            //   signal: controller.signal,
            headers: {
              'Content-Type': 'application/json',
            },
            withCredentials: true,
          },
        )
        .then(res => {
          return res.data;
        });
      /* isMounted && */ dispatch(refreshAccessToken(response));
      // console.log('response refresh access token: ', response);

      return response.access_token;
    } catch (error) {
      console.error('Error in refresh token generation: ', error);
    }
  };

  return refreshedAccessToken;
};
