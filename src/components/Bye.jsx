import React from 'react';
import { useCallback } from 'react';
import axios from 'axios';

function Bye() {
  const fetchBy = async () => {
    const response = await axios.post('/api/bye');
    alert(response.data);
  };

  const onClickByeButton = useCallback(() => {
    fetchBy();
  }, []);

  return <button onClick={onClickByeButton}>바이 버튼</button>;
}

export default Bye;
