import React from 'react';
import './Notice.css';

function Notice() {
    return (
        <div className="notice-wrap">
            <div className="notice-header">
                <h1>공지사항</h1>
                <h2>COMMUNITY</h2>
            </div>

            <div className="notice-box">
                <div className="box-wrap">
                    <div className="notice-day">
                        <div className="notice-date">
                            <div className = "month">11</div>
                            <div className = "date">2020.28</div>
                        </div>
                    </div>

                    <a className="notice-text" href="/">
                        [코로나]국내 발생 486명, 해외 유입 18명
                    </a>

                    <div className="notice-day">
                        <div className="notice-date">
                            <div className = "month">11</div>
                            <div className = "date">2020.28</div>
                        </div>
                    </div>

                    <a className="notice-text" href='/'>
                        [코로나 예방법] 마스크 꼭 쓰기
                    </a>
                </div>
            </div>
            <div className="notice-dot">
                <ul className="dot">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    )
}

export default Notice;