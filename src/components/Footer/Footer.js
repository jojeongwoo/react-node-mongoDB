import React from 'react';
import './Footer.css';

// image
import Logo from '../../asset/footer/holder_logo.PNG';
import Footer_1 from '../../asset/footer/facebook.png';
import Footer_2 from '../../asset/footer/insta.PNG';
import Footer_3 from '../../asset/footer/youtube.png';

function Footer() {
    return(
    <div className="footer-wrap">
            <div className="top-color">
                    <div className="footer-address">
                        <img src = {Logo} className="footer-Logo"/>
                        <div className="txt-collection">
                            <div className="address txt">인천광역시 연수구 동춘동 봉재산로 20</div>
                            <div className="people txt">대표 : 조정우 | 사업자등록번호 : 0903-0903</div>
                            <div className="home-number txt">T.032-123-1234</div>
                        </div>
                    </div>

                    <div className="footer-infomation">
                        <h2 className="Info-text">INFORMATION</h2>
                            <li>이용약관</li>
                            <li>개인정보처리방침</li>
                            <li>이메일무단수집거부</li>
                    </div>

                    <div className="footer-contact">
                        <h2 className="contact-text">CONTECT US</h2>
                        <div className="contact-here">
                            <div className="number">010-2710-7364</div>
                            <div className="consulting">Am 09:00 ~ Pm 17:00</div>
                            <div className="closed">정기휴무 매주 월요일ㆍ주말(공휴일포함)</div>
                            <div className="contact-icon">
                                <img src={Footer_1} alt='footer'/>
                                <img src={Footer_2} alt='footer'/>
                                <img src={Footer_3} alt='footer'/>
                            </div>
                        </div>
                    </div>
            </div>
            
            <div className="bottom-color">
                <span>Copyrights © 2020 ??. All Rights Reserved.</span>
            </div>    
        </div> 
    )
}

export default Footer;