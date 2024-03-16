import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end', fontFamily: 'SWFont' }}>
        <p onClick={() => onRouteChange('signin')} className='f3 link dim yellow underline pa3'> Sign out </p>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end', fontFamily: 'SWFont' }}>
        <p onClick={() => onRouteChange('signin')} className='f3 link dim yellow underline pa3'> Sign in </p>
        <p onClick={() => onRouteChange('register')} className='f3 link dim yellow underline pa3'> Register </p>
      </nav>
    );
  }
}

export default Navigation;

