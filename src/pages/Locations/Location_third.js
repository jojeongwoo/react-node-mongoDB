import React from "react";

import './Location.css';

// components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Hospital_three from '../../components/Hospital_map/Hospital_three';
import Buttons from '../../components/Button/Buttons';

function Location_third() {

  return(
    <div>
      <Header/>
      <Buttons/>
      <div className='map_size'>
        <Hospital_three/>
      </div>
      <Footer/>
    </div>
  )
}

export default Location_third;