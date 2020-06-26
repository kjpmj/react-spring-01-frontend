import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function Hello() {
  const [currentTime, setCurrentTime] = useState('');

  async function fetchTime(params) {
    const response = await axios.get('/api/hello');
    setCurrentTime(response.data);
  }

  useEffect(() => {
    fetchTime();
  }, []);

  return (
    <div>
      <div>서버시간은 몇시일까요?</div>
      <div>{currentTime}</div>
    </div>
  );
}

export default Hello;
