import React from 'react';
import './Community2.css';

// Components 
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

// image
import point from '../../asset/Community/ic_pic.gif' ;
import n from '../../asset/Community/ic_new.gif';
import fix from '../../asset/Community/ic_fix.gif' ;
// import reply from '../../asset/Community/ic_reply.png' ;
import first from '../../asset/Community/page_first.gif' ; 
import pre from '../../asset/Community/page_pre.gif';
import next from '../../asset/Community/page_next.gif' ;
import end from '../../asset/Community/page_end.gif' ;

function Community() {
  return (
  <div>
      <Header/>
      <table className="sub_news" border="1" cellspacing="0" summary="CARE 공지사항" >
        <caption>게시판 리스트</caption>
        
        <col></col>
        <col width="210"></col>
        <col width="200"></col>
        <col width="180"></col>
        <colgroup />

        <thead>
            <tr>
                <th scope="col">번호</th>
                <th scope="col" >제목</th>
                <th scope="col">작성자</th>
                <th scope="col">날짜</th>
                <th scope="col">조회수</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td class="number"><br />
                  <img width="35" height="20" class="pic" src= {fix} />
                </td>
                <td class="title">
                    <a href="#">코로나 유의사항</a>
                    <img width="13" height="12" class="pic" alt="첨부이미지" src= {point}/>
                    <a class="comment" href="#" >[5]</a>
                    <img width="10" height="9" class="new" alt="새글" src= {n}/>
                </td>
                <td class="name">관리자</td>
                <td class="date">2020/12/03</td>
                <td class="hit">999+</td>
            </tr>
            <tr lass="reply">
              <td class="number"><br />
                <img width="35" height="20" class="pic" src={fix} />
              </td>
                <td class="title">
                    <img width="13" height="12" class="pic"/>
                <a href="#">코로나 19 선별 진료소 주소</a>
                <img width="10" height="9" class="new" alt="새글" src={n}></img>
                </td>
            <td class="name">관리자</td>
                <td class="date">2020/12/03</td>
                <td class="hit">999+</td>
            </tr>
            <tr>
              <td class="number">001</td>
              <td class="title">회원정보 수정에 관하여</td>
              <td class="name">박희연</td>
              <td class="date">2020/11/30</td>
              <td class="hit">1</td>
            </tr>
            <tr>
              <td class="number">002</td>
              <td class="title">관심분야 추가...</td>
              <td class="name">박희연</td>
              <td class="date">2020/11/01</td>
              <td class="hit">36</td>
            </tr>
            <tr>
              <td class="number">003</td>
              <td class="title">본인인증</td>
              <td class="name">박희연</td>
              <td class="date">2020/10/29</td>
              <td class="hit">15</td>
            </tr>

        </tbody>
      
    <br />
    <br />
    <tfoot> 
      <tr>
        <td colspan="5">
          <div class="paging">
            <a href="#" class="bbsBtn"><img alt="첫 페이지로" src={first} /></a> 
            <a href="#" class="bbsBtn"><img alt="이전 페이지로" src={pre} /></a>
            <a href="#" class="active">1</a> 
            <a href="#">2</a> 
            <a href="#">3</a> 
            <a href="#">4</a> 
            <a href="#">5</a> 
            <a href="#">6</a> 
            <a href="#">7</a> 
            <a href="#">8</a> 
            <a href="#">9</a> 
            <a href="#">10</a>
            <a href="#" class="bbsBtn"><img src= {next} alt="다음 페이지로" /></a>
            <a href="#" class="bbsBtn"><img src= {end} alt="마지막 페이지로" /></a>
            </div>
        </td>
      </tr>
    </tfoot>
    </table> 
      <Footer/>
  </div>

  )
}

export default Community;