// @flow

import * as React from 'react';

import Menu from './Menu.react';

type Props = {|
  +children: React.Node
|};

function PageWrapper(props: Props): React.Node {
  const { children } = props;
  return (
    <div id="wrapper">
      <header id="header">
        <div className="inner">
          <a href="/" className="logo">
            <span className="symbol">
              <img src="images/logo.svg" alt="" />
            </span>
            <span className="title">ACM Labs</span>
          </a>
          <nav>
            <ul>
              <li>
                <a href="#menu">Menu</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Menu />
      {children}
    </div>
  );
}

export default PageWrapper;
