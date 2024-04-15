import React from 'react';
import { Input } from './components/input.styles';
import { SubmitButton } from './components/submitButton.styles';
import { Container } from './components/container.styles';
import { Heading } from './components/heading.styles';

const App = () => {
  return (
    <section>
      <Container>
        <Heading>Write message to display on LCD</Heading>
        <Input type='text' placeholder='Write message' />
        <SubmitButton type='submit' value='Display' />
      </Container>
    </section>
  );
}

export default App;
