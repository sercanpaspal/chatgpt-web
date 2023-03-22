import React from 'react';
import { useSelector } from 'react-redux';
import {
  Text, Alert, AlertTitle, AlertDescription, AlertIcon,
} from '@chakra-ui/react';
import ChatForm from '../../components/ChatForm';
import Messages from '../../components/Messages/index';
import selectors from '../../store/selectors';

function Home() {
  const chatErrorMessage = useSelector(selectors.getChatErrorMessage);

  return (
    <div>
      <Text fontSize="5xl">Home</Text>
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

export default Home;
