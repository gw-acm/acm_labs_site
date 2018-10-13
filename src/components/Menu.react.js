// @flow

import * as React from 'react';
import { Link } from 'react-router-dom';

type Props = {||};

function Menu(props: Props): React.Node {
  return (
    <nav id="menu">
      <h2>Menu</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/hack-day">Hack Day</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
