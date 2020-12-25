import React from 'react';
import Introduce from  '../../asset/Intro.jpg';

import './IntroSection.css';

function IntroSection() {
  return (
    <div className='intro_section'>
      <div className="load">
        <h1 id="load">About CARE</h1>
      </div>

      <section class="introduction-wrap">
          <img src = {Introduce} alt='intro_img' className='intro_img'/>
          <div class="intro_text">
            <h2 className='intro_h2'>CARE Introduction</h2>
            <p>
              &nbsp;블록체인을 기반으로한 의료정보 공유 시스템은 블록체인을 기반으로 구성하여 의료정보를 
              필요로 하는 의사, 약사, 보험사,병무청 등에게 의료정보를 제공합니다. 
              또한, 의료 진단서나 진료확인서와 같은 의료서류들을 기관의 인증없이 발행할 수 있게 하는 것이 CARE 입니다.
            </p>
            <p>
              &nbsp;사용자는 분산신원인증(DID)를 통해 신원이 인증된 사용자에게 의료 서류를 보여줍니다. 
              그리고 블록체인 상에 의료정보가 기록되어 있어서 의료정보의 위변조가 불가능하여 의료분쟁까지 가지 않아도 의료사고 문제를 해결할 수 있습니다. 
              중앙 기관없이 신뢰할 수 있는 의료정보를 공유할 수 있다면, 다양한 분야에서 혁신적인 정보 공유 시스템이 될 것 입니다.
            </p>
          </div>
      </section>  
    </div>
  )
}

export default IntroSection;
