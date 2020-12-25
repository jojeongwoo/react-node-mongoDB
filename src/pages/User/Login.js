import React, { useState }from 'react';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loginUser } from "../../actions/userAction";

import './Login.css';

// components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';


// image
import heart from '../../asset/heart.PNG';

function Login(props) {
  const dispatch = useDispatch();

  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [NameValid, setNameValid] = useState(false);

  const onEmailHandler = (e) => {
    setEmail(e.target.value);
  }

  const onPasswordHandler = (e) => {
    setPassword(e.target.value);
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();

    let body = {
      email: Email,
      password: Password
    }

    dispatch(loginUser(body))
    .then(response => {
        if (response.payload.loginSuccess) {
            props.history.push('/');
        } else {
            alert('로그인 실패');
        }
    });
  }

  return (
    <div>
      <Header/>
      <section className="loginForm">
          <h1 className='h1'>
            <img src={heart} />
            CARE Holder
          </h1>

          <form className="input" onSubmit={onSubmitHandler}>
              <input type="email" placeholder="USER EMAIL" id="id" value={Email} onChange={onEmailHandler}/>
              <input type="password" placeholder="PASSWORD" id="pw" value={Password} onChange={onPasswordHandler}/>

              <button id='loginBtn'>
                Login
              </button>
          </form>

          {/* <input type="button" value="LOGIN" id="loginBtn"/> */}

          <div className = "loginForm_h">
              <a href="/Sign_up"><h4 id="h4">Sign Up</h4></a>
              <h4>Forgot Password?</h4>
          </div>
      </section>
      <Footer/>
    </div>
  )
}

export default withRouter(Login);