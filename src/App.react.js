// @flow

import * as React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Index from './Index.react';
import Elements from './Elements.react';
import Generic from './Generic.react';
import HackDay from './HackDay.react';

type Props = {||};

function App(props: Props): React.Node {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact={true} path="/" component={Index} />
        <Route exact={true} path="/hack-day" component={HackDay} />
        <Route exact={true} path="/elements" component={Elements} />
        <Route exact={true} path="/generic" component={Generic} />
      </Switch>
    </Router>
  );
}

export default App;
