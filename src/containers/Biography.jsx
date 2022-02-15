import React from 'react';
import HeaderMobile from '../components/Header/HeaderMobile';
import NavDesktop from '../components/Header/NavDesktop';

const Biography = () => {
  return (
    <div className="main-biography">
      <HeaderMobile name='Biography'/>
      <div className='main-biography__content'>
        <div className='biography-header'>
          <h1>Who is Sebastian Rivera?</h1>
          <NavDesktop />
        </div>
        <section className='my-info'>
          
        </section>
      </div>
    </div>
  );
};

export default Biography;