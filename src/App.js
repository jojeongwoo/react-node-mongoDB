import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Auth from './hook/auth';

import './App.css';
// Components
import Main from '../src/pages/Main';

// 병원 위치 소개
import Location_first from './pages/Locations/Location_first';
import Location_second from './pages/Locations/Location_second';
import Location_third from './pages/Locations/Location_third';
import Location_fourth from './pages/Locations/Location_fourth';
import Location_fifth from './pages/Locations/Location_fifth';

// 관심분야
import Interest_first from '../src/pages/Interest/Interest_first';
import Interest_second from '../src/pages/Interest/Interest_second';
import Interest_third from '../src/pages/Interest/Interest_third';

// 로그인 / 회원가입
import Login from './pages/User/Login';
import Sign_up from './pages/User/Sign_up';
import User_info from './pages/User/User_info';

// Test
import Test from '../src/pages/Test/Test';
import Flow from '../src/pages/Test/flow_test';

// VC 관련
import VcList from './components/VC/VcList';
import Apply from './components/VC/Apply';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={Main}/>

        {/* 병원 위치 소개 */}
        <Route exact path='/Location_first' component={Location_first}/>
        <Route exact path='/Location_second' component={Location_second}/>
        <Route exact path='/Location_third' component={Location_third}/>
        <Route exact path='/Location_fourth' component={Location_fourth}/>
        <Route exact path='/Location_fifth' component={Location_fifth}/>

        {/* 관심분야 */}
        <Route exact path='/Interest_first' component={Interest_first}/>
        <Route exact path='/Interest_second' component={Interest_second}/>
        <Route exact path='/Interest_third' component={Interest_third}/>

        {/* 로그인 / 회원가입 */}
        <Route exact path='/Login' component={Auth(Login, false)}/>
        <Route exact path='/Sign_up' component={Auth(Sign_up, false)}/>

        {/* 개인정보 */}
        <Route exact path='/User_info' component={User_info}/>

        {/* 테스트 */}
        <Route exact path='/Test' component={Test}/>
        <Route exact path='/flow' component={Flow}/>

        {/* VC관련 */}
        <Route exact path='/VcList' component={Auth(VcList, true)}/>
        <Route exact path='/Apply' component={Auth(Apply, true)}/>
      </Router>      
    </div>
  );
}

export default App;
