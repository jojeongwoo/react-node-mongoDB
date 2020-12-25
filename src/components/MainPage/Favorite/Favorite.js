import React from 'react'; 
import './Favorite.css';

// Inside_image
// import Card_1 from '../../../asset/main/health.jpg';
// import Card_2 from '../../../asset/main/vitamin.jpg';
// import Card_3 from '../../../asset/main/disease.jpg';
// import Card_4 from '../../../asset/main/skin.png';
// import Card_5 from '../../../asset/main/immunity.jpg';
// import Card_6 from '../../../asset/main/handwashing.jpg';
// import Card_7 from '../../../asset/main/teeth.jpg';
// import Card_8 from '../../../asset/main/medicine1.jpg';


function Card({ card }) {
    return (
        <div className="card">
            <a href={card.src}>
                <img src={card.inImg} className="card_img" alt="img"/>
            </a>

            <div className="card_box">{card.text}</div>
        </div>
    );
}

function Favorite() {
    const cards = [
        {
            id: 1,
            text: '올바른 건강 관리 방법',
            inImg: 'https://media.istockphoto.com/photos/medical-exam-picture-id1254897750?b=1&k=6&m=1254897750&s=170667a&w=0&h=lc2M8c3rVSTrFpXdOJ3R_lfNyh4uoCuRKki21rrSrPw=',
            src: 'interest_first'
        },
        {
            id: 2,
            text: '올바른 비타민 복용법',
            inImg: 'https://cdn.pixabay.com/photo/2015/02/04/12/08/tablets-623706__340.jpg',
            src: 'interest_second'
        },
        {
            id: 3,
            text: '올바른 전염병 예방법',
            inImg: 'https://cdn.pixabay.com/photo/2020/03/26/09/06/covid-19-4969674__340.jpg',
            src: 'interest_third'
        },
        {
            id: 4,
            text: '올바른 피부 관리',
            inImg: 'https://media.istockphoto.com/photos/keep-your-skin-clean-picture-id1170104930?b=1&k=6&m=1170104930&s=170667a&w=0&h=R1t6g8sBnSTV5RDM_tMOU5BTSULFP3AvMGOtgO2NHNo=',
        }
    ];

    const cards_2 =[
        {
            id: 5,
            text: '올바른 면역력 강화법',
            inImg: 'https://media.istockphoto.com/photos/virus-attack-defend-from-the-virus-concept-picture-id1214641862?b=1&k=6&m=1214641862&s=170667a&w=0&h=E280A-B2Lmsx-Ngns_W5gUtl6cBx-8fVmHI4Uul1QKk=',
        },
        {
            id: 6,
            text: '올바른 손씻기',
            inImg: 'https://media.istockphoto.com/photos/close-up-of-medical-staff-washing-hands-hand-hygiene-picture-id1166835058?b=1&k=6&m=1166835058&s=170667a&w=0&h=Vmp6SPDK3qAqP-Bqf4sOAnWUO7y7sCkeX-bCm0GAmRU=',
        },
        {
            id: 7,
            text: '올바른 양치 방법',
            inImg: 'https://media.istockphoto.com/photos/mother-father-and-daughter-brushing-teeth-in-bathroom-picture-id1193399869?b=1&k=6&m=1193399869&s=170667a&w=0&h=XVsXt_7bSm-jzxG2RWdKWRZWl7fJLqCZNowJ7u0HXRw=',
        },
        {
            id: 8,
            text: '올바른 약 보관 방법',
            inImg: 'https://media.istockphoto.com/photos/close-up-of-senior-man-organizing-medication-into-pill-dispenser-picture-id1184828863?b=1&k=6&m=1184828863&s=170667a&w=0&h=47wyykB_qbrcVf106N9eQB0eMyK7RH_k2gXnu4I33PM=',
        }
    ];

    return (
    <div className="section-wrap">
            <div className="section-header">
                <h1>관심 분야</h1>
                <h2>field of interest</h2>
            </div>

            <div className="section-imgLine1">
                {cards.map(card => (
                    <Card card={card} key={card.id}/>
                ))}
            </div>

            <div className="section-imgLine2">
                {cards_2.map(card => (
                    <Card card={card} key={card.id}/>
                ))}
            </div>




                {/* <div class="card">
                    <a href="img/img/healthgood.jpg">
                        <img src={Card_1} class="card_img"/>
                    </a>
                        <div class="card_box">올바른 건강 관리 방법</div>
                    </div>   
                
                <div class="card">
                    <a href="img/img/vitamineat.PNG">
                        <img src={Card_2} class="card_img"/>
                    </a>
                    <div class="card_box">올바른 비타민 복용법</div>
                </div>

                <div class="card">
                    <a href="img/img/diseaseout.jpg">
                        <img src="img/img/disease.jpg" class="card_img"/>
                    </a>
                    <div class="card_box">올바른 전염병 예방법</div>
                </div>
                
                <div class="card">
                    <a href="img/img/skingood.jpg">
                        <img src="img/img/skin.png" class="card_img"/>
                    </a>
                    <div class="card_box">올바른 피부 관리</div>
                </div>
            </div>
            

            <div class="section-imgLine2">
                <div class="card">
                    <a href="img/img/immunityup.png">
                        <img src="img/img/immunity.jpg" class="card_img"/>
                    </a>
                    <div class="card_box">올바른 면역력 강화법</div>
                </div>    
                
                <div class="card">
                    <a href="img/img/goodhandwashing.png">
                        <img src="img/img/handwashing.jpg" class="card_img"/>
                    </a>
                    <div class="card_box">올바른 손씻기</div>
                </div>

                <div class="card">
                    <a href="img/img/goodteeth.jpg">
                        <img src="img/img/teeth.jpg" class="card_img"/>
                    </a>
                    <div class="card_box">올바른 양치 방법</div>
                </div>

                <div class="card">
                    <a href="img/img/medicine.jpg">
                        <img src="img/img/medicine1.jpg" class="card_img"/>
                    </a>
                    <div class="card_box">올바른 약 보관 방법</div>
                </div> */}
            </div>
    );
}

export default Favorite;