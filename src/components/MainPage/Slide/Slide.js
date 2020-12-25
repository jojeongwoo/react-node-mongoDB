import React from 'react';
import Carousel from 'react-elastic-carousel';
import Item from './Item';
import './Slide.css';

// image
import Slide_one from '../../../asset/main/sky.jpg'
import Slide_two from '../../../asset/main/building.jpg'
import Slide_three from '../../../asset/main/building1.jpg'
import Slide_four from '../../../asset/ambulance.jpg'

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 1680, itemsToShow: 2 },
  { width: 3360, itemsToShow: 3 },
  // { width: 4500, itemsToShow: 4 },
  // { width: 6000, itemsToShow: 5 },
  // { width: 7500, itemsToShow: 6 },
  // { width: 9000, itemsToShow: 7 },
  // { width: 10500, itemsToShow: 8 },
];

function Slide() {
  return (
    <>
    <div className="Slide">
      <Carousel breakPoints={breakPoints}>
        <Item>
          <img src={Slide_one} alt='one' className='slide_image'/>
        </Item>
        <Item>
          <img src={Slide_two} alt='two' className='slide_image'/>
        </Item>
        <Item>
        <img src={Slide_four} alt='three' className='slide_image'/>
        </Item>
      </Carousel>
    </div>
  </>
  )
}

export default Slide;