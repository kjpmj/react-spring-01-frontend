/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Route, Switch } from 'react-router-dom';
import ReportWeekly from './menus/ReportWeekly';
import ReportProject from './menus/ReportProject';
import ReportQuarter from './menus/ReportQuarter';
import NotFound from './error/NotFound';
import Home from './menus/Home';
import Error from './menus/Error';

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
          <Route path="/" component={Home} exact />
          <Route path="/report/weekly" component={ReportWeekly} />
          <Route path="/report/quarter" component={ReportQuarter} />
          <Route path="/report/project" component={ReportProject} />
          <Route path="/report/error" component={Error} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default Content;
