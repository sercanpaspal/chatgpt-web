import React, { useState } from 'react';
import { Textarea, Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { addMessage } from '../../store/slices/chat';

function ChatForm() {
  const dispatch = useDispatch();

  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message) return;
    dispatch(addMessage(message));
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Textarea
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.which === 13 && !e.shiftKey && handleSubmit(e)}
      />
      <Button colorScheme="teal" type="submit">send</Button>
    </form>
  );
}

export default ChatForm;
