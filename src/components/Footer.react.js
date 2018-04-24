// @flow

import * as React from 'react';

type Props = {||};

function Footer(props: Props): React.Node {
  return (
    <footer id="footer">
      <div className="inner">
        <section>
          <h2>Connect With Us</h2>
          <ul className="icons">
            <li>
              <a
                href="https://www.facebook.com/groups/gw.acm/"
                className="icon style2 fa-facebook"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/gw-acm"
                className="icon style2 fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:acm@gwu.edu"
                className="icon style2 fa-envelope-o"
              >
                <span className="label">Email</span>
              </a>
            </li>
          </ul>
        </section>
        <ul className="copyright">
          <li>&copy; GW ACM. All rights reserved</li>
          <li>
            Design: <a href="http://html5up.net">HTML5 UP</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
