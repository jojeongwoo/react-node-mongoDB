import React from 'react';

// Components
import Header from '../../src/components/Header/Header';
import Slide from '../components/MainPage/Slide/Slide';
import Favorite from '../components/MainPage/Favorite/Favorite';
import Notice from '../components/Notice/Notice';
import Footer from '../components/Footer/Footer';

function Main() {
  return (
    <div>
      <Header/>
      <Slide/>
      <Favorite/>
      <Notice/>
      <Footer/>
    </div>
  );
}

export default Main;