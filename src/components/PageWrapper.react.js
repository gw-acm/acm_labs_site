// @flow

import * as React from 'react';

import Menu from './Menu.react';
import Footer from './Footer.react';

type Props = {|
  +title: string,
  +subtitle?: string,
  +children: React.Node
|};

function PageWrapper(props: Props): React.Node {
  const { children, subtitle, title } = props;
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
      <div id="main">
        <div className="inner">
          <header>
            <h1>{title}</h1>
            {subtitle && <p>{subtitle}</p>}
          </header>
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PageWrapper;
