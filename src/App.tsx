import React, { useState } from 'react';
import { Input } from './components/input.styles';
import { Container } from './components/container.styles';
import { Heading } from './components/heading.styles';
import { Button } from './components/button.styles';
import { ButtonContainer } from './components/buttonContainer.styles';
import { ErrorLabel } from './components/errorLabel.styles';

const App = () => {
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<string>('');

  const onClear = async () => {
    try {
      await fetch(`${process.env.REACT_APP_BACKEND_API_URI}/clear`);
      setMessage('');
    } catch (error) {
      console.error(error);
      setError('Failed to clear message');
    }
  };

  const onSubmit = async () => {
    try {
      await fetch(`${process.env.REACT_APP_BACKEND_API_URI}/write?message=${message}`);
    } catch (error) {
      console.error(error);
      setError('Failed to write message');
    }
  };

  return (
    <section>
      <Container>
        <Heading>Write message to display on LCD</Heading>
        <Input type='text' placeholder='Write message' value={message} maxLength={16} onChange={(e) => setMessage(e.target.value)} />
        <ButtonContainer>
          <Button onClick={onClear}>Clear</Button>
          <Button onClick={onSubmit}>Write</Button>
        </ButtonContainer>
        <ErrorLabel>{error}</ErrorLabel>
      </Container>
    </section>
  );
}

export default App;
