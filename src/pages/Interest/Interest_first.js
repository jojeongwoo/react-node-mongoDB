import React from 'react';
import './Interest.css';

// Components
import Header from '../../components/Header/Header';
import Btn from '../../components/Inter_button/InBtn';
import Footer from '../../components/Footer/Footer';

// image 
import img_1 from '../../asset/Inter/healthgood.jpg';

function Interest_first() {
  return (
    <div>
      <Header/>
      <Btn/>
      <div className='inter_section'>
        <img src={img_1} alt='img' className='inter_img'/>
      </div>
      <Footer/>
    </div>
  )
}

export default Interest_first;