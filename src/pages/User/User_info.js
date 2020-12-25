import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from "react-redux";

// components
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { changeToPassword } from '../../actions/userAction';

import './User_info.css';

function User_info(props) {

  const dispatch = useDispatch();

  const [info, setInfo] = useState([]);
  const [password, setPassword] = useState('');
  const [changePassword, setChangePassword] = useState('');

  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };

  const onChangePasswordHandler = (e) => {
    setChangePassword(e.currentTarget.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    let body = {
      password,
      changePassword,
    }

    dispatch(changeToPassword(body))
    .then(response => {
        if (response.payload.changeSuccess) {
            props.history.push('/');
        } else {
            alert('비밀번호가 변경되었습니다!');
            props.history.push('/');
        }
      });
    }
  
  async function fetchInfo() {
    await axios('/api/users/info')
    .then(response => {
      setInfo(response.data);
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    })
  }
  useEffect(() => {
    fetchInfo();
  }, []);

  const deleteEmployee = (e) => {
    e.preventDefault();
    axios.delete('/api/users/delete/:id').
    then(response => {
      console.log(response);
      alert('회원탈퇴성공');
      props.history.push('/');
    });
  };


  return (
    <div>
      <Header/>
      <div className="info-h">
            <div className="info-wrap">
              <div className="title">
                  개인정보수정
              </div>
              <form className="form" onSubmit={onSubmitHandler}>
                <div className="input_field">
                    <label id="input_w">이름</label>
                    <div className="content">{info.name}</div>
                </div>

                <div className="input_field">
                  <label id="input_w">E-Mail</label>
                  <div className="content">{info.email}</div>
                </div>

                <div className="input_field">
                    <label id="input">password</label>
                    <input type="password" className="field" onChange={onPasswordHandler}/>
                </div>

                <div className="input_field">
                    <label id="input">change password</label>
                    <input type="password" className="field" onChange={onChangePasswordHandler}/>
                </div>

                <div className="input_field">
                    <label id="phone">핸드폰 번호</label>
                    <div className="content">{info.tel}</div>
                </div>
                
                <div className="input_field">
                    <button value="Modification" className="btn">수정하기</button>
                </div>
              </form>

              <form className='leave_form' onSubmit={deleteEmployee}>
                <div className="leave">
                  <p className='leave_text'>회원탈퇴</p>
                  <div className="center_b">
                    <input type="checkbox" id="click_b"/>
                    <button className="click-me">Leave</button>
                  </div>
                </div>
              </form>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default User_info;
