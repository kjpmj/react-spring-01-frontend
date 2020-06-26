/** @jsx jsx */
import SideMenu from './SideMenu';
import Content from './Content';
import { jsx, css } from '@emotion/core';

const ContainerStyle = css`
  display: flex;
  border: 1px soilid #fab;
`;

function Body() {
  return (
    <div css={ContainerStyle}>
      <SideMenu />
      <Content />
    </div>
  );
}

export default Body;
