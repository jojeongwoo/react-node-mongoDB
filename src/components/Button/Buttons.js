import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import React from "react";

import './Buttons.css';

function Buttons() {
  const StyledButton = withStyles({
    root: {
      backgroundColor: '#90caf9',
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
        <h1>오시는 길</h1>
        <p>CARE 병원에 오시는 길을 안내해드립니다.</p>
      </div>

      <div className="load_buttons">
          <StyledButton variant="contained" href='/Location_first'>
            서울대병원
          </StyledButton>

          <StyledButton variant="contained" href='/Location_second'>
            나사렛병원
          </StyledButton>

          <StyledButton variant="contained" href='/Location_third'>
            연세대병원
          </StyledButton>

          <StyledButton variant="contained" href='/Location_fourth'>
            동의대병원
          </StyledButton>

          <StyledButton variant="contained" href='/Location_fifth'>
            경희대병원
          </StyledButton>
      </div>
    </div>
  );
}


export default Buttons;