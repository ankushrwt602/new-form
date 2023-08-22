// Layout.js
import React from 'react';
import Header from './HeaderComponent';
import Sidebar from './SidebarComponent';

const LayoutComponent = (props ) => {
  const { loginType, children } = props;
  return (
    <div>
      <Header />
      <Sidebar loginType={loginType}/>
      {children}
    </div>
  );
};

export default LayoutComponent;
