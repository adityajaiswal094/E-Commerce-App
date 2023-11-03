/* eslint-disable no-unused-vars */
import React, {useEffect, useCallback} from 'react';
import {View, StyleSheet} from 'react-native';
import ProductListView from '../components/ProductListView';
import {useDispatch, useSelector} from 'react-redux';
import {
  GetProductsData,
  Loading,
  GetProductsDataError,
} from '../store/redux/productReducers';
import axios from 'axios';
import moment from 'moment';
import useAxiosPrivate from '../apis/useAxiosPrivate';

import {BASE_URL, WEB_CLIENT_ID, WEB_CLIENT_SECRET} from '@env';
import AppBar from '../components/AppBar';
import {saveTokenDetails} from '../store/redux/signInReducers';
import {Button} from 'react-native-paper';

export default function HomePage() {
  const {serverAuthCode} = useSelector(
    state => state.signInDetails.userDetails,
  );
  const {access_token, expiryTimestamp, refresh_token} = useSelector(
    state => state.signInDetails,
  );
  const dispatch = useDispatch();

  const axiosPrivate = useAxiosPrivate();

  const getProducts = useCallback(async url => {
    dispatch(Loading());
    try {
      const response = await axios.get(url);
      const products = await response.data;

      dispatch(GetProductsData(products));
    } catch (error) {
      dispatch(GetProductsDataError());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getAccessToken = async ({isMounted, controller}) => {
    try {
      // const apiEndpoint = 'https://oauth2.googleapis.com/token';
      const response = await axiosPrivate
        .post(
          '/token',
          {
            client_id: WEB_CLIENT_ID,
            client_secret: WEB_CLIENT_SECRET,
            code: serverAuthCode,
            grant_type: 'authorization_code',
          },
          {
            signal: controller.signal,
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

      isMounted && dispatch(saveTokenDetails(response));
      // console.log('response access token: ', response);
    } catch (error) {
      console.error('Error in access token generation: ', error);
    }
  };

  // refresh accesss token
  // const refreshAccessToken = async ({isMounted, controller}) => {
  //   try {
  //     console.log('refresh_token: ', refresh_token);

  //     const apiEndpoint = 'https://oauth2.googleapis.com/token';
  //     console.log('refreshAccessToken');
  //     const response = await axios.post(
  //       apiEndpoint,
  //       {
  //         client_id: WEB_CLIENT_ID,
  //         client_secret: WEB_CLIENT_SECRET,
  //         refresh_token: refresh_token,
  //         grant_type: 'refresh_token',
  //       },
  //       {
  //         signal: controller.signal,
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         withCredentials: true,
  //       },
  //     );

  //     // isMounted && dispatch(saveTokenDetails(response));
  //     console.log('response refresh access token: ', response);
  //   } catch (error) {
  //     console.error('Error in refresh token generation: ', error);
  //   }
  // };

  // get products

  useEffect(() => {
    getProducts(BASE_URL);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // get access token
  useEffect(() => {
    if (access_token === '') {
      let isMounted = true;
      const controller = new AbortController();

      getAccessToken({isMounted, controller});

      return () => {
        isMounted = false;
        controller.abort();
      };
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // refresh access token
  // useEffect(() => {
  //   if (
  //     expiryTimestamp !== null &&
  //     moment().format('MM DD YYYY, HH:mm:ss') <= expiryTimestamp - 5000
  //   ) {
  //     // refresh access token
  //     let isMounted = true;
  //     const controller = new AbortController();

  //     refreshAccessToken({isMounted, controller});

  //     return () => {
  //       isMounted = false;
  //       controller.abort();
  //     };
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <View style={styles.rootContainer}>
      <AppBar />
      <ProductListView />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 24,
    color: 'orange',
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
