import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import './Apply.css';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function Apply(props) {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [hospital, setHospital] = useState('');
  const [disease, setDisease] = useState('');
  const [doctor, setDoctor] = useState('');
  const [price, setPrice] = useState('');

  const VcDataHandler = (e) => {
    axios.post('/api/users/apply', {
      email,
      name,
      hospital,
      disease,
      doctor,
      price,
    })
    .then((response) => {
      console.log(response);
      props.history.push('/');
      alert('신청 완료');
    });
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  }

  const NameHandler = (e) => {
    setName(e.target.value);
  }

  const hospitalHandler = (e) => {
    setHospital(e.target.value);
  }

  const diseaseHandler = (e) => {
    setDisease(e.target.value);
  }
  
  const doctorHandler = (e) => {
    setDoctor(e.target.value);
  }

  const priceHandler = (e) => {
    setPrice(e.target.value);
  }

  return (
    <div>
      <Header/>
      <div className='ApplyBox'>
        <div className='Apply_section'>
          <h1>VC 신청</h1>
        
          <input type='email' onChange={emailHandler} placeholder='이메일 입력'/>
          <input type='text' onChange={NameHandler} placeholder='자신의 이름'/>
          <input type='text' onChange={hospitalHandler} placeholder='병원명 입력'/>
          <input type='text' onChange={diseaseHandler} placeholder='질병명 입력'/>
          <input type='text' onChange={doctorHandler} placeholder='진료의 이름 입력'/>
          <input type='text' onChange={priceHandler} placeholder='진료 금액 입력'/>

          <button onClick={VcDataHandler} className='vc_button'>제출하기</button>
        </div>
      </div>
      <Footer/>
    </div>
  )
};

export default withRouter(Apply);