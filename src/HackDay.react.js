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
          <li>Join our <a href="http://go.gwu.edu/acmlabsslack">slack</a></li>
          <li>Install these things: <a href="https://atom.io">Atom</a>, <a href="https://www.python.org/">Python</a>, <a href="https://reactjs.org/tutorial/tutorial.html#setup-for-the-tutorial">React</a></li>
        </ul>
      </div>
      <div>
        <strong>Relevant Links</strong>
        <br />
        <br />
        <ul>
          <li><a href="https://opensource.com/resources/what-open-source">What is Open Source?</a></li>
          <li><a href="https://hacktoberfest.digitalocean.com/">Hacktoberfest</a></li>
          <li><a href="https://github.com/GSA/code-gov/wiki/Tools-&-Resources">Code.gov Resources</a></li>
          <li><a href="https://code.gov/#!/open-tasks">Code.gov Help Wanted</a></li>
          <li><a href="https://github.com/GSA/code-gov">Code.gov Repo</a></li>
          <li><a href="https://github.com/nasa/apod-api">NASA Picture of the Day</a></li>
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
