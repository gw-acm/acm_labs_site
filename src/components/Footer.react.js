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
              <a className="icon style2 fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a className="icon style2 fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a className="icon style2 fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a className="icon style2 fa-dribbble">
                <span className="label">Dribbble</span>
              </a>
            </li>
            <li>
              <a className="icon style2 fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a className="icon style2 fa-500px">
                <span className="label">500px</span>
              </a>
            </li>
            <li>
              <a className="icon style2 fa-phone">
                <span className="label">Phone</span>
              </a>
            </li>
            <li>
              <a className="icon style2 fa-envelope-o">
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
