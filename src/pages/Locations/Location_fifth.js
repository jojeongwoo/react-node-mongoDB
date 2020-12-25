import React from "react";

import './Location.css';

// components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Hospital_five from '../../components/Hospital_map/Hospital_five';
import Buttons from '../../components/Button/Buttons';

function Location_fifth() {

  return(
    <div>
      <Header/>
      <Buttons/>
      <div className='map_size'>
        <Hospital_five/>
      </div>
      <Footer/>
    </div>
  )
}

export default Location_fifth;