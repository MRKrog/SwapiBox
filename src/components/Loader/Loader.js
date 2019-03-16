import React from 'react';
import './Loader.scss';
import gear from '../../images/gear-logo.png';

const Loader = ({ loading }) => {
  const loadingClass = loading ? 'loading-true' : null;
  return (
    <div className='logo-images'>
      <img src={gear} className={loadingClass} alt="logo" />
    </div>
  )

}

export default Loader;
