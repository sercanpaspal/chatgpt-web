import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Text, Button, Alert, AlertTitle, AlertDescription, AlertIcon,
} from '@chakra-ui/react';
import { setActiveScreen } from '../../store/slices/app';
import { SCREENS } from '../../constants';
import ChatForm from '../../components/ChatForm';
import Messages from '../../components/Messages/index';
import selectors from '../../store/selectors';

function Home() {
  const dispatch = useDispatch();
  const chatErrorMessage = useSelector(selectors.getChatErrorMessage);

  const handleEditApiKey = () => dispatch(setActiveScreen(SCREENS.SETTINGS));

  return (
    <div>
      <Text fontSize="5xl">Home</Text>
      <Button type="button" onClick={handleEditApiKey}>Settings</Button>
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
