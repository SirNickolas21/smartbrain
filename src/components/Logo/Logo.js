import React from 'react';
import Tilt from 'react-parallax-tilt';
import Vader from './vader.png';


const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className="Tilt" options={{ max: 75}} style={{height: 175, width: 175}}>
        <div className="Tilt-inner pa3">
          <img style={{paddingTop: '5px'}} alt='logo' src={Vader}/>
        </div>
      </Tilt>
    </div>
  );
 }

export default Logo;
