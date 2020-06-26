/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Route, Switch } from 'react-router-dom';
import ReportWeekly from './menus/ReportWeekly';
import ReportProject from './menus/ReportProject';
import ReportQuarter from './menus/ReportQuarter';

const ContainerStyle = css`
  display: flex;
  border: 1px solid #00f;
  flex-basis: 70%;
`;

function Content() {
  return (
    <div css={ContainerStyle}>
      <h2>Contents</h2>
      <div>
        <Switch>
          <Route path="/report/weekly" component={ReportWeekly} />
          <Route path="/report/quarter" component={ReportQuarter} />
          <Route path="/report/project" component={ReportProject} />
        </Switch>
      </div>
    </div>
  );
}

export default Content;
