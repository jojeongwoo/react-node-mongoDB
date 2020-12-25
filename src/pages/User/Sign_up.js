import React, { useState } from 'react';
import { Link, withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../actions/userAction";
import { useForm } from "react-hook-form";

// components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import './Sign_up.css';
import axios from 'axios';

function Sign_up(props) {

    const { register, handleSubmit, watch, errors } = useForm();
    const dispatch = useDispatch();

    const [Email, setEmail] = useState("");
    const [Name, setName] = useState("");
    const [Resident, setResident] = useState("");
    const [password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [Tel, setTel] = useState('');

    const onEmailHandler = (e) => {
        setEmail(e.currentTarget.value);
    };
    
    const onNameHandler = (e) => {
        setName(e.currentTarget.value);
    };

    const onResidentHandler = (e) => {
        setResident(e.currentTarget.value);
    };
    
    const onPasswordHanlder = (e) => {
        setPassword(e.currentTarget.value);
    };
    
    const onConfirmPasswordHandler = (e) => {
        setConfirmPassword(e.currentTarget.value);
    };

    const onTelHandler = (e) => {
        setTel(e.currentTarget.value);
    };

    const onSubmitHandler = (e) => {
        // e.preventDefault();
        if(password === ConfirmPassword) {
            let body = {
                email: Email,
                name: Name,
                resident: Resident,
                password: password,
                ConfirmPassword: ConfirmPassword,
                tel:Tel,
            };
            
            dispatch(registerUser(body))
            .then((response) => {
                if(response.payload.success) {
                    props.history.push("/Login");
                    alert('가입완료');
                }
            });  
        } else {
            alert('비밀번호가 일치하지 않습니다.');
        }
    };

    return (
        <div>
            <Header/>
            <div className="body-color">
                <div className="SignUp-wrap">
                    <div className="title">
                        회원가입
                    </div>

                    <form className="form" onSubmit={handleSubmit(onSubmitHandler)}>

                        <div className="input_field">
                            <label>이메일 (ID)</label>
                            <input type="email" name='email' value={Email} className="field" onChange={onEmailHandler} ref={register({ required:true })}/>
                            {errors.email && errors.email.type === 'required' && (<p id='error'>필수 입력 조건입니다.</p>)}
                        </div>

                        <div className="input_field">
                            <label>이름</label>
                            <input type="text" value={Name} className="field" onChange={onNameHandler} ref={register({ required:true, minLength: 2 })} name='name'/>
                            {errors.name && errors.name.type === 'required' && (<p id='error'>필수 입력 조건입니다.</p>)}
                            {errors.name && errors.name.type === 'minLength' && (<p id='error'>2글자 이상 입력 필수</p>)}
                        </div>

                        <div className="input_field">
                            <label>주민등록번호</label>
                            <input type="text" name='validate' value={Resident} className="field" onChange={onResidentHandler} ref={register({ required:true, minLength: 13, maxLength: 13 })}/>
                            {errors.validate && errors.validate.type === 'required' && (<p id='error'>필수 입력 조건입니다.</p>)}
                            {errors.validate && errors.validate.type === 'minLength' && (<p id='error'>13자 미만 입력 제한</p>)}
                            {errors.validate && errors.validate.type === 'maxLength' && (<p id='error'>13자 초과 입력 제한</p>)}
                        </div>

                        <div className="input_field">
                            <label>비밀번호</label>
                            <input type="password" name='password'value={password} className="field" onChange={onPasswordHanlder} ref={register({ required:true })}/>
                            {errors.password && errors.password.type === 'required' && (<p id='error'>필수 입력 조건입니다.</p>)}
                        </div>

                        <div className="input_field">
                            <label>비밀번호 확인</label>
                            <input type="password" name='password' value={ConfirmPassword} className="field" onChange={onConfirmPasswordHandler} ref={register({ required:true })}/>
                            {errors.password && errors.password.type === 'required' && (<p id='error'>필수 입력 조건입니다.</p>)}
                        </div>

                        <div className="input_field">
                            <label>휴대폰 번호</label>
                            <input type="tel" name='tel' className="field" value={Tel} onChange={onTelHandler} ref={register({ required:true })}/>
                            {errors.tel && errors.tel.type === 'required' && (<p id='error'>필수 입력 조건입니다.</p>)}
                        </div>
                        

                        {/* <div className="input_field">
                            <label>주소</label>
                            <input type="text" className="field"/>
                        </div> */}


                        {/* <div className="input_field">
                            <label>가입분야</label>
                            <div className="custom_select">
                                <select>
                                    <option value="">Select</option>
                                    <option value="male">환자</option>
                                    <option value="female">병원</option>
                                </select>
                            </div>
                        </div> */}


                        <div className="terms">
                            <label className="check">
                                <input type="checkbox"/>
                                <span className="checkmark"></span>
                            </label>
                            <p>약관 동의</p>
                        </div>

                        <div className="input_field">
                            <button className="btn" type='submit'>
                                회원가입
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        <Footer/>
    </div>
    )
}

export default withRouter(Sign_up);
