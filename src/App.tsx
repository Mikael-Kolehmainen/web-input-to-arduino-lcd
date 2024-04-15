import React, { useState } from 'react';
import { Input } from './components/input.styles';
import { SubmitButton } from './components/submitButton.styles';
import { Container } from './components/container.styles';
import { Heading } from './components/heading.styles';

const App = () => {
  const [message, setMessage] = useState<string>('');

  const onSubmit = () => {
    
  };

  return (
    <section>
      <Container>
        <Heading>Write message to display on LCD</Heading>
        <Input type='text' placeholder='Write message' onChange={(e) => setMessage(e.target.value)} />
        <SubmitButton type='submit' value='Display' onClick={onSubmit} />
      </Container>
    </section>
  );
}

export default App;
