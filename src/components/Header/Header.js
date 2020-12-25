import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom'; 

import './Header.css';

// image
import Logo from '../../asset/main/holder_logo.PNG';
import Login from '../../asset/login.svg';
import Sign_in from '../../asset/sign.svg';
import Sign_out from '../../asset/signout.svg';
import User_info from '../../pages/User/User_info';

function Header(props) {

  const [data, setData] = useState([]);
  const [auth, setAuth] = useState([]);

  // 데이터 가져오기
  async function fetchData() {
    await axios('/api/users/bring')
    .then(response => {
      setData(response.data);
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    })
  }
  useEffect(() => {
    fetchData();
  }, []);

  // 로그인 여부 확인
  async function fetchAuth() {
    await axios('/api/users/auth')
    .then(response => {
      setAuth(response.data);
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    })
  }
  useEffect(() => {
    fetchAuth();
  }, []);


  const onLogoutHandler = () => {
    axios.get('/api/users/logout')
    .then(response => {
      // console.log(response.data);
      if(response.data.success) {
        props.history.push('/Login');
      } else {
        alert('로그아웃 실패');
      }
    })
  }

  return(
    <div>
      <div className="header-wrap">
            <div className="header-icon">
                <a href="/">
                    <img src={Logo} className="header-logo"/>
                </a>
            </div>

            <div className="header-menu">
                <ul>
                    <li className="dropdown">
                        <a href="/Apply">
                            <div className="dropdown-menu">증명서 요청하기</div>
                        </a>
                    </li>

                    <li className="dropdown">
                      <a href="/VcList">
                        <div className="dropdown-menu">내 증명서 목록</div>
                      </a> 
                    </li>

                    <li className="dropdown">
                        <a href="/Interest_first">
                          <div className="dropdown-menu">관심분야</div>
                        </a>
                    </li>

                    <li className="dropdown">
                        <a href="/Location_first">
                            <div className="dropdown-menu">병원 위치 정보</div>
                        </a>
                    </li>
                </ul>
            </div>
            
            <div className="header-function">
      
              {auth.isAuth ?
                <div className='AuthBtn'>
                  <Link to='/User_info' className='user_info'> 
                    <span className='authName'>{auth.name}님</span>
                  </Link>
                  <img src={Sign_out} alt='logout' className='logout' onClick={onLogoutHandler}/>
                </div>  
                :
                <div className='AuthBtn'>
                  <a href="/Login">
                    <img src={Login} alt='login' className='icon' id='login_icon'/>
                  </a>   
                  <a href="/Sign_up">
                    <img src={Sign_in} alt='sign' className='icon'/>
                  </a>
                </div>
                }
            </div>
      </div>
    </div>
  )
}

export default withRouter(Header);