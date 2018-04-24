// @flow

import * as React from 'react';

type Props = {|
  text: string,
  isSmall?: boolean,
  isSpecial?: boolean,
  isFullWidth?: boolean,
  onClick?: (SyntheticEvent<HTMLLinkElement>) => void
|};

function Button(props: Props): React.Node {
  const { text, onClick } = props;
  const isSmall = props.isSmall || false;
  const isSpecial = props.isSpecial || false;
  const isFullWidth = props.isFullWidth || false;

  let classes = 'button';
  if (isSmall) {
    classes += ' small';
  }
  if (isSpecial) {
    classes += ' special';
  }
  if (isFullWidth) {
    classes += ' fit';
  }

  return (
    <a className={classes} onClick={onClick}>
      {text}
    </a>
  );
}

export default Button;
