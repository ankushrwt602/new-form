// SomeOtherComponent.js
import React from 'react';
import Layout from './layoutComponent';
import { useLocation } from 'react-router-dom';


const MainComponent = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const loginType = queryParams.get("LoginType");
  console.log(loginType,"loginTypefromMainComponent>>>>>>>>>>>>")

  return (
    <Layout loginType= {loginType}/>
  );
};

export default MainComponent;
