import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMessage } from '../../store/slices/chat';

function ChatForm() {
  const dispatch = useDispatch();

  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addMessage(message));
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        name="message"
        cols="30"
        rows="10"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.which === 13 && !e.shiftKey && handleSubmit(e)}
      />
      <button type="submit">send</button>
    </form>
  );
}

export default ChatForm;
