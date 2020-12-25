import React from 'react';
import './Interest.css';

// Components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Btn from '../../components/Inter_button/InBtn';

// image
import img_3 from '../../asset/Inter/immunityup.png';

function Interest() {
  return (
    <div>
      <Header/>
      <Btn/>
      <div className='inter_section'>
        <img src={img_3} alt='img' className='inter_img'/>
      </div>
      <Footer/>
    </div>
  )
}

export default Interest;