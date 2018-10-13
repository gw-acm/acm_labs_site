// @flow

import * as React from 'react';

import PageWrapper from './components/PageWrapper.react';
import LinkCard from './components/LinkCard.react';

type Props = {||};

function HackDay(props: Props): React.Node {
  const subtitle = "Welcome to the home page for GW ACM's Hack Day!";
  return (
    <PageWrapper title="Hack Day" subtitle={subtitle}>
      <div>
        <strong>Here are some things you can do to get set up:</strong>
        <br />
        <br />
        <ul>
          <li>Join our slack</li>
          <li>Install these things</li>
          <li>Item3</li>
        </ul>
      </div>
      <div>
        <strong>Today's schedule looks like the following:</strong>
        <br />
        <br />
        <ul>
          <li>Open Source projects you can contribute to</li>
          <li>Item2</li>
          <li>Tutorials and Resources</li>
          <li>Item4</li>
        </ul>
      </div>
      <section className="tiles">
        <LinkCard
          title="Git and GitHub"
          description="A ten minute guide to git-ting started with Git and GitHub"
          link="https://guides.github.com/activities/hello-world/"
          color="red"
        />
        <LinkCard
          title="Free Developer Tools"
          description="Simply use your student email to get access to tons of free and incredibly useful tools"
          link="https://education.github.com/pack"
          color="blue"
        />
      </section>
    </PageWrapper>
  );
}

export default HackDay;
