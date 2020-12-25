import React, { useEffect } from 'react';
import axios from 'axios';

function Flow_test() {

  useEffect(() => {
    axios.get('/api/hello')
    .then(response => console.log(response.data));
  }, [])

  return (
    <div>
      데이터 흐름 테스트 페이지
    </div>
  )
}

export default Flow_test;