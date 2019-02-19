import React from 'react';
import {Router, Route, Switch, routerRedux} from 'dva/router';


import IndexPage from './routes/IndexPage';

const Routers = ({history}) => {
  return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={IndexPage}/>
        </Switch>
      </Router>
  );
}

export default Routers;
