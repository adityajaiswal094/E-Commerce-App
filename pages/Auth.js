import React from 'react';
import Login from './Login';
import HomePage from './HomePage';
import {useSelector} from 'react-redux';

export default function Auth() {
  const {userDetails} = useSelector(state => state.signInDetails);

  return Object.keys(userDetails).length === 0 ? <Login /> : <HomePage />;
}
