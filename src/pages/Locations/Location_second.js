import React from "react";

import './Location.css';

// components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Hospital_two from '../../components/Hospital_map/Hospital_two';
import Buttons from '../../components/Button/Buttons';

function Location_second() {

  return(
    <div>
      <Header/>
      <Buttons/>
      <div className='map_size'>
        <Hospital_two/>
      </div>
      <Footer/>
    </div>
  )
}

export default Location_second;