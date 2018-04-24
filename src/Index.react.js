// @flow

import * as React from 'react';

import PageWrapper from './components/PageWrapper.react';
import ProjectCard from './components/ProjectCard.react';

type Props = {||};

function Index(props: Props): React.Node {
  const title = 'Welcome to ACM Labs';
  const subtitle = 'Our mission is to annoy Pat Cody as much as possible';
  return (
    <PageWrapper title={title} subtitle={subtitle}>
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
