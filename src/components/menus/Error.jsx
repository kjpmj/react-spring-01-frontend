/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ContainerStyle = css`
  display: flex;
`;

function Error() {
  const [pageData, setPageData] = useState({
    menuName: '',
    menuId: '',
  });

  const fetchPageData = async () => {
    try {
      console.log('error 시작');
      const response = await axios.post('/api/report/error');

      setPageData(response.data);
    } catch (err) {
      console.log(err.response);
    }
  };

  useEffect(() => {
    fetchPageData();

    return () => {
      setPageData({
        menuName: '',
        menuId: '',
      });
    };
  }, []);

  return (
    <div css={ContainerStyle}>
      <h2>{pageData.menuName}</h2>
      <div>MenuId: {pageData.menuId}</div>
    </div>
  );
}

export default Error;
