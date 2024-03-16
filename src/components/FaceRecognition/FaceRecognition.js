import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
/*console.log('Received Box:', box);
  console.log('Top Row:', box.topRow);
  console.log('Right Col:', box.rightCol);
  console.log('Bottom Row:', box.bottomRow);
  console.log('Left Col:', box.leftCol); */

  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputimage' alt='' src={imageUrl} width='300px' heigh='auto' />
        <div 
          className='bounding-box' style= {{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
      </div>
    </div>
  );
}


export default FaceRecognition;