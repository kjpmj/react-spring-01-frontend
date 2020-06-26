/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const ContainerStyle = css`
  display: flex;
  border: 1px solid #00f;
`;

function ReportProject() {
  return <div css={ContainerStyle}>프로젝트 투입 Contents</div>;
}

export default ReportProject;
