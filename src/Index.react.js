// @flow

import * as React from 'react';

import PageWrapper from './components/PageWrapper.react';
import LinkCard from './components/LinkCard.react';

type Props = {||};

function Index(props: Props): React.Node {
  const title = 'Welcome to ACM Labs';
  const subtitle =
    'ACM Labs is a new initiative by GW ACM with the goal of supporting and encouraging students to work on open source coding projects. We create tutorials and curate resources for GW students to learn new programming skills and create their own projects.';
  return (
    <PageWrapper title={title} subtitle={subtitle}>
      <div>
        <strong>Why</strong> work on an open source or individual programming
        project? Here are some reasons:
        <br />
        <br />
        <ul>
          <li>Boost your resume and online portfolio</li>
          <li>
            Learn new skills that are directly relevant to internships,
            research, and/or your interests
          </li>
          <li>
            Become a better programmer and most likely earn better grades as a
            result
          </li>
          <li>Win prizes from ACM</li>
        </ul>
      </div>
      <div>
        <strong>We have big things coming soon!</strong> Be on the lookout for
        the following:
        <br />
        <br />
        <ul>
          <li>Open Source projects you can contribute to</li>
          <li>
            Project ideas for personal projects you can do on your own or with
            friends to build your portfolio
          </li>
          <li>Tutorials and Resources</li>
          <li>
            A friendly competition from ACM with prizes for completing tutorials
            and contributing to projects
          </li>
        </ul>
      </div>
      <div>
        <strong>In the meantime, here are some basic guides:</strong>
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

export default Index;
