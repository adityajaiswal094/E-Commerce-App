import {useEffect} from 'react';
import {axiosPrivate} from './axios';
import {useRefreshToken} from './authApis';
import {useSelector} from 'react-redux';

const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const {userDetails, access_token} = useSelector(state => state.signInDetails);

  useEffect(() => {
    // request
    const requestIntercept = axiosPrivate.interceptors.request.use(
      config => {
        if (!config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${access_token}`;
        }
        return config;
      },
      error => Promise.reject(error),
    );

    // response
    const responseIntercept = axiosPrivate.interceptors.response.use(
      response => response,
      async error => {
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refresh();
          prevRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return axiosPrivate(prevRequest);
        }

        return Promise.reject(error);
      },
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [refresh, userDetails, access_token]);

  return axiosPrivate;
};

export default useAxiosPrivate;
