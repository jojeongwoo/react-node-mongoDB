import React from "react";

import './Location.css';

// components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Hospital_four from '../../components/Hospital_map/Hospital_four';
import Buttons from '../../components/Button/Buttons';

function Location_fourth() {

  return(
    <div>
      <Header/>
      <Buttons/>
      <div className='map_size'>
        <Hospital_four/>
      </div>
      <Footer/>
    </div>
  )
}

export default Location_fourth;