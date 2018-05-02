// @flow

import * as React from 'react';

import PageWrapper from './components/PageWrapper.react';
import ProjectCard from './components/ProjectCard.react';

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
      <section className="tiles">
        <ProjectCard
          title="Sample Project"
          description="This project is really cool!"
          link="/"
          color="red"
        />
        <ProjectCard
          title="Sample Project 2"
          description="This project is even cooler!"
          link="/"
          color="blue"
        />
      </section>
    </PageWrapper>
  );
}

export default Index;
