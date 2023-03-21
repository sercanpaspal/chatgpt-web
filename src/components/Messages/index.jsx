import React from 'react';
import { useSelector } from 'react-redux';
import selectors from '../../store/selectors';
import Message from '../Message';

function Messages() {
  const messages = useSelector(selectors.getChatMessages);
  return (
    <ul>
      {messages.map((message) => (
        <Message key={message} message={message} />
      ))}
    </ul>
  );
}

export default Messages;
