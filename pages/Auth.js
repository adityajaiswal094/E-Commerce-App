import React from 'react';
import {useSelector} from 'react-redux';
import {Navigate, useLocation, Outlet} from 'react-router-native';

export default function Auth() {
  const {userDetails} = useSelector(state => state.signInDetails);
  const location = useLocation();

  return userDetails?.user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{from: location}} replace />
  );
}
