/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Link } from 'react-router-dom';

const ContainerStyle = css`
  display: flex;
  border: 1px solid #f00;
  flex-basis: 30%;
`;

function SideMenu() {
  return (
    <div css={ContainerStyle}>
      <h2>Side Menu</h2>
      <ul>
        <li>
          <Link to="/report/weekly">주간보고</Link>
        </li>
        <li>
          <Link to="/report/quarter">분기보고</Link>
        </li>
        <li>
          <Link to="/report/project">프로젝트 투입</Link>
        </li>
      </ul>
    </div>
  );
}

export default SideMenu;
