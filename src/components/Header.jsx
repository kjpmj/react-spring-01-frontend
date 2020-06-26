/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const ContainerStyle = css`
  display: flex;
  border: 1px solid #0f0;
`;

function Header() {
  return <div css={ContainerStyle}>헤더</div>;
}

export default Header;
