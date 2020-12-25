import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import './VcList.css';

function VcList() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/api/users/list')
    .then(response => {
      setData(response.data);
      console.log(response.data);
    })
  }, []);

  return (
    <div>
      <Header/>
      <div className='vcBox'>
          <div className='vc'>
            <div className='test1'>
              <h1 className='vc_text'>VC LIST</h1>
              {data.map((datas, key) => {
                return (
                  <div className='scroll'>
                    <div className='data_box'>
                      <div className='box_header'>
                        {datas.hospital}
                      </div>
                      <div className='box_section'>
                        <div>질병명: {datas.disease}</div>
                        <div>담당의사: {datas.doctor}</div>
                        <div>진료일: {datas.date}</div>
                        <div>진료비: {datas.price}</div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        
      </div>
      <Footer/>
    </div>
  )
}

export default VcList;