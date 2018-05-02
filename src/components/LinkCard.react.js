// @flow

import * as React from 'react';

type Props = {|
  title: string,
  description: string,
  link: string,
  color: 'red' | 'blue' | 'green' | 'magenta' | 'purple' | 'violet'
|};

function LinkCard(props: Props): React.Node {
  const colorMap = {
    red: 'style1',
    blue: 'style2',
    green: 'style3',
    magenta: 'style4',
    purple: 'style5',
    violet: 'style6'
  };

  const { color, description, link, title } = props;
  return (
    <article className={colorMap[color]}>
      <span className="image">
        <img src="images/pic02.jpg" alt="" />
      </span>
      <a href={link}>
        <h2>{title}</h2>
        <div className="content">
          <p>{description}</p>
        </div>
      </a>
    </article>
  );
}

export default LinkCard;
