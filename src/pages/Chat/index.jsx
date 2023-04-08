import React from 'react';
import { useSelector } from 'react-redux';
import {
  Text, Alert, AlertTitle, AlertDescription, AlertIcon,
} from '@chakra-ui/react';
import ChatForm from '../../components/ChatForm';
import Messages from '../../components/Messages/index';
import selectors from '../../store/selectors';
import SelectPrompt from '../../components/SelectPrompt';

function Chat() {
  const chatErrorMessage = useSelector(selectors.getChatErrorMessage);

  return (
    <div>
      <Text fontSize="3xl">Your AI Assistant</Text>
      <SelectPrompt />
      <ChatForm />
      {chatErrorMessage ? (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Error!</AlertTitle>
          <AlertDescription>{chatErrorMessage}</AlertDescription>
        </Alert>
      ) : (
        <Messages />
      )}
    </div>
  );
}

export default Chat;
