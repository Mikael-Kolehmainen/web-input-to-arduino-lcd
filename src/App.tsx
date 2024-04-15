import React, { useState } from 'react';
import { Input } from './components/input.styles';
import { Container } from './components/container.styles';
import { Heading } from './components/heading.styles';
import { Button } from './components/button.styles';
import { ButtonContainer } from './components/buttonContainer.styles';

const App = () => {
  const [message, setMessage] = useState<string>('');

  const onClear = () => {
    // TODO: Wrap in try-catch for error handling.
    // TODO: Move URL to environment variables.
    fetch('http://localhost:3001/clear');
    setMessage('');
  };

  const onSubmit = () => {
    // TODO: Wrap in try-catch for error handling.
    // TODO: Move URL to environment variables.
    fetch(`http://localhost:3001/write?message=${message}`);
  };

  return (
    <section>
      <Container>
        <Heading>Write message to display on LCD</Heading>
        <Input type='text' placeholder='Write message' value={message} onChange={(e) => setMessage(e.target.value)} />
        <ButtonContainer>
          <Button onClick={onClear}>Clear</Button>
          <Button onClick={onSubmit}>Write</Button>
        </ButtonContainer>
      </Container>
    </section>
  );
}

export default App;
