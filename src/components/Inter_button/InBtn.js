import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import React from "react";

import './InBtn.css';

function InBtn() {
  const StyledButton = withStyles({
    root: {
      background: '#90caf9',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
      marginRight: '10px',
      fontWeight: 'bold',
      '&:hover': {
        background: "#0089ff",
      }
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);

  return(
    <div>
      <div className="load">
        <h1>관심분야</h1>
        <p>다양한 건강정보를 소개합니다.</p>
      </div>

      <div className="load_buttons">
          <StyledButton hover variant="contained" href='/Interest_first'>
            건강관리방법
          </StyledButton>

          <StyledButton hover variant="contained" href='/Interest_second'>
            비타민 복용법
          </StyledButton>

          <StyledButton hover variant="contained" href='/Interest_third'>
            전염병 예방법
          </StyledButton>

          <StyledButton hover variant="contained" href='/Interest_first'>
            피부 관리
          </StyledButton>

          <StyledButton hover variant="contained" href='/Interest_first'>
            면역력 강화
          </StyledButton>
      </div>
    </div>
  );
}


export default InBtn;