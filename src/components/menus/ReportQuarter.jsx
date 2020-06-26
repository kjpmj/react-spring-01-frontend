/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ContainerStyle = css`
  display: flex;
`;

function ReportQuarter() {
  const [pageData, setPageData] = useState({
    menuName: '',
    menuId: '',
  });

  const fetchPageData = async () => {
    const response = await axios.post('/api/report/quarter');
    setPageData(response.data);
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

export default ReportQuarter;
