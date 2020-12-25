import React from "react";

import './Location.css';

// components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Hospital_one from '../../components/Hospital_map/Hospital_one';
import Buttons from '../../components/Button/Buttons';

function Location_first() {

  return(
    <div>
      <Header/>
      <Buttons/>
      <div className='map_size'>
        <Hospital_one/>
      </div>
      <Footer/>
    </div>
  )
}

export default Location_first;