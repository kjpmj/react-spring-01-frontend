/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const ContainerStyle = css`
  display: flex;
  border: 1px solid #eaeaea;
`;

function Footer() {
  return <div css={ContainerStyle}>Footer</div>;
}

export default Footer;
